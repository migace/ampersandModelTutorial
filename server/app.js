const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongo = require('mongodb'),
      mongoClient = mongo.MongoClient,
      app = express(),
      http = require('http'),
      server = http.createServer(app),
      io = require('socket.io').listen(server);

server.listen(3001);

// CONSTANTS
const DB_URL = 'mongodb://localhost:27017/ampersandModelTutorial',
      API_ERROR = {
          CREATE_PEOPLE: 410,
      },
      SKIP_MONGO_DATA = 0,
      LIMIT_MONGO_DATA = 5;

// variables
let db;

// connect mongodb
mongoClient.connect(DB_URL, (err, database) => {
    if (err) {
        console.log("[DB]: " + err);
        return;
    }

    db = database;

    app.listen(3000, () => {
        console.log("App listening on port 3000!");
    });
});

// middleware
app.use(express.static(path.join(__dirname, '../client/static')));

if (process.env.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, '../client')));
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("[GET '/']: " + path.join(__dirname, '../', 'index.html'));
    res.sendFile(path.join(__dirname, '../client/', 'index.html'));
});

// websockets (socketio connection)
io.on("connection", (socket) => {
    console.log('New connection: ' + socket.id);
});

// API
app.get('/person/:pesel', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    console.log("[API GET '/person/" + req.params.pesel + "']");
    let cursor = db.collection('people').find( {pesel: req.params.pesel}),
        response = {
            data: [],
        };

    cursor.toArray((err, result) => {
        if (err) {
            console.log("[API GET '/person/" + req.params.pesel + "']: err: ");
            console.log(err);

            res.end(JSON.stringify(response, null, 3));
        }

        console.log('MONGODB results:');
        console.log(result);

        response.data = result;
        res.end(JSON.stringify(response, null, 3));
    });
});

app.get('/person/:skip?/:limit?', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const skip = parseInt(req.params.skip) || SKIP_MONGO_DATA,
          limit = parseInt(req.params.limit) || LIMIT_MONGO_DATA;

    let cursor = db.collection('people').find({}).skip(skip).limit(limit),
        response = {
            data: [],
            all: null,
            skip,
            limit,
        };

    db.collection('people').count({}, (err, count) => {
        if (!err) {
            response.all = count;
        }

        cursor.toArray((err, result) => {
            if (err) {
                console.log("[API GET '/person/'");
                console.log(err);

                res.end(JSON.stringify(response, null, 3));
            }

            response.data = result;
            res.end(JSON.stringify(response, null, 3));
        });
    });
});

app.post('/person', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    console.log("[API POST '/person']");
    console.log(req.body);

    db.collection('people').save(req.body, (err, result) => {
        if (err) {
            console.log("[API POST '/person' DB]:");
            return res.end(JSON.stringify({ error: API_ERROR.CREATE_PEOPLE }, null, 3));
        }

        console.log("[API POST '/person' DB]: Data was saved.");
        io.emit('new_person', { data: req.body});
        return res.end(JSON.stringify({ data: req.body }, null, 3));
    });
});

import * as React from "react"
import qwest from "qwest"
import io from "socket.io-client"

import PeopleList from "./list"
import Paginator from "../general/paginator"
import CONSTANTS from "../../constants"

interface PeopleListProps {
  url: string;
  socket?: any;
}

interface State {
    data?: any;
    skip?: number;
};

export default class PeopleBox extends React.Component<PeopleListProps, State> {
    constructor() {
        super();

        this.state = {
            data: {
                data: [],
                skip: 0,
                all: 0,
                limit: 0
            },
            skip: 0
        };
    }

    loadPeopleListFromServer(skip = 0, limit = CONSTANTS.LIMIT_DATA) {
        qwest.get(this.props.url + skip + "/" + limit)
            .then((xhr, data) => {
                let newData = data,
                    oldData = this.state.data.data;

                newData.data = oldData.concat(newData.data);

                console.log(newData);

                this.setState({
                    data: newData,
                    skip
                });
            })
            .catch((xhr, response) => {
                // TODO: implements catch errors
            })
    }

    componentDidMount() {
        this.loadPeopleListFromServer();
        this.props.socket.on("new_person", (data) => {
            const newData = this.state.data;
            newData.data.push(data.data);
            this.setState({ data: newData });
        });
    }

    onNextPaginator(skip) {
        if (this.state.data.data.length < skip + CONSTANTS.LIMIT_DATA) {
            this.loadPeopleListFromServer(skip);
        } else {
            this.setState({skip});
        }
    }

    onPrevPaginator(skip) {
        this.setState({skip});
    }

    render() {
        let content, currentData,
            start = this.state.skip,
            end = this.state.skip + CONSTANTS.LIMIT_DATA;

        console.log(this.state.data.data);
        console.log("slice("+start+","+end+")");

        currentData = this.state.data.data.slice(this.state.skip, this.state.skip + CONSTANTS.LIMIT_DATA);

        if (this.state.data.data.length === 0) {
            content = "Empty table. Add some data ;)";
        } else {
            content = (
                <div>
                    <PeopleList data={currentData} />
                    <Paginator
                        skip={this.state.data.skip}
                        limit={this.state.data.limit}
                        all={this.state.data.all}
                        current={this.state.skip}
                        onPrevClick={this.onPrevPaginator.bind(this)}
                        onNextClick={this.onNextPaginator.bind(this)}
                    />
                </div>
            );
        }

        return (
            <div className="peopleBox">
                {content}
            </div>
        )
    }
}

import PersonModel from './model/person'
import qwest from 'qwest'

function getPerson(pesel: string) {
    qwest.get('/person/' + pesel)
        .then((xhr, response) => {
            console.log('[CLIENT]: received response: ');
            console.log(response);
        });
}

function createPerson(model) {
    var newPerson = new PersonModel({
        firstname: model.firstname,
        lastname: model.lastname,
        pesel: model.pesel,
        email: model.email,
        description: model.description
    });

    return new Promise((resolve, reject) => {
        newPerson.save(newPerson, {
            success: (xhr, response) => {
                if (response.error) {
                    console.log('[newPerson: save()]: error_code: ' + response.error);
                    resolve(response);
                }
            }
        });
    });
}

export { getPerson, createPerson }

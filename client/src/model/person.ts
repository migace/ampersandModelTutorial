import AmpersandModel from 'ampersand-model'

let Person = AmpersandModel.extend({
    url: '/person',
    props: {
        firstname: 'string',
        lastname: 'string',
        pesel: 'string',
        email: 'string',
        description: 'string'
    },
    derived: {

    }
});

export default Person;

import * as React from "react"
import * as ReactDOM from "react-dom"
import io from "socket.io-client";

import '../style/global.less!'
import { getPerson, createPerson } from "./people"
import CONSTANTS from "./constants"
import PeopleBox from "./components/people/box"

const socket = io("http://localhost:3001");

getPerson('12345678901');

if( document.readyState === "complete" ) {
    let getNewPersonFormData = () => {
        const firstname: any = document.getElementById('firstname'),
              lastname: any = document.getElementById('lastname'),
              pesel: any = document.getElementById('pesel'),
              email: any = document.getElementById('email'),
              description: any = document.getElementById('description');

        return {
            firstname: firstname ? firstname.value : '',
            lastname: lastname ? lastname.value : '',
            pesel: pesel ? pesel.value : '',
            email: email ? email.value : '',
            description: description ? description.value : '',
        }
    }

    (() => {
        let newPersonForm = document.getElementById('newPersonForm'),
            sendNewPersonForm = document.getElementById('sendNewPersonForm');

        sendNewPersonForm.addEventListener('click', (event) => {
            event.preventDefault();

            createPerson(getNewPersonFormData())
                .then((response) => {
                    console.log('Promise then repsonse: ');
                    console.log(response);
                });

            console.log(getNewPersonFormData());
        });
    })();

    ReactDOM.render(
        React.createElement(PeopleBox, { url: CONSTANTS.API.GET_PEOPLE, socket }),
        document.getElementById('react-content')
    );
}

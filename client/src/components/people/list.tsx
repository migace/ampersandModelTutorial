import * as React from "react"

import Person from "./person"

interface Props {
    data: any
}

interface State {}

export default class PeopleList extends React.Component<Props, State> {
    render() {
        let peopleNodes = this.props.data.map((person) => {
            return (
                <Person key={person._id} name={person.firstname} lastname={person.lastname}
                    description={person.description} pesel={person.pesel} />
            );
        });

        return (
            <div className="peopleList">
                <table className="pure-table pure-table-horizontal">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Pesel</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peopleNodes}
                    </tbody>
                </table>
            </div>
        )
    }
}

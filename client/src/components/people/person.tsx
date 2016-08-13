import * as React from "react"

interface Props {
    name: string;
    lastname: string;
    description: string;
    pesel: string;
}

interface State {

}

export default class Person extends React.Component<Props, State> {
    render() {
        return (
            <tr className="person">
                <td>{this.props.name}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.description}</td>
                <td>{this.props.pesel}</td>
            </tr>
        )
    }
}

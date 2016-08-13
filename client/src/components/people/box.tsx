import * as React from "react"
import qwest from "qwest"
import io from "socket.io-client";

import PeopleList from "./list"

interface PeopleListProps {
  url: string;
  socket?: any;
}

interface State {
    data?: any;
};

export default class PeopleBox extends React.Component<PeopleListProps, State> {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    loadPeopleListFromServer() {
        qwest.get(this.props.url)
            .then((xhr, data) => {
                this.setState({data: data.data});
            })
            .catch((xhr, response) => {
                // TODO: implements catch errors
            })
    }

    componentDidMount() {
        this.loadPeopleListFromServer();
        this.props.socket.on("new_person", (data) => {
            const newData = this.state.data;
            newData.push(data.data);
            this.setState({ data: newData });
            console.log(newData);
        });
    }

    render() {
        return (
            <div className="peopleBox">
                <PeopleList data={this.state.data} />
            </div>
        )
    }
}

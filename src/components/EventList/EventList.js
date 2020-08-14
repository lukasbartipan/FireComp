import React from 'react';
import {Button, Table} from "react-bootstrap";
import axios from 'axios';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import EventModal from "../modal/EventModal";
import GF from "../../constants/GF";
import CompetitionModal from "../modal/CompetitionModal";

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            discipline: [],
            category: [],
            competitions: [],
            activeModal: null,
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_APIURL + 'event/all')
            .then(response => {
                console.log(response.data);
                this.setState({events: response.data});
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(process.env.REACT_APP_APIURL + 'discipline/all')
            .then(response => {
                console.log(response.data);
                this.setState({discipline: response.data});
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(process.env.REACT_APP_APIURL + 'category/all')
            .then(response => {
                console.log(response.data);
                this.setState({category: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    clickHandler(e, index) {
        this.setState({activeModal: index})
    }

    hideModal() {
        this.setState({activeModal: null})
    }


    render() {
        return (
            <div className="Padding40T container">
                {GF.isAdmin() &&
                    <ButtonToolbar>
                        <Button id={"createEvent"} variant="primary" className="Margin15L"
                                onClick={e => this.clickHandler(e, "createEvent")}> Přidat Event </Button>
                    <EventModal id={"createEvent"} show={this.state.activeModal === "createEvent"}
                                onHide={this.hideModal}/>
                </ButtonToolbar>
                }
                {this.state.events.map((event) => {
                        return (
                            <div className="container" key={event.id}>
                                <h3>{event.name}</h3>
                                <i>(<span>{event.city}</span> <span>{event.street}</span>)</i>
                                {GF.isAdmin() &&
                                <EventModal id={"EV" + event.id} edit={event}
                                            show={this.state.activeModal === "EV" + event.id}
                                            onHide={this.hideModal}/>}
                                {GF.isAdmin() &&
                                    <div className="TextAlignCenter">
                                        <ButtonToolbar className="TextAlignCenter">
                                            <Button className="Margin10B10T" id={"EV" + event.id} variant="primary"
                                                    onClick={e => this.clickHandler(e, "EV" + event.id)}>
                                            Upravit event
                                            </Button>
                                        </ButtonToolbar>
                                    </div>
                                }
                                {this.renderTable(event)}
                            </div>
                        )
                    }
                )
                }
            </div>
        )
    }

    renderTable(event) {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Disciplina</th>
                    <th>Kategorie</th>
                    <th></th>
                    {GF.isAdmin() && <th>
                        <ButtonToolbar className="TextAlignCenter d-block">
                            <Button id={"addCom" + event.id} variant="primary"
                                    onClick={e => this.clickHandler(e, "addCom" + event.id)}> Přidat soutež </Button>
                            <CompetitionModal event={event} category={this.state.category}
                                              discipline={this.state.discipline} id={"showDisciplines"}
                                              show={this.state.activeModal === "addCom" + event.id}
                                              onHide={this.hideModal}/>
                        </ButtonToolbar>
                    </th>}
                </tr>
                </thead>
                <tbody>
                {
                    event.competitions.map((comp) => {
                        return (
                            <tr key={comp.id}>
                                <td>{comp.disciplina.name}</td>
                                <td>{comp.category.name}</td>
                                <td>
                                    <div className="TextAlignCenter">
                                        <Button variant="danger" as="input"
                                                type="submit"
                                                value="Registrace"/></div>
                                </td>
                                {GF.isAdmin() &&
                                <td>
                                    <div className="TextAlignCenter">
                                        <Button variant="danger" as="input"
                                                type="submit"
                                                value="Delete"/></div>
                                </td>
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        )
    }

}

export default EventList;

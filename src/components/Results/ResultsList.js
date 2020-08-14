import React from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_APIURL + 'event/all')
            .then(response => {
                this.setState({results: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Padding40T">
                <h3 className="Heading3">Výsledková listina</h3>
                {this.state.results.map((result) => {
                    return (
                        <div>
                            <h4>{result.name}</h4>
                            {this.renderResultsTable(result)}
                        </div>
                    )
                })}
            </div>
        )
    }


    renderResultsTable(result) {
        return (
        result.competitions.map((comp) => {
            if (comp.participants.length === 0) {
                return (
                    <div>
                        <h5><span>{comp.disciplina.name}</span> <span>{comp.category.name}</span></h5>
                        <p>Výsledky nejsou dostupné</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h5><span>{comp.disciplina.name}</span> <span>{comp.category.name}</span></h5>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Jméno</th>
                                <th>Příjmení</th>
                                <th>1. výsledek</th>
                                <th>2. výsledek</th>
                            </tr>
                            </thead>
                            <tbody>
                            {comp.participants.map((part) => {
                                return (<tr>
                                    <td>{part.racer.user.name}</td>
                                    <td>{part.racer.user.surname}</td>
                                    <td>{part.result1}</td>
                                    <td>{part.result2}</td>
                                </tr>)
                            })}
                            </tbody>
                        </Table>
                    </div>
                )
            }
        })
        )
    }
}

export default ResultsList;

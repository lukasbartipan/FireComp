import React from 'react';
import {Button, Table} from "react-bootstrap";
import GF from "../../constants/GF";

const CompetitionListTable = props => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Disciplina</th>
                <th>Kategorie</th>
                <th></th>
                {GF.isAdmin() && <th></th>}
            </tr>
            </thead>
            <tbody>
            {
                props.event.results.map((comp) => {
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
    );
};


export default CompetitionListTable;

import React, {useEffect, useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CompetitionModal = (props) => {
        const [Competition, setCompetition] = React.useState({
            id: props.event.id,
            disciplina: '',
            category: '',
        });
        const [validated, setValidated] = useState(false);

        useEffect(() => {
            if (props.edit !== undefined && props.edit !== null) {
                const ed = props.edit;
                setCompetition({
                    id: ed.id,
                    name: ed.name,
                    city: ed.city,
                    street: ed.street,
                });
            }
        }, []);

        const handleChange = (e) => {
            const {value, name} = e.target;
            setCompetition(prev => ({...prev, [name]: value}))
        };

        const handleSubmit = (e) => {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            setValidated(true);
            console.log(Competition);
            const Competi = {
                event: {
                    id: Competition.id
                },
                disciplina: {
                    id: Competition.disciplina,
                },
                category: {
                    id: Competition.category
                }
            }

            axios.post(process.env.REACT_APP_APIURL + 'competition', Competi)
                .then(function (response) {
                    if (response.status === 201) {
                        console.log(response.data);
                        window.location = "/events";
                    } else {
                        alert("Špatné uživatelské jméno nebo heslo");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

            e.preventDefault();
        };

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Přidat soutěž
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id='addCompetitionForm' noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group id="form" as={Col} md="12" controlId="validationCustom03">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Disciplína</Form.Label>
                                    <Form.Control value={Competition.disciplina} onChange={e => handleChange(e)}
                                                  name={"disciplina"} as="select">
                                        <option>Vybrat</option>
                                        {props.discipline.map((dis) =>
                                            <option value={dis.id}>{dis.name}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Kategorie</Form.Label>
                                    <Form.Control value={Competition.category} onChange={e => handleChange(e)}
                                                  name={"category"} as="select">
                                        <option>Vybrat</option>
                                        {props.category.map((category) =>
                                            <option value={category.id}>{category.name}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" form='addCompetitionForm' type={"submit"}>Přidat</Button>
                    <Button onClick={props.onHide}>Zavřít</Button>
                </Modal.Footer>
            </Modal>
        );
    }
;

export default CompetitionModal;

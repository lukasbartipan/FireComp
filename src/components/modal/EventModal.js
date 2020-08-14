import React, {useEffect, useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EventModal = (props) => {
    const [Event, setEvent] = React.useState({
        id: '',
        name: '',
        city: '',
        street: '',
        manager: {
            id: 1,
        },
        league: {
            id: 1,
        },
    });
    const [validated, setValidated] = useState(false);

    const isEdit=()=>{
        return props.edit !== undefined && props.edit !== null;
    }

    useEffect(() => {
        if (isEdit()) {
            const ed = props.edit;
            setEvent({
                id: ed.id,
                name: ed.name,
                city: ed.city,
                street: ed.street,
                manager: {id: 1},
                league: {id: 1}
            });
        }
    }, []);

    const handleChange = (e) => {
        const {value, name} = e.target;
        setEvent(prev => ({...prev, [name]: value}))
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        console.log(Event);

        axios.post(process.env.REACT_APP_APIURL + 'event', Event,)
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
                    {isEdit() ? "Upravit event":"Přidat event"}

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='addEventForm' noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group id="form" as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Název</Form.Label>
                            <Form.Control value={Event.name} onChange={e => handleChange(e)} type="text"
                                          placeholder="Název" name={"name"} required/>
                            <Form.Label>Město</Form.Label>
                            <Form.Control value={Event.city} onChange={e => handleChange(e)} type="text"
                                          placeholder="Město" name={"city"} required/>
                            <Form.Label>Ulice</Form.Label>
                            <Form.Control value={Event.street} onChange={e => handleChange(e)} type="text"
                                          placeholder="Ulice" name={"street"} required/>
                            <br/>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" form='addEventForm' type={"submit"}>{isEdit() ? "Upravit":"Přidat"}</Button>
                <Button onClick={props.onHide}>Zavřít</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EventModal;

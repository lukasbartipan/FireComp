import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
//import axios from 'axios';

class CreateCompForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            validated: false
        };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({validated: true});
    }

    render() {
        const {validated} = this.state;
        return (
            <div className="d-block">
                <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group id="form" as={Col} md="12" controlId="validationCustom03">
                            <h4 className="">Soutěž</h4>
                            <Form.Label>Název</Form.Label>
                            <Form.Control type="text" placeholder="Název" required/>
                            <Form.Label>Město</Form.Label>
                            <Form.Control type="text" placeholder="Město" required/>
                            <Form.Label>Ulice</Form.Label>
                            <Form.Control type="text" placeholder="Ulice" required/>
                            <br/>
                            <h4 className="FloatL">Disciplíny</h4><Button className="FloatR" variant="danger">Přidat discplínu</Button>
                            <br/>
                            <br/>
                            <Form.Label>Název</Form.Label>
                            <Form.Control type="text" placeholder="Název disciplíny" required/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="danger" type="submit">Přidat</Button>
                </Form>
            </div>
        );
    }
}


export default CreateCompForm;

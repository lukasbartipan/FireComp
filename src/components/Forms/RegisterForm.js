import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import axios from "axios";

class RegisterForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.username = React.createRef();
        this.name = React.createRef();
        this.surname = React.createRef();
        this.phoneNumber = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();

        this.state = {
            validated: false,
            username: '',
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            password: ''
        };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });

        if (this.state.validated === true) {
            var payload = JSON.stringify({
                username: this.state.username,
                name: this.state.name,
                surname: this.state.surname,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                password: this.state.password

            });

            console.log(payload);
            axios.post(process.env.REACT_APP_APIURL + 'user', payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function (response) {
                console.log(response);
                if(response.status === 201){
                    console.log(response.data);
                    localStorage.setItem("user", JSON.stringify(response.data));
                    window.location = "/";
                } else {
                    alert("Jejda, něco se nepovedlo :(");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        const { validated } = this.state;
        return (
            <div className="">
                <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group id="form" as={Col} md="12" controlId="validationCustom03">
                            <h4 className="">Registrace</h4>
                            <Form.Label>Uživatelské jméno</Form.Label>
                            <Form.Control ref={this.username} type="text" placeholder="Uživatelské jméno" required onChange={() => {
                                this.setState({username: this.username.current.value});
                            }}
                            />
                            <Form.Label>Jméno</Form.Label>
                            <Form.Control ref={this.name} type="text" placeholder="Jméno" required onChange={() => {
                                this.setState({name: this.name.current.value});
                            }}/>
                            <Form.Label>Příjmení</Form.Label>
                            <Form.Control ref={this.surname} type="text" placeholder="Příjmení" required onChange={() => {
                                this.setState({surname: this.surname.current.value});
                            }}/>
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control ref={this.phoneNumber} type="text" placeholder="Telefon" required onChange={() => {
                                this.setState({phoneNumber: this.phoneNumber.current.value});
                            }} />
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={this.email} type="text" placeholder="Email" required onChange={() => {
                                this.setState({email: this.email.current.value});
                            }}/>
                            <Form.Label>Heslo</Form.Label>
                            <Form.Control ref={this.password} type="password" placeholder="Heslo" required onChange={() => {
                                this.setState({password: this.password.current.value});
                            }}/>
                            <Form.Label>Heslo znovu</Form.Label>
                            <Form.Control type="password" placeholder="Heslo" required />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="danger" type="submit">Registrovat</Button>
                </Form>
            </div>
        );
    }
}


export default RegisterForm;

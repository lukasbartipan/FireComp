import React from 'react';
import {Button, Form} from 'react-bootstrap';
//import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();

        this.state = {
            username: '',
            password: '',
            user: {}
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={this.username} type="text" placeholder="Username" onChange={() => {
                        this.setState({username: this.username.current.value});
                        //console.log(this.username.current.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={this.password} type="password" placeholder="Password"  onChange={() => {
                        this.setState({password: this.password.current.value});
                        //console.log(this.password);
                    }}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
                    Login
                </Button>
            </Form>
        );
    }

    handleClick(event){
        event.preventDefault();
        if (this.username.current.value === '' || this.password.current.value === '') {
            alert("Vyplňte přihlašovací údaje!");
        } else {
            var payload = JSON.stringify({
                username: this.state.username, //"Admin", //this.state.username,
                password: this.state.password //"H47EPibR" //this.state.password
            });

            console.log(payload);
            axios.post(process.env.REACT_APP_APIURL+'user/login', payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(function (response) {
                    if(response.status === 200){
                        console.log(response.data);
                        localStorage.setItem("user", JSON.stringify(response.data));
                        window.location = "/";
                    } else {
                        alert("Špatné uživatelské jméno nebo heslo");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

export default LoginForm;

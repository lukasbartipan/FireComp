import React from 'react';
import { appName } from '../../constants';
import {Nav, Navbar} from "react-bootstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    logout(e) {
        e.preventDefault();
        let hrefHome = "/";
        localStorage.clear();
        window.location = hrefHome;
    }

    isLogged() {
        if (localStorage.getItem("user") == null) {
            return (<span><a href="/login">Přihlášení</a></span>);
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            // eslint-disable-next-line
            return (<span><span>Přihlášen jako: </span><a href={"/user-profile"}>{user.username}</a><button className={"btnLogout"} onClick={(e) => this.logout(e)}></button></span>);
        }
    }

    hasAdminlevel() {
        if(localStorage.getItem("user") != null) {
            var user = JSON.parse(localStorage.getItem("user"));
            if (user.admin) {
                return (<Nav.Link href="/createEvent">Vytvoření soutěže</Nav.Link>);
            } else {
                return null;
            }
        }
    }

    userLogged() {
        if(localStorage.getItem("user")){
            return '';
        } else {
            return (
                <Nav.Link href="/register">Registace</Nav.Link>
            )
        }
    }

    render() {
        return (
            <Navbar  bg="danger" variant="dark" expand="lg" className="drop-shadow">
                <Navbar.Brand href="/">
                    { appName }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">O sportu</Nav.Link>
                        <Nav.Link href="/events">Soutěže</Nav.Link>
                        <Nav.Link href="/results">Výsledky</Nav.Link>
                        {this.userLogged()}
                    </Nav>
                    <Navbar.Text>
                        {this.isLogged()}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;

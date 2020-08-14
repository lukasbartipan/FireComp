import React, {Component} from 'react';
import {HomePage, Login, CreateCompetition, Events} from './pages';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import About from "./pages/About";
import Results from "./pages/Results";
import Start from "./pages/Start";
require('dotenv').config();



class App extends Component {
    render() {
        return (
            <div className={'Body'}>
                <NavBar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/events'} component={Events}/>
                        <Route path={'/results'} component={Results}/>
                        <Route path={'/start'} component={Start}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/createEvent'} component={CreateCompetition}/>
                        <Route path={'/user-profile'} component={UserProfile}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

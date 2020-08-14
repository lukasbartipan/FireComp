import {Component} from 'react';

class GF extends Component {
    static isAdmin() {
        if (localStorage.user) {
            return JSON.parse(localStorage.getItem('user')).admin;
        } else {
            return false
        }
    }
}

export default GF;

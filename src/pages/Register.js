import React from 'react';
import Col from "react-bootstrap/Col";
import RegisterForm from "../components/Forms/RegisterForm";


class Register extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 30}}>
                <Col md={{ span: 4, offset: 4}}>
                    <RegisterForm />
                </Col>
            </div>
        );
    }
}

export default Register;

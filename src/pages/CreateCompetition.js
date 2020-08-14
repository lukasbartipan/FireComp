import React from 'react';
import CreateCompForm from "../components/Forms/CreateCompForm";
import Col from "react-bootstrap/Col";


class CreateCompetition extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 30}}>
                <Col md={{ span: 4, offset: 4}}>
                    <CreateCompForm />
                </Col>
            </div>
        );
    }
}

export default CreateCompetition;

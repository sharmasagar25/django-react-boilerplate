import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import { loginUser } from '../actions/auth';

function LoginForm(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        props.loginUser(username, password, () => {props.history.push('/home')}); 
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={event => setUsername(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default connect(null, { loginUser })(LoginForm);


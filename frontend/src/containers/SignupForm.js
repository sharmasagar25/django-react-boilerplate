import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { registerUser } from '../actions/auth';

function SignupForm(props) {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        props.registerUser(username, email, password1, password2);
        props.history.push('/signup/confirm');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="signup-username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={event => setUsername(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="signup-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="signup-password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword1(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="signup-password2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={event => setPassword2(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default connect(null, { registerUser })(SignupForm);


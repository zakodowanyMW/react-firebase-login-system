import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Singup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {singup} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords are not the same!");
        }
        try{
            setError("");
            setLoading(true);
            await singup(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch(err) {
            setError("Failed to create an account!");   
        }
        setLoading(false);
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password" style={{padding: "10px 0"}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm" style={{paddingBottom: "20px"}}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password"  ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card> 
        <div className="w-100 text-center mt-2" style={{paddingTop: "10px"}}>
            Already have an account? <Link to="/login"> Log In </Link>
        </div>
        </>
    )
}

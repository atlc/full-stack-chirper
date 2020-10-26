import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const col2: number = 2;
const col8: number = 8;
const MySwal = withReactContent(Swal);

const Navbar: React.FC<NavbarProps> = () => {
    let [showModal, toggleShow] = useState(false);

    const loginModal = 
    <Form>
        <Form.Group controlId="username-input">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" aria-describedby="username" placeholder="Enter your username here" />
        </Form.Group>
        <Form.Group controlId="password-input">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" aria-describedby="password-reqs" placeholder="Enter your password here" />
            <small id="password-reqs" className="form-text text-muted">
                Your password is not saved, submitted, has no length requirements, or character requirements. Hooray for empty client-side validation!
            </small>
        </Form.Group>
    </Form>;

    if (showModal) {
        console.log(loginModal)
        MySwal.fire({
            title: "Login/Signup",
            html: loginModal,
            footer: "Copyright Chirper 2020",
            focusConfirm: true
        });
    }

    return (
        <>
            <Row className="margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin row">
                <Col md={col8}>
                    <h1 className="text-white">Welcome to Chirper.</h1>
                </Col>
                <Col md={col2}>
                    <Button className="badge-pill vr-thin" variant="outline-info" onClick={() => toggleShow(showModal = !showModal)}>Sign Up</Button>
                </Col>
                <Col md={col2}>
                    <Button className="badge-pill vr-thin" variant="info" onClick={() => toggleShow(showModal = !showModal)}>Login</Button>
                </Col>
            </Row>
        </>
    );
}

export interface NavbarProps { }

export default Navbar;
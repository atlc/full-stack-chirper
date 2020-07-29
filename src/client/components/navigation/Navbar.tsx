import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Navbar = () => {
    return (
        <Row className="margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin row">
            <Col md={8}>
                <h1 className="text-white">Welcome to Chirper.</h1>
            </Col>
            <Col md={2}>
                <Button className="badge-pill vr-thin" variant="outline-info">Sign Up</Button>
            </Col>
            <Col md={2}>
                <Button className="badge-pill vr-thin" variant="info">Login</Button>
            </Col>
        </Row>
    );
}

export default Navbar;
//@ts-nocheck
// Running no-check due to TS hating react-bootstrap's typings

import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Navbar = () => {

    return (
        <Row className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin">
            <Col md={2}>
                <Button className="badge-pill vr-thin" variant="outline-info" href="/">Home</Button>
            </Col>
            <Col md={2}>
                <Button className="badge-pill vr-thin" variant="info" href="/create">Create Chirp</Button>
            </Col>
        </Row>
    );
};

export default Navbar;


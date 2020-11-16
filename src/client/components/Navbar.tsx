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
                <Button className="badge-pill vr-thin" variant="outline-info">Create Chirp</Button>
            </Col>X
            <Col md={2}>
                <Button className="badge-pill vr-thin" variant="info">Admin Mode</Button>
            </Col>
        </Row>
    );
};

export default Navbar;


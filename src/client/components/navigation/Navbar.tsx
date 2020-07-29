import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LoginModal from '../authentication/LoginModal';

const col2: number = 2;
const col8: number = 8;
let showModal: boolean = false;

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            {showModal ? <LoginModal show={showModal}/> : ''}
            <Row className="margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin row">
                <Col md={col8}>
                    <h1 className="text-white">Welcome to Chirper.</h1>
                </Col>
                <Col md={col2}>
                    <Button className="badge-pill vr-thin" variant="outline-info" onClick={() => { showModal = !showModal; console.log(showModal);}}>Sign Up</Button>
                </Col>
                <Col md={col2}>
                    <Button className="badge-pill vr-thin" variant="info" onClick={() => { showModal = !showModal; console.log(showModal);}}>Login</Button>
                </Col>
            </Row>
        </>
    );
}

export interface NavbarProps {}

export default Navbar;
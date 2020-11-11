import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';



const App = () => {

    console.log('hey');
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default App;

// import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Swal from 'sweetalert2';
// import LeftSidebar from './LeftSidebar';
// import ChirpPanel from './ChirpPanel';
// import TrendsPane from './TrendsPane';
// import '../styles/helpers.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// class App extends Component {

//     render() {
//         return (
//             <Container>
//                 <Row className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin">
//                     <Col md={2}><Button onClick={this.handleLoginLogout} className="badge-pill vr-thin" variant="outline-info">{this.state.buttonOneText}</Button></Col>
//                     <Col md={2}><Button onClick={this.handleSignupDelete} className="badge-pill vr-thin" variant="info">{this.state.buttonTwoText}</Button></Col>
//                 </Row>
//                 <Row>
//                     <Col md={2} className="justify-content-md-left">
//                         <LeftSidebar App={this.state} />
//                     </Col>
//                     <Col md={7} className="justify-content-md-center text-center vr-thin">
//                         <ChirpPanel App={this.state} />
//                     </Col>
//                     <Col md={3}>
//                         <TrendsPane />
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default App;
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Chirp from './Chirp';
import '../styles/helpers.css';
import FetchableChirps from './FetchableChirps';

class ChirpPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpButtonText: 'Chirp',
            chirpText: '',
            newChirps: []
        };
    }
    
    componentDidMount = () => this.chirpTextArea = document.getElementById('chirp-textarea');

    handleTextAreaBlur = () => this.chirpTextArea.style=`background-color: rgba(255, 255, 255, 0.05) !important`;

    handleTextAreaFocus = () => this.chirpTextArea.style=`background-color: rgba(255, ${255-this.chirpTextArea.value.length}, ${255-this.chirpTextArea.value.length}, 0.5) !important`;
    
    handleChirpTextUpdate = (newText) => {
        let chars = newText.target.value.length;
        this.chirpTextArea.style=`background-color: rgba(255, ${255-chars}, ${255-chars}, 0.5) !important`;

        this.setState({
            chirpText: newText.target.value,
            chirpButtonText: `Chirp (${chars}/280)`
        });
    }

    handleChirpButtonSubmit = () => {
        if (this.state.chirpText !== '') {
            this.setState({
                chirpButtonText: 'Chirp',
                newChirps: [
                    <Chirp
                        key={`${Math.random().toString(36).substr(2, 16)}_${Date.now().toString(36)}`}
                        avatar={this.props.App.avatar}
                        firstName={'Cool Covalence Student '}
                        lastName={this.props.App.user}
                        username={this.props.App.user}
                        text={this.state.chirpText}
                    />,
                    ...this.state.newChirps
                ],
                chirpText: ''
            });
            this.chirpTextArea.value = '';
        } else {
            this.chirpTextArea.focus();
        } 
    }

    render() {
        return (
            <>
                <Row>
                    <Col><h1 className="text-center text-white hr-thin pad-bot-10">{this.props.App.isLoggedIn ? 'Home' : 'Trends Around The Globe'}</h1></Col>
                </Row>
                <Row className="margin-top-5 margin-bot-10">
                    <Col>
                        <img className="bg-info img-round" src={this.props.App.isLoggedIn? 'https://picsum.photos/128' : "https://image.flaticon.com/icons/png/128/92/92031.png"} height={64} width={64} alt="Icon of a raven" />
                        <Button disabled={!this.props.App.isLoggedIn} className="badge-pill w-100 margin-top-10" variant="info" onClick={this.handleChirpButtonSubmit}>{this.props.App.isLoggedIn ? this.state.chirpButtonText : 'Login to start using Chirper'}</Button>
                    </Col>
                    <Col>
                        <textarea id="chirp-textarea" disabled={!this.props.App.isLoggedIn} onChange={this.handleChirpTextUpdate} onFocus={this.handleTextAreaFocus} onBlur={this.handleTextAreaBlur} placeholder={`${this.props.App.user ? "What's happening, @" + this.props.App.user + "?" : "Log in to tell us what's good in the world."}`} maxLength="280" className="opaque-white-bg pad-bot-20 text-white hr-thin vr-thin" rows="4" cols="50"></textarea>
                    </Col>
                </Row>
                <Row><Col><p className="hr-thicc"></p></Col></Row>
                {this.state.newChirps}
                <FetchableChirps />
            </>
        );
    }
}

export default ChirpPanel;
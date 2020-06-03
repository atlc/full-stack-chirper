import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Trend extends Component {

    render() {
        return (
            <li className="nav-item">
                <Button className="badge-pill" variant="outline-info" href={this.props.link}> {this.props.label}</Button>
            </li>
        );
    }
}

export default Trend;
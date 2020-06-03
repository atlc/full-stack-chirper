import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LeftSideItem extends Component {
    render() {
        return (
            <li className="nav-item children-width-100">
                <Button className="badge-pill" variant="outline-info" href={this.props.link} disabled={this.props.disabled}>
                    <img src={this.props.icon}  height={32} width={32} alt={this.props.alt} />
                    &nbsp;&nbsp;{this.props.label}
                </Button>
            </li>
        );
    }
}

export default LeftSideItem;
import * as React from 'react';
import { IChirp } from '../utils/types';

const Chirp = (props: IChirp) => {
    return (
        <div key={props.id} className="card text-center">
            <div className="card-header">
                User #{props.userid}
            </div>
            <div className="card-body">
                <p className="card-text">{props.content}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                Authored at {props._created}, from {props.location}
            </div>
        </div>
    );
}

export default Chirp;
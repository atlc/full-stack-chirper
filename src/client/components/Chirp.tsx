import * as React from 'react';
import { IChirp } from '../utils/types';
import * as moment from 'moment';

const Chirp = (props: IChirp) => {
    return (
        <div key={props.id} className="row justify-content-center">
            <div className="col col-8 card text-center border border-info my-3">
                <div className="card-header">
                    User #{props.userid}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-info">See just chirp #{props.id}</a>
                </div>
                <div className="card-footer text-muted">
                    {moment(props._created).format('h:mm A')} · {moment(props._created).format('MMM D, YYYY')} · {props.location}
                </div>
            </div>
        </div>
    );
}

export default Chirp;
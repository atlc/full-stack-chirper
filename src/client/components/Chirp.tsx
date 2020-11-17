import * as React from 'react';
import { IChirp } from '../utils/types';
import * as moment from 'moment';

const Chirp = (props: IChirp) => {
    return (
        <div key={`Chirpkey-#${props.id}`} className="row justify-content-center">
            <div className="col col-8 card text-center border border-info my-3">
                <div className="card-header">
                    User #{props.userid}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                    <a href={`/${props.id}`} className="btn btn-info mx-1">See just chirp #{props.id}</a>
                    <a href={`/admin/${props.id}`} className="btn btn-info mx-1">Edit chirp #{props.id}</a>
                </div>
                <div className="card-footer text-muted">
                    {moment(props._created).format('h:mm A')} · {moment(props._created).format('MMM D, YYYY')} · {props.location}
                </div>
            </div>
        </div>
    );
}

export default Chirp;
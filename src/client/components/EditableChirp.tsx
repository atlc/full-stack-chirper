import React, { useState, useEffect } from 'react';
import { IChirp } from '../utils/types';
import * as moment from 'moment';

const EditableChirp = (props: IChirp) => {

    const [chirpText, setChirpText] = useState(props.content);

    const handleChange = () => {
        debugger;
        useEffect(() => {
            let chirp = document.getElementById('chirpTextArea').value;
            setChirpText(chirp);
            console.log(chirp);
        }, []);
    }

    const submitChirp = (ev/*: React.MouseEvent<HTMLElement>*/) => {
        ev.preventDefault();
        console.log(chirpText);
    }

    return (
        <div key={`Chirpkey-#${props.id}`} className="row justify-content-center">
            <div className="col col-8 card text-center border border-info my-3 bg-warning">
                <div className="card-header">
                    User #{props.userid}
                </div>
                <div className="card-body">
                    <div>
                        <textarea 
                            id="chirpTextArea"
                            className="my-3"
                            defaultValue={props.content}
                            rows={5} cols={60}
                            onChange={handleChange()}
                        ></textarea>
                    </div>
                    <a href={`/`} className="btn btn-info mx-1" onClick={submitChirp}>Save chirp! [TURN THIS INTO PUT &amp; POST ROUTE]</a>
                </div>
                <div className="card-footer text-muted">
                    {moment(props._created).format('h:mm A')} · {moment(props._created).format('MMM D, YYYY')} · {props.location}
                </div>
            </div>
        </div>
    );
}

export default EditableChirp;
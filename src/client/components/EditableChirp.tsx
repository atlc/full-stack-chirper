import React, { useState, useEffect } from 'react';
import { IChirp } from '../utils/types';
import * as moment from 'moment';

const EditableChirp = (props: IChirp) => {

    const [id, setId] = useState(props.id);
    const [chirpText, setChirpText] = useState(props.content);

    useEffect(() => {
        handleUpdate();
    }, []);


    const handleUpdate = () => {
        let chirpTextArea = (document.getElementById('chirpTextArea') as HTMLInputElement).value;
        setChirpText(chirpTextArea);
    }

    const submitChirp = async (ev: React.MouseEvent) => {
        ev.preventDefault();
        await fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: chirpText })
        })
            .then(res => res.json())
            .then(() => alert('Chirp updated!'));
    }

    const destroyChirp = async (ev: React.MouseEvent) => {
        ev.preventDefault();
        if (confirm('Delete this chirp forever?')) {
            await fetch(`/api/chirps/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(() => alert('Chirp deleted!'));
        }
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
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdate()}
                        ></textarea>
                    </div>
                    <a className="btn btn-info mx-1" onClick={(e: React.MouseEvent<Element, MouseEvent>) => submitChirp(e)}>Save chirp!</a>
                    <a className="btn btn-danger mx-1" onClick={(e: React.MouseEvent<Element, MouseEvent>) => destroyChirp(e)}>DESTROY chirp!</a>
                </div>
                <div className="card-footer text-muted">
                    {moment(props._created).format('h:mm A')} · {moment(props._created).format('MMM D, YYYY')} · {props.location}
                </div>
            </div>
        </div>
    );
}

export default EditableChirp;
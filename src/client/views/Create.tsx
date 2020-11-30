import React, { useState, useEffect } from 'react';

const Create: React.FC<CreateProps> = () => {
    let lat: string, lon: string;

    const gotCoords = (pos: any) => {
        lat = pos.coords.latitude.toString().substring(0,10);
        lon = pos.coords.longitude.toString().substring(0,10);
    }

    const failedCoords = () => alert('Failed to get location, fall back to manual entry');

    navigator.geolocation.getCurrentPosition(gotCoords, failedCoords);

    const submitChirp = async (ev: React.MouseEvent) => {
        ev.preventDefault();
        let username = (document.getElementById('username') as HTMLInputElement).value;
        let location = lat ? `(${lat}, ${lon})` : (document.getElementById('location') as HTMLInputElement).value;
        let chirpTextArea = (document.getElementById('chirpTextArea') as HTMLInputElement).value;

        if (!!username && !!location && !!chirpTextArea) {
            await fetch(`/api/chirps/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: username,
                    content: chirpTextArea,
                    location: location
                })
            })
                .then(res => res.json())
                .then(() => alert('Chirp posted!'))
                .catch((err) => {
                    alert('There was an error publishing the chirp, check the console for errors.');
                    console.log(err);
                });
        } else {
            alert('Please make sure username, location, & chirp fields are filled out!');
        }
    }


    return (
        <>
            <div className="alert alert-info mt-3">
                <h1 className="text-center">Create Chirp!</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col col-8 card text-center border border-info my-3 bg-info">
                    <div className="card-header">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input id="username" type="text" className="form-control" placeholder="Enter Your Username Here: (Only valid users are 1...10 right now)"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">&#128506;</span>
                            </div>
                            <input id="location" type="text" className="form-control" placeholder="Enter Your Location Here (if you do not allow geolocation):">
                                
                            </input>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <textarea
                                id="chirpTextArea"
                                className="my-3"
                                placeholder="Tell me what you want to chirp today!"
                                rows={5} cols={60}
                            ></textarea>
                        </div>
                        <a className="btn btn-primary mx-1" onClick={(e: React.MouseEvent<Element, MouseEvent>) => submitChirp(e)}>Create chirp!</a>
                    </div>
                </div>
            </div>
        </>
    );
}

interface CreateProps {

};

export default Create;
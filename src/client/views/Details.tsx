import React, { useState, useEffect } from 'react';
import type { IChirp } from '../utils/types';
import Chirp from '../components/Chirp';
import { useParams } from 'react-router';

const Details: React.FC<DetailsProps> = (props) => {

    const [chirp, setChirp] = useState<IChirp>();

    useEffect(() => {
        (async () => {
            const chirp = await fetch(`/api/chirps/${props.match.params.id}`)
                .then(res => res.json());

            setChirp(chirp);
        })();
    }, []);

    return (
        <>
            <Chirp
                id={`chirp-pseudouuid-${chirp.id.toString()}`}
                userid={`user-pseudouuid-${chirp.userid.toString()}`}
                content={chirp.content}
                location={chirp.location}
                _created={chirp._created}
            />
        </>
    );
}

interface DetailsProps {
    id: number;
};

export default Details;



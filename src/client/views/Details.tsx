import React, { useState, useEffect } from 'react';
import type { IChirp } from '../utils/types';
import Chirp from '../components/Chirp';
import { useParams } from 'react-router';

const Details: React.FC<DetailsProps> = (props) => {

    const { id } = useParams();
    const [chirps, setChirps] = useState<IChirp[]>([]);

    useEffect(() => {
        (async () => {
            const chirps = await fetch(`/api/chirps/${id}`)
                .then(res => res.json());

            setChirps(chirps);
        })();
    }, []);


    return (
        <>
            {chirps.map(c => (
                <Chirp
                    key={`_chirp_id-${c.id}`}
                    id={c.id}
                    userid={c.userid}
                    content={c.content}
                    location={c.location}
                    _created={c._created}
                />
            ))}
        </>
    );
}

interface DetailsProps {

};

export default Details;
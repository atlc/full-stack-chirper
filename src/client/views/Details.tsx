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
            console.log(`Hit the home page with ${chirps.length} fetched chirps!`);
        })();
    }, []);


    return (
        <>
            {chirps.map(c => (
                <Chirp
                    id={`chirp-id-${c.id}`}
                    userid={`user-id-${c.userid}`}
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



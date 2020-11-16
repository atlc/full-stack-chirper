import React, { useState, useEffect } from 'react';
import type { IChirp } from '../utils/types';
import Chirp from '../components/Chirp';

const Home: React.FC<HomeProps> = (props) => {

    const [chirps, setChirps] = useState<IChirp[]>([]);

    useEffect(() => {
        (async () => {
            const chirps = await fetch('/api/chirps/')
                .then(res => res.json());

            setChirps(chirps);
            console.log(`Hit the home page with ${chirps.length} fetched chirps!`);
        })();
    }, []);

    return (
        <>
            {chirps.map(c => (
                <Chirp
                    id={`chirp-pseudouuid-${c.id.toString()}`}
                    userid={`user-pseudouuid-${c.userid.toString()}`}
                    content={c.content}
                    location={c.location}
                    _created={c._created}
                />
            )).reverse()}
        </>
    );
}

interface HomeProps {

};

export default Home;



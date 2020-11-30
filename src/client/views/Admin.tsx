import React, { useState, useEffect } from 'react';
import type { IChirp } from '../utils/types';
import EditableChirp from '../components/EditableChirp';
import { useParams } from 'react-router';

const Admin: React.FC<AdminProps> = (props) => {

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
            <div className="alert alert-danger mt-3">
                <h1 className="text-center">Editing Chirp!</h1>
            </div>
            {chirps.map(c => (
                <EditableChirp
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

interface AdminProps {

};

export default Admin;
import React, { useState, useEffect } from 'react';
import EditableChirp from '../components/EditableChirp';

const Create: React.FC<CreateProps> = (props) => {

    return (
        <>
            <div className="alert alert-info mt-3">
                <h1 className="text-center">Create Chirp!</h1>
            </div>
            <EditableChirp {...null} />
        </>
    );
}

interface CreateProps {

};

export default Create;
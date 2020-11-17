import React, { useState, useEffect } from 'react';
import type { IChirp } from '../utils/types';
import EditableChirp from '../components/EditableChirp';
import { useParams } from 'react-router';

const Create: React.FC<CreateProps> = (props) => {

    return (
        <>
            <div className="alert alert-info mt-3">
                <h1 className="text-center">Create Chirp!</h1>
            </div>
            {/* <EditableChirp  /> */}
        </>
    );
}

interface CreateProps {

};

export default Create;
import * as React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const chirpModal = MySwal.fire({
    title: "Login/Signup",
    html: `<p>Hey</p>`,
    footer: "Copyright Chirper 2020",
    focusConfirm: true
});

const Chirp: React.FC<ChirpProps> = () => {
    return (
        (chirpModal as any)
    );
}

export interface ChirpProps {
    user: string,
    chirpId: string,
    time: any,
    body: string    
 };

export default Chirp;
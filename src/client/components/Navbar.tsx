import * as React from 'react';

const Navbar = () => {

    return (
        <div className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin row">
            <div className="col-2">
                <button className="badge-pill vr-thin btn btn-outline-info "><a className="text-white" href="/">Home</a></button>
            </div>
            <div className="col-2">
                <button className="badge-pill vr-thin btn btn-info"><a className="text-white" href="/create">Create Chirp</a></button>
            </div>
        </div>
    );
};

export default Navbar;
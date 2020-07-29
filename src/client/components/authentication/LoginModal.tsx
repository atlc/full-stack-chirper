import * as React from 'react';
import SweetAlert from 'sweetalert2-react';


const SwalLoginModal = ({ show }) => {
    console.log('Modal was hit');
    return (
        <SweetAlert
            show={show}
            title="Login/Signup"
            html={
                <form>
                    <div className="form-group">
                        <label htmlFor="username-input">Username</label>
                        <input type="text" className="form-control" id="username-input" aria-describedby="username" placeholder="Enter your username here" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-input">Password</label>
                        <input type="password" className="form-control" id="password-input" aria-describedby="password-reqs" placeholder="Enter your password here" />
                        <small id="password-reqs" className="form-text text-muted">
                            Your password is not saved, submitted, has no length requirements, or character requirements. Hooray for empty client-side validation!
                        </small>
                    </div>
                </form>
            }
            footer="Copyright Chirper 2020"
            focusConfirm={false}
            preConfirm={() => (document.getElementById('username-input') as HTMLInputElement).value.replace(/[^a-zA-Z0-9]/g, "").substring(0,15) }
        />
    );
};

export default SwalLoginModal;
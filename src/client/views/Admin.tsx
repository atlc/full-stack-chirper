import * as React from 'react';

const Admin: React.FC<AdminProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <h1 className="display-1 text-center">Administrate Chirp!</h1>
                </div>
            </section>
        </main>
    )
}

interface AdminProps {
    
};


export default Admin;
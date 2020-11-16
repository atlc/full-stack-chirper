import * as React from 'react';

const Create: React.FC<CreateProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <h1 className="display-1 text-center">Create Chirp!</h1>
                </div>
            </section>
        </main>
    )
}

interface CreateProps {
    
};


export default Create;
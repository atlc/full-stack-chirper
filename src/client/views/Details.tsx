import * as React from 'react';
import { useParams } from 'react-router';

const Details: React.FC<DetailsProps> = (props) => {
    // const { id } = useParams();  

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <h1 className="display-1 text-center">Chirp Details</h1>
                    {/* <h1 className="display-1 text-center">Chirp #{id} - Details</h1> */}
                </div>
            </section>
        </main>
    )
}

interface DetailsProps {
    // id: string;
};


export default Details;
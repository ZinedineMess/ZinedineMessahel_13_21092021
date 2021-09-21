import React, {Fragment} from 'react';
import 'components/Banner/Banner.css';

function Banner() {
    return (
        <Fragment>
            <section className="hero">
                <article className="heroContent">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </article>
            </section>
        </Fragment>
    )
}

export default Banner;

import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import 'pages/Error/Error.css';

function Error() {
    return (
        <main className='error404Main'>
            <section className='errorMessagesContainer'>
                <section>
                    <h2>404</h2>
                </section>
                <section>
                    <h3>Sorry, we can't find any web page for this address.</h3>
                    <Link to='/'>
                        <Button className='buttonError' text='Back to Home' />
                    </Link>
                </section>
            </section>
        </main>
    );
}

export default Error;

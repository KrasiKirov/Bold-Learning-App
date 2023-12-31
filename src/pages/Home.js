import '../Home.css';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        </Helmet>
            <div className="welcome-section">
                <h1>Welcome to Bold.</h1>
                <p>Embark on a journey of discovery and challenge.</p>
            </div>

        <div className="features-container">
        <Link to="/home/math">
            <div className="feature">
                <i className="fas fa-square-root-alt icon"></i>
                <h5>Mathematics</h5>
                <p>Explore the universe of numbers and patterns.</p>
            </div>
        </Link>
        <Link to="/home/chemistry">
            <div className="feature">
                <i className="fas fa-flask icon"></i>
                <h5>Chemistry</h5>
                <p>Dive into the world of atoms and reactions.</p>
            </div>
        </Link>
        <Link to="/home/physics">
            <div className="feature">
                <i className="fas fa-atom icon"></i>
                <h5>Physics</h5>
                <p>Unravel the mysteries of energy and matter.</p>
            </div>
        </Link>
        <Link to="/home/biology">
            <div className="feature">
                <i className="fas fa-dna icon"></i>
                <h5>Biology</h5>
                <p>Discover the science of life and living organisms.</p>
            </div>
        </Link>
        </div>
    </div>
);
};
  
export default Home;
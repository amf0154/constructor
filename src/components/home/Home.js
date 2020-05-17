import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
class Home extends React.Component {
    render = () =>{
        return (
            <div>
                <ul className="menu">
                    <li className="menu__item">
                       <Link className="menu__link" to={`/create`}>create site</Link>
                    </li>
                    <li className="menu__item">
                       <Link className="menu__link" to={`/sites`}>list of all sites</Link>
                    </li>
               </ul>
            </div>
        );
    };
}

export default Home;
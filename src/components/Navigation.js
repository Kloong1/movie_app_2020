import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation(){
    return <div id="navigation">
        <div>
            <Link to="/" className="navigation__button">Home</Link>
            <Link to="/about" className="navigation__button">About</Link>
        </div>
    </div>
}

export default Navigation;
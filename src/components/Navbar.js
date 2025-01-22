import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = 'set title here', aboutSection = 'About', modeForm, changeMode }) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${modeForm} navbar-${modeForm}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/About' aria-disabled="true">{aboutSection}</Link>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch mx-3 text-${modeForm === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {modeForm === 'light' ? 'Dark' : 'Light'} mode</label>
                </div>
            </div>
        </nav>
    );
}

// PropTypes validation (optional)
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutSection: PropTypes.string,
    modeForm: PropTypes.string.isRequired,
    changeMode: PropTypes.func.isRequired
};
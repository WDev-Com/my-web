import React, { useContext } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FaHome, FaUser, FaBlog, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './style/nav.css'
import { dataContext } from "../context/DataProvider"

const Navbar = () => {
    const { profileData } = useContext(dataContext);
    if (!profileData) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transprent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{profileData.logo}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" id='compo' to="/">
                                    <FaHome /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='compo' to="/about">
                                    <FaUser /> About
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" id='compo' to="/blog">
                                    <FaBlog /> Blog
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" id='compo' to="/work">
                                    <FaBriefcase /> Work
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='compo' to="/contact">
                                    <FaEnvelope /> Contact
                                </Link>
                            </li>
                            {/* <li className='d-flex' id='boot'>
                                <button type="button" className="btn btn-success">Sign Up</button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;



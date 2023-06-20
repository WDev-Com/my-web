import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './style/footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { dataContext } from "../context/DataProvider"
const Footer = () => {
    const { profileData } = useContext(dataContext);
    if (!{ profileData }) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <footer className="footbook text-dark text-center py-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h5 className="title">Navigation</h5>
                        <ul className="list-unstyled inline-block-links">
                            <li><Link id="pao" to="/">Home</Link></li>
                            <li><Link id="pao" to="/about">About</Link></li>
                            {/* <li><Link id="pao" to="/blog">Blog</Link></li> */}
                            <li><Link id="pao" to="/work">Work</Link></li>
                            <li><Link id="pao" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="title">Social Media</h5>
                        <ul className="list-unstyled inline-block-links">
                            <li><Link id="mao" to={{ profileData }.tlink}><FaTwitter size={25} /></Link></li>
                            <li><Link id="mao" to={{ profileData }.llink}><FaLinkedin size={25} /></Link></li>
                            <li><Link id="mao" to={{ profileData }.glink}><FaGithub size={25} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-2" id='copyright'>
                <p>&copy; {new Date().getFullYear()} BDK Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

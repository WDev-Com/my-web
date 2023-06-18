import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";
import './style/home.css'

const Home = ({ data1 }) => {
    if (!data1) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <div className="d-flex flexcss flex-md-row ">
            <div className='d-flex flex-column soc  align-items-start'>
                <div className='d-flex flex-column  descrp'>
                    <p className='stater'>{data1.name}</p>
                    <p className='stater2'>{data1.descrp}</p>
                </div>
                <div className="d-flex social-icons">
                    <Link id='item' to={data1.tlink} rel="noopener noreferrer">
                        <AiFillTwitterCircle size={30} />
                    </Link>
                    <Link id='item' to={data1.llink} rel="noopener noreferrer">
                        <AiFillLinkedin size={30} />
                    </Link>
                    <Link id='item' to={data1.glink} rel="noopener noreferrer">
                        <AiFillGithub size={30} />
                    </Link>
                </div>
            </div>
            <div className='d-flex pho flex-column align-items-end '>
                <div className="d-flex profile-container">
                    <img src={data1.imgsrc} />
                </div>
            </div>
        </div>
    );
};

export default Home;

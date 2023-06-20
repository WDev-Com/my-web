import React, { useContext } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";
import './style/home.css'
import { dataContext } from "../context/DataProvider"
//{ profileData }
const Home = () => {
    const { profileData } = useContext(dataContext);
    if (!profileData) {
        return <div> lavduing</div>; // Show a loading state while data is being fetched
    }
    return (
        <div className="d-flex flexcss flex-md-row ">
            <div className='d-flex flex-column soc  align-items-start'>
                <div className='d-flex flex-column  descrp'>
                    <p className='stater'>{profileData.name}</p>
                    <p className='stater2'>{profileData.descrp}</p>
                </div>
                <div className="d-flex social-icons">
                    <Link id='item' to={profileData.tlink} rel="noopener noreferrer">
                        <AiFillTwitterCircle size={30} />
                    </Link>
                    <Link id='item' to={profileData.llink} rel="noopener noreferrer">
                        <AiFillLinkedin size={30} />
                    </Link>
                    <Link id='item' to={profileData.glink} rel="noopener noreferrer">
                        <AiFillGithub size={30} />
                    </Link>
                </div>
            </div>
            <div className='d-flex pho flex-column align-items-end '>
                <div className="d-flex profile-container">
                    <img src={profileData.imgsrc} />
                </div>
            </div>
        </div>
    );
};

export default Home;


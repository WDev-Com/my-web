import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiFillHtml5, AiFillCode, AiFillDatabase, AiFillMobile, AiFillAndroid } from 'react-icons/ai';
import "./style/about.css"
/* About Education Skills */
/**top right bottom left */
const about = ({ data2 }) => {
    if (!data2) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <div className='maha-contain'>
            <div className='container-dd'>
                <div className='tittled'>
                    <h1>About Us</h1>
                </div>
                <div className='masala'>
                    <p id='contain'>{data2.aboutus}</p>
                </div>
            </div >
            <div className='container-dd'>
                <div className='tittled'>
                    <h1>Education</h1>
                </div>
                <div className='masala'>
                    <p id='contain'>{data2.education}</p>
                </div>
            </div >
            <div className='container-dd'>
                <div className='tittled'>
                    <h1>Skills</h1>
                </div>
                <div className='masala-imp'>
                    <p id='containskil'>{data2.skills}</p>
                </div>
            </div >
        </div>
    );
};

export default about;
{/* 
<ul className='icons'>
<li> < AiFillHtml5 size={50} /></li>
<li>  <AiFillMobile size={50} /></li>
<li> <AiFillAndroid size={50} /></li>
<li><AiFillDatabase size={50} /></li>
<li><AiFillCode size={50} /></li>
</ul>*/}
import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style/workitem.css"
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
/** Properties of bootstrap that removed 
 * for texr : col-md-8 
 * for photo : col-md-4
 * after inisde mas dflex : g-0
 * image : img-fluid
*/

const Workitem = (props) => {
    return (
        <div className='main-masala'>
            <div className="card  mb-3 inside-mas-card transparent">
                <div className="carddirection">
                    <div className="container-1 flex-column ">
                        <img src={props.img} className="img-fluid rounded-start imgg" />
                    </div>
                    <div className="container-2">
                        <div className="card-body">
                            <h3 className="card-title">{props.title}</h3>
                            <p className="card-text">{props.describe}</p>
                            <h4 className="text">&#x2022; View Source Code On Git Hub</h4>
                            <p className="card-text">
                                <Link className="nav-link" to={props.githublink}>
                                    <FaGithub size={25} />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workitem;

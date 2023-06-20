import React, { useContext } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Workitem from './Workitem'
import { dataContext } from "../context/DataProvider"

/** Properties of bootstrap that removed 
 * for texr : col-md-8 
 * for photo : col-md-4
 * after inisde mas dflex : g-0
 * image : img-fluid
*/
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

const WorkCard = () => {
    const { workdata } = useContext(dataContext)
    if (!workdata) {
        return (
            <div className='main-masala'>
                <div className="card  mb-3 inside-mas-card transparent">
                    <div className="carddirection">
                        <div className="container-1 flex-column ">
                            <img src="..." className="img-fluid rounded-start imgg" alt='Image Not Found' />
                        </div>
                        <div className="container-2">
                            <div className="card-body">
                                <h3 className="card-title">No Work Found</h3>
                                <p className="card-text">Some Issue</p>
                                <h4 className="text">&#x2022; View Source Code On Git Hub</h4>
                                <p className="card-text">
                                    <Link className="nav-link" to="https://github.com/">
                                        <FaGithub size={25} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <div className='container-fluid'>
            <div className="column">
                {workdata.map((datu) =>
                    <div key={datu.id} className='row '>
                        <Workitem
                            key={datu.id}
                            img={datu.imgsrc}
                            title={datu.tittle}
                            describe={datu.descrip}
                            githublink={datu.githublink}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default WorkCard;

import React from "react";
import "./Join.css";
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate();
    const join = () => {
        alert("Thank you for showing your interest. We will be reverting back soon");
        navigate('/community');
        }
    return (
        
        <>
         <div className="join-back">
            <div className="join">

                    <form>
                             <h2 className="head">Join Saksham</h2>
                       
                        <div className="form-group">
                    <div className="row">
                        <div className="col">
                        <label for="exampleInputFirstName">First Name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                        <label for="exampleInputLastName">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPhone">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Attach Your Product Details</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                        <button type="submit" onClick={join} className="join-btn">Join Us</button>
            </form>
            </div>
         </div>
        
            
        </>
    )
}

export default Join;
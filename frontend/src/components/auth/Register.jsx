import React, { useState, useContext } from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import './Register.css';
import mandala from './mandala.png';

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, phone,displayName};
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:5000/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
   
    return ( 
        <>
            <div className="Register">
              <div className="RegisterForm">
                <div className="RegisterMain">
             <img src={mandala} alt="img"/>
                        {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                  <form onSubmit={submit}>
                       <h2 className="text-uppercase text-center mb-5 reg">Create an account</h2>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="form3Example1cg" style={{marginLeft: '0px'}}>Your Name</label>
                      <input type="text" id="display-name" name="name"  className="form-control inputField" onChange={e => setDisplayName(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{width : '9px'}}></div><div className="form-notch-middle" style={{width : '71.2px'}}></div><div className="form-notch-trailing"></div></div></div>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="form3Example3cg" style={{marginLeft: '0px'}}>Your Email</label>
                      <input type="email" id="email" name="email" className="form-control inputField" onChange={e => setEmail(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{width: '9px'}}></div><div className="form-notch-middle" style={{width : '68.8px'}}></div><div className="form-notch-trailing"></div></div></div>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="form3Example4cdg" style={{marginLeft: '0px'}}>Phone Number</label>
                      <input type="number" id="phone" name="phone"  className="form-control inputField" onChange={e => setPhone(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{width: '9px'}}></div><div className="form-notch-middle" style={{width : '134.4px'}}></div><div className="form-notch-trailing"></div></div></div>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="form3Example4cg" style={{marginLeft: '0px'}}>Password</label>
                      <input type="password" id="password" name="password" className="form-control inputField" onChange={e => setPassword(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{width: '9px'}}></div><div className="form-notch-middle" style={{width : '64px'}}></div><div className="form-notch-trailing"></div></div></div>
                    <div className="d-flex justify-content-center">
                      <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                    <p className="text-center text-muted mb-2">Have already an account? <a href="/login" className="fw-bold text-body"><u>Login here</u></a></p>
                  </form>
                </div>
              </div>
            </div>
              
        </>
        );
}
 
export default Register;
import React, { useState, useContext } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import mandala from './mandala.png';
import './Login.css';
import Footer from '../pages/Footer/Footer';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }

    };

    return (
        <>
            <div className="login">
                <div className="left">
                    <img src={mandala} alt="img" />
                    {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                    <form onSubmit={submit} >
                        <h1>Login</h1>
                        <div className="mb-3">
                            <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                id="email1"
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="off"
                                placeholder="abc@gmail.com"
                                aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                id="password1"
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="off" />
                        </div>
                        <div className="bt1">
                            <input type="submit" value="Login" className="btn2 btn-primary" />
                        </div>
                            <p style={{display:"inline",margin: "0.5rem"}}>Dont have an account?</p>
                            <NavLink exact to="/register"> <span id="r" className="fw-bold text-body"><u>Register</u></span></NavLink>
                    </form>

                </div>

            </div> 
        </>
    );
}

export default Login;
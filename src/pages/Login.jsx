import React from 'react';
import logo from "../assets/images/logo.png";
import Gradient from "../assets/images/mesh-gradient.png";
import "../assets/styles/Login.css"
import google from "../assets/svg/google.svg"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Login = ({mode,changeMode}) => {
    return (
        <>
            <Navbar mode={mode} changeMode={changeMode}/>
            {/*<section className="container">*/}


            {/*    <div className="image-section">*/}
            {/*        <div className="image-wrapper">*/}
            {/*            <img src={Gradient} alt=""/>*/}
            {/*        </div>*/}

            {/*        <div className="content-container">*/}
            {/*            <h1 className="section-heading">Empowering Minds Through Digital <span>Education.</span></h1>*/}
            {/*            <p className="section-paragraph">Every step forward is a step towards knowledge. Embrace the journey.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="form-section">*/}
            {/*        <div className="form-wrapper">*/}
            {/*            <div className="logo-container">*/}
            {/*                <a href="#" className="logo-container">*/}
            {/*                    <img src={logo} alt="Logo"/>*/}
            {/*                </a>*/}
            {/*            </div>*/}

            {/*            <h2>Welcome Back! 👋🏻</h2>*/}
            {/*            <p>Enter your credentials to access your account.</p>*/}

                       {/* <div className="input-container"> */}
            {/*                <div className="form-group">*/}
            {/*                    <label htmlFor="email">Email</label>*/}
            {/*                    <input type="email" id="email" autoComplete="off"/>*/}
            {/*                </div>*/}
            {/*                <div className="form-group">*/}
            {/*                    <label htmlFor="password">Password</label>*/}
            {/*                    <input type="password" id="password"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="remember-forgot">*/}
            {/*                <div className="remember-me">*/}
            {/*                    <input type="checkbox" value="remember-me" id="remember-me"/>*/}
            {/*                    <label htmlFor="remember-me">Remember me</label>*/}
            {/*                </div>*/}

            {/*                <a href="#">Forgot password?</a>*/}
            {/*            </div>*/}

            {/*            <button className="login-btn">Log In</button>*/}

            {/*            <div className="or-divider">or</div>*/}

            {/*            <button className="google-signin">*/}
            {/*                <object data={google}></object>*/}
            {/*                <span>Sign in with Google</span>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section> */}


            <Footer/>
        </>
    );
};

export default Login;
import React from 'react';
import { useState,useRef,useEffect } from 'react';
import "../assets/styles/Login.css";
import Navbar from "../components/Navbar.jsx";
import { Link } from 'react-router-dom';
import SignUp from './SignUp.jsx';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{3,29}$/; // 4-30 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login=({mode,changeMode})=>{

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    return (
        <div className='login-container'>
         <Navbar mode={mode} changeMode={changeMode}/>
         <section className={`sectionclass {$mode}`}>
            <form>
            <h1>Login</h1>
                <label htmlFor="username">
                    Username
                    <span className={validName ? "valid" : "hide"}></span>
                    <span className={validName || !user ? "hide" : "invalid"}></span>
                </label>
                <input 
                    type="text" 
                    id="username" 
                    ref={userRef}
                    autoComplete="off" 
                    onChange={handleChange}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user.length > 0 && user.length < 4 ? "instructions" : "offscreen"}>
                    4 to 30 characters.<br />
                    Must begin with a letter.
                </p>

                <label htmlFor="password">
                    Password
                    <span className={validPwd ? "valid" : "hide"}></span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}></span>
                </label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && pwd.length > 0 && !validPwd ? "instructions" : "offscreen"}>
                    8 to 24 characters.
                    Must include uppercase and lowercase letters, a number, and a special character.
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

                <button className="login" disabled={!validName || !validPwd}>Login</button>

                <p className="or">OR CONTINUE WITH</p>
                <div className="social-buttons">
                    <div className="button-row">
                        <button>Apple</button>
                        <button>Google</button>
                    </div>
                    <div className="button-row">
                        <button>Github</button>
                        <button>LinkedIn</button>
                    </div>
                </div>
            </form>             
               <Link to="/signup" > <p>Don't have an account? Sign Up </p></Link>
         </section>
        </div>
    );
}
export default Login


















// import logo from "../assets/images/logo.png";
// import Gradient from "../assets/images/mesh-gradient.png";
// import google from "../assets/svg/google.svg"

// import Footer from "../components/Footer.jsx";

// const Login = ({mode,changeMode}) => {
//     return (
//         <>
//             <Navbar mode={mode} changeMode={changeMode}/>
//             <section className="container">

//                <div className="image-section">
//                    <div className="image-wrapper">
//                        <img src={Gradient} alt=""/>
//                    </div>

//                    <div className="content-container">
//                        <h1 className="section-heading">Empowering Minds Through Digital <span>Education.</span></h1>
//                        <p className="section-paragraph">Every step forward is a step towards knowledge. Embrace the journey.</p>
//                     </div>
//                 </div>

//                <div className="form-section">
//                    <div className="form-wrapper">
//                        <div className="logo-container">
//                            <a href="#" className="logo-container">
//                                <img src={logo} alt="Logo"/>
//                            </a>
//                        </div>

//                        <h2>Welcome Back! 👋🏻</h2>
//                        <p>Enter your credentials to access your account.</p>

//                        <div className="input-container">
//                            <div className="form-group">
//                                <label htmlFor="email">Email</label>
//                                <input type="email" id="email" autoComplete="off"/>
//                             </div>
//                            <div className="form-group">
//                                <label htmlFor="password">Password</label>
//                                <input type="password" id="password"/>
//                            </div>
//                        </div>

//                        <div className="remember-forgot">
//                            <div className="remember-me">
//                                <input type="checkbox" value="remember-me" id="remember-me"/>
//                                <label htmlFor="remember-me">Remember me</label>
//                            </div>

//                            <a href="#">Forgot password?</a>
//                       </div>

//                        <button className="login-btn">Log In</button>

//                        <div className="or-divider">or</div>

//                        <button className="google-signin">
//                            <object data={google}></object>
//                            <span>Sign in with Google</span>
//                         </button>
//                     </div>
//                 </div>
//             </section>


//             <Footer/>
//         </>
//     );
// };

// export default Login;
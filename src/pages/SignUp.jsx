import "../assets/styles/SignUp.css";
import Navbar from "../components/Navbar.jsx";
import { useRef, useState, useEffect } from "react";

const USER_REGEX=/^[A-Za-z][A-Za-z0-9_]{3,29}$/; // 4-30 characters
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const COMMON_PATTERNS=["123456", "12345678","1234567","123456789","1234567890", "password", "qwerty"];
const REPEATING_CHARS_REGEX=/(.)\1\1/; 

const SignUp=({mode, changeMode})=> {
    const userRef=useRef();
    const errRef=useRef();

    const [user, setUser]=useState('');
    const [validName, setValidName]=useState(false);
    const [userFocus, setUserFocus]=useState(false);

    const [pwd, setPwd]=useState('');
    const [validPwd, setValidPwd]=useState(false);
    const [pwdFocus, setPwdFocus]=useState(false);

    const [matchPwd, setMatchPwd]=useState('');
    const [validMatch, setValidMatch]=useState(false);
    const [matchFocus, setMatchFocus]=useState(false);

    const [commonPatternWarning, setCommonPatternWarning]=useState(false);
    const [repeatingCharsWarning, setRepeatingCharsWarning]=useState(false);

    useEffect(()=> {
        userRef.current.focus();
    }, []);

    useEffect(()=> {
        const result=USER_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(()=> {
        const basicValid=PWD_REGEX.test(pwd);
        const hasCommonPattern=COMMON_PATTERNS.some(pattern=> pwd.toLowerCase().includes(pattern));
        const hasRepeatingChars=REPEATING_CHARS_REGEX.test(pwd);

        setValidPwd(basicValid && !hasCommonPattern && !hasRepeatingChars);
        setCommonPatternWarning(hasCommonPattern);
        setRepeatingCharsWarning(hasRepeatingChars);

        setValidMatch(pwd===matchPwd);
    }, [pwd, matchPwd]);

    const handleChange=(event)=> {
        setUser(event.target.value);
    };

    return (
        <div className="signup-container">
            <Navbar mode={mode} changeMode={changeMode} /> 
            <section>
                <h1>Create an account</h1>
                <form>
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
                        onFocus={()=> setUserFocus(true)}
                        onBlur={()=> setUserFocus(false)}
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
                        onChange={(e)=> setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={()=> setPwdFocus(true)}
                        onBlur={()=> setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && pwd.length > 0 && !validPwd ? "instructions" : "offscreen"}>
                        {commonPatternWarning ? "Common pattern found in password." : 
                         repeatingCharsWarning ? "Password contains repeated characters." :
                         "8 to 24 characters. Must include uppercase, lowercase, a number, and a special character. Allowed special characters: !@#$%"}
                    </p>

                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                        <span className={validMatch && matchPwd ? "valid" : "hide"} />
                        <span className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e)=> setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={()=> setMatchFocus(true)}
                        onBlur={()=> setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch && matchPwd.length > 0 ? "instructions" : "offscreen"}>
                        Must match the first password input field.
                    </p>

                    <button className="createaccount" disabled={!validName || !validPwd || !validMatch}>Create Account</button>

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
            </section>
        </div>
    );
};

export default SignUp;

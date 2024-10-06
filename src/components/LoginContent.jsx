import {useState} from 'react'
import '../assets/styles/LoginContent.css'
const LoginContent = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleChange = (e)=>{
        if(e.target.name === 'username'){
            setusername(e.target.value)
        }
        else if(e.target.name === 'password'){
            setpassword(e.target.value)
        }
    }
  return (
    <div className='login-container'>
        <div className="login-content">
            <div className="left">
                <h2>Login</h2>
                <div className="icons"></div>
                <input  onChange={handleChange}type="text" placeholder='Username/Email'  required={true} />
                <input onChange={handleChange} type="password" placeholder='Password' required={true}/>
                <button>Login</button>
            </div>    
            <div className="right">
                <h2>If you are new , then signup</h2>
                <button>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default LoginContent

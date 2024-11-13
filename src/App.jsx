import {lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import Borrow from "./pages/Borrow.jsx";
import { useState } from 'react';
import './assets/styles/App.css';
import OtpPage from './pages/OtpPage.jsx';
const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const SingleBook = lazy(() => import('./pages/SingleBook.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));

function App() {

  const[mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  return (
      <>
      <div className={`app-container ${mode}`}>
        <Suspense fallback={<div className={"loading"}> <img src={"/loading.gif"}/> </div>}>
          <Routes>
            <Route path="/" element={<Home mode={mode} changeMode={toggleMode}/>} />
            <Route path={"/borrow"} element={<Borrow mode={mode} changeMode={toggleMode}/>} />
            <Route path="/books" element={<Books mode={mode} changeMode={toggleMode}/>} />
            <Route path="/book/:id/:readLink" element={<SingleBook mode={mode} changeMode={toggleMode}/>} />
            <Route path="/about" element={<About mode={mode} changeMode={toggleMode}/>} />
            <Route path="/contact" element={<Contact mode={mode} changeMode={toggleMode}/>} />
            <Route path="/login" element={<Login mode={mode} changeMode={toggleMode}/>} />
            <Route path="/signup" element={<SignUp mode={mode} changeMode={toggleMode}/>} />
            <Route path="/otppage" element={<OtpPage mode={mode} changeMode={toggleMode}/>}></Route>
            <Route path="*" element={<PageNotFound mode={mode} changeMode={toggleMode}/>} />
          </Routes>
        </Suspense>
        </div>
      </>
  );
}

export default App;

import {lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import Borrow from "./pages/Borrow.jsx";
const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const SingleBook = lazy(() => import('./pages/SingleBook.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));

function App() {
  return (
      <>
        <Suspense fallback={<div className={"loading"}> <img src={"/loading.gif"}/> </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/borrow"} element={<Borrow />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id/:readLink" element={<SingleBook />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </>
  );
}

export default App;

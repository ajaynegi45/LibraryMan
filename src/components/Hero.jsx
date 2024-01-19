import React from 'react';
import "../assets/styles/Hero.css"
import {useGlobalContext} from "../Context.jsx";

const Hero = () => {
    const {chapter,slok} = useGlobalContext();
    return (
        <>
            {/*<div className={"shlok-div"} >*/}
            {/*    <img className={"shlok-img"}  src={`https://bhagavadgitaapi.in/slok/${chapter}/${slok}/gita.svg`} alt={"Geeta World"}/>*/}
            {/*</div>*/}
        </>
    );
};

export default Hero;
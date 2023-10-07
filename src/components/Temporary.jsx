import React from 'react';

const customStyle = {
    display: "flex",
    width: "100vw",
    height : "80vh",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
}

const Temporary = () => {
    return (
        <>
            <div style={customStyle}>
                <h1 >Curently working on it</h1>
                <h1>SOON...</h1>
            </div>
        </>
    );
};

export default Temporary;

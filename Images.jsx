import React from 'react';


// Creating a component as Images
// Fat arrow function

const Images = (props) => {
    return <img src={props.imgsrc} alt="mypic" className="card_img"/>
}

export default Images;

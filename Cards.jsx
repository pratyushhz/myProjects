// CREATE OUR COMPONENT:
import React from 'react';
import Images from './Images';
import Heading from './Heading';


// CUSTOM COMPONENT:
function Card(props) {
    return(

    <>
    <div className="cards">
        <div className="card">
            <Images imgsrc={props.imgsrc} />
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <Heading sname={props.sname}/>
                {/* <h3 className= "card_title">{props.sname}</h3> */}
                <a href={props.links} target="_blank">
                    <button className="btn">Imdb</button>
                </a>
            </div>
        </div> 
    </div>
    </>
    )
}
export default Card;
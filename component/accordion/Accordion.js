import React, {useState} from "react";
import { questions } from "./Api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
    const [data, setData] = useState(questions);
    return(
        <>
            <section className="main-div">
            <h1>React Basic Questions</h1>
            {
                data.map((curElem) => {
                    const {id,question,answer} = curElem;
                    return <MyAccordion key={question} {...curElem} />
                })
            }
            </section>
        </>
    )
} 
export default Accordion;
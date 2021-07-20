import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListComponent from "./ListComponent";
const ToDoListMui = () => {
    const [item, setItem] = useState("");
    // creating an empty array
    const [newItem, setNewItem] = useState([]);

    const inputValue = (e) => {
        setItem(e.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevValue) => {
            return[...prevValue, item];
        })
        setItem(" ");
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add an item" onChange= {inputValue}/>
                    <Button className="newBtn" onClick= {listOfItems}>
                        <AddBoxIcon />
                    </Button>
                    <br />
                    <ol>
                    {/* <li>{item}</li> */}
                        {
                            newItem.map((curVal, index) => {
                                return(
                                    <ListComponent key={index} text={curVal} />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>

    )
}

export default ToDoListMui;



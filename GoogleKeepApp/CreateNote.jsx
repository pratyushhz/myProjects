import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);



    const [note, setNote] = useState( {
        x:'', //storing data
        y:'', //storing data
    })

    const InputEvent = (event) => {
        // const value= event.target.value;
        // const name = event.target.name;
        
        // object destructuring: 
        const {name, value} = event.target;
        setNote((prevData) => {
            return(
                {
                // spread operator
                ...prevData,
                [name]:value,
                }
            )
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            x:"",
            y:"",
        })
        
    }
    const expandIt = () => {
        setExpand(true);
    }
    const backtoNormal = () => {
        setExpand(false);
    }


    return(
        <>
            
            <div className="main_note" onDoubleClick={backtoNormal}>
                <form>
                {expand?
                    <input type="text" name="x" value={note.x} onChange={InputEvent} placeholder="Title" autoComplete="off"/>:null
                }
                    <textarea cols="" rows="" name="y" value={note.y} onChange={InputEvent} placeholder="Write a note..." onClick={expandIt} ></textarea>
                    
                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>: null
                    }
                </form>
            </div>
        </>
    )
}

export default CreateNote;
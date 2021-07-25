import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note">
                <h1>{props.x}</h1>
                <br />
                <p>{props.y}</p>
                <button className="btn" onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon"/>
                </button>
            </div>
        </>
    )
}
export default Note;
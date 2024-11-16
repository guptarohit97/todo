import { useState } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const CreateArea = (props) => {
    const [isExpand,setExpand]=useState('false')
    const [note,setNote]=useState(
        {
            title:"",
            content:""
        }
    )
    function handleChange(event){
        const {name,value}=event.target
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    function expand(){
        setExpand(true);
    }

  return (
    <div>
        <form className='create-note'>{isExpand && (<input name="title" value={note.title} placeholder='Title' onChange={handleChange} />)}
            
            <textarea name="content" rows={isExpand?3:1} onClick={expand} value={note.content} placeholder='Description' onChange={handleChange} />
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </form>
    </div>
  )
}

export default CreateArea
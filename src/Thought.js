import React, {useState} from 'react';

const Thought = (props) =>{
   
    const handleDelete =()=>{
        props.parentCallback(props.id);
    }
    return(
        <>
        <div className='thought'> 
        <span className = 'thoughttext'>{props.text}  -- { 15- Math.floor((Date.now()-props.createAt)/1000)}s</span> 
        <button onClick={handleDelete}> x </button>
        </div>
        </>
    )
}

export default Thought
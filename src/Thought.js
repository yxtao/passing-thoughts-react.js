import React, {useState} from 'react';

const Thought = (props) =>{
    const [thought, setThought] = useState(props.text);
    const [ id, setId] = useState(props.id);
   
    const handleDelete =()=>{
        props.parentCallback(id);
    }
    return(
        <>
        <div className='thought'> 
        <span className = 'thoughttext'>{thought}  -- { 15- Math.floor((Date.now()-props.createAt)/1000)}s</span> 
        <button onClick={handleDelete}> x </button>
        </div>
        </>
    )
}

export default Thought
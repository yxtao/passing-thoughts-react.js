import React, {useState} from 'react';
import './styles.css';

const Input = (props) => {
    const [text, setText] = useState('');
    const handleChange = ({target})=>{
        setText(target.value)
    }
    const handleSubmit=()=>{
        if (text.length>0){
         props.parentCallback(text)
        } else{
            alert("please enter words")
        }
    }
    return (
        <>
            <label>
                Your thought:
                <input className= "inputbox" 
                       type="text" 
                       name="thoughtText" 
                       value={text}
                       placeholder="Enter your thought"
                       onChange={handleChange}/>
            </label>
                <button className="button" onClick={handleSubmit}>Add</button>
        </>
    )
}

export default Input
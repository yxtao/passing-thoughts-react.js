import React, { useState, useEffect } from 'react';
import './styles.css';
import Input from './Input';
import Thought from'./Thought';
var thoughts = []
var thoughtId = 0;
const App = ()=>{
    
    const [thoughtObjList, setThoughtObjList] = useState(thoughts);

    const handleCallback =(text) =>{
        let obj = { text: text,
                    createAt:Date.now(),
                    id: thoughtId};
        thoughtId ++;
        setThoughtObjList((preList)=>[...preList, obj]);        
    }
    const handleDeleteCallback =(id) =>{
        setThoughtObjList((preList)=>preList.filter((obj)=>obj.id!== id))
    }
    
    useEffect(()=>{
        const timer = setInterval(()=> {
            setThoughtObjList((preList)=>preList.filter((obj)=> Date.now()-obj.createAt < 15000));
        }, 1000 );
        return ()=>clearInterval(timer);
    },[])
  
    return(
    <div>
        <div className="intro">Passing your thoughts. Each thought disappers after 15 seconds. </div>
        <Input parentCallback={handleCallback}/>
        {thoughtObjList.map((thoughtObj)=><Thought id={thoughtObj.id} text={thoughtObj.text} createAt={thoughtObj.createAt} parentCallback={handleDeleteCallback}/> )}
    </div>)
}
export default App
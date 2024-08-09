/* eslint-disable react/prop-types */
import './InputSection.css'
import juliusomo from "../../assets/avatars/image-juliusomo.png"
import {useState} from 'react'
const InputSection = (props) => {
    const[inputValue,setInputValue]=useState("")
    const handleonClick=()=>{
        props.addPost(inputValue);
        setInputValue("")
    }
    const handleonChange=(event)=>{
        setInputValue(event.target.value)
    }
  return (
    <div id="input">
        <img src={juliusomo} id="jul"/>
        <textarea value={inputValue} onChange={handleonChange} placeholder='  Add a comment...'/>
        <button id="send"onClick={handleonClick}>SEND</button>
    </div>
  )
}

export default InputSection
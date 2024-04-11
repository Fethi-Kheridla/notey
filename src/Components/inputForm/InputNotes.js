import React from 'react'
import './InputNotes.css'
import { useState } from 'react';
import {motion} from "framer-motion";
import pattern1 from '../image/i-like-food.svg';
import pattern2 from '../image/overlapping-circles.svg';
import pattern3 from '../image/tic-tac-toe.svg';
import pattern4 from '../image/topography.svg';
import addNote from '../image/note-medical-svgrepo-com.svg';
import close from '../image/close-ellipse-svgrepo-com.svg';

function InputNotes({sendDataToParent,inputToggler}) {

const [noteTitle,setTitle] = useState('');
const [noteContent,setContent] = useState('');
const [noteColor,setColor] = useState('');
const [notePattern,setPattern] = useState();

function handleTitleChange(event){
    setTitle(event.target.value);
};
function handleContentChnage(event){
    setContent(event.target.value);
};
function handleColorChange(event){
    setColor(event.target.value);
};
function handlePatternChange(event){
    setPattern(event.target.value);
};
const sendData = () => {
    // Data to be sent to parent component
    const data = {title: noteTitle,
                  content: noteContent,
                  pattern: `url(${notePattern})`,
                  color: noteColor};
    sendDataToParent(data);
    setTitle('');
    setContent('');
    setColor('');
    setPattern();
    inputToggler();
  };

  const closeForm = ()=>{
    inputToggler();
  };

  return (
    <div className='wrapper'>
      <div className="input-form">
      <input type="text" value={noteTitle} placeholder='Note Title here' onChange={handleTitleChange} className='note-input-title'/>
      <input type="text" value={noteContent} placeholder='Note Content here' onChange={handleContentChnage} className='note-input-Content'/>
      <h3 className='labels'>Chose a Color:</h3>
      <input type="color"  value={noteColor} placeholder='Note Color Here' onChange={handleColorChange} className='note-color'/>
      <h3 className='labels'>Chose a Theme:</h3>
      <ul>
        <li>
          <input type="radio" value={pattern1} checked={notePattern === pattern1} id='Pattern1' onChange={handlePatternChange} name='patterns'/>
          <label htmlFor="Pattern1">Food </label>
        </li>
        <li>
          <input type="radio" value={pattern2} checked={notePattern === pattern2} id='Pattern2' onChange={handlePatternChange} name='patterns'/>
          <label htmlFor="Pattern2">Circles </label>
        </li>
        <li>
          <input type="radio" value={pattern3} checked={notePattern === pattern3} id='Pattern3' onChange={handlePatternChange} name='patterns'/>
          <label htmlFor="Pattern3">Tic Tac Toe </label>
        </li>
        <li>
          <input type="radio" value={pattern4} checked={notePattern === pattern4} id='Pattern4' onChange={handlePatternChange} name='patterns'/>
          <label htmlFor="Pattern4">Topography </label>
        </li>
      </ul>
      <motion.img src={addNote} alt="add the note" onClick={sendData} className='add-note' whileTap={{scale:[null,0.8,1]}} transition={{ duration: 0.15 }}/>
      <motion.img src={close} alt="close form" onClick={closeForm} className='close-form' whileTap={{scale:[null,0.8,1]}} transition={{ duration: 0.15 }}/>
      </div>
    </div>
  )
}

export default InputNotes

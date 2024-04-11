import React from 'react'
import './addBar.css';
import {motion} from "framer-motion";
import add from '../image/add-to-svgrepo-com.svg';
function AddBar({inputToggler}) {
  const handleOnClick = () =>{
    inputToggler();
  }
  return (
    <div className="notes-input-section">
        <motion.img src={add} alt="add button" whileTap={{scale:[null,0.8,1]}} transition={{ duration: 0.15 }} onClick={handleOnClick}/>
    </div>
  )
}

export default AddBar

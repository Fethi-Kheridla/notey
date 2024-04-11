import React from 'react'
import './StickyNotes.css'
import edit from '../image/edit-4-svgrepo-com.svg';
import remove from '../image/remove-svgrepo-com.svg';
import { motion, useMotionValue, useTransform } from "framer-motion";
function StickyNotes({
  noteTitle,
  noteContent,
  notePattern,
  noteBgColor,
  delet,
 }) {
  const dragZIndex = useMotionValue(1); // Initialize zIndex
  const zIndex = useTransform(dragZIndex, [0, 100], [1, 10]);
  return (
    <motion.div className="note" style={{backgroundColor: `${noteBgColor}`,
                                  backgroundImage: `${notePattern}`,
                                  position: "relative",
                                  zIndex}} 
                                  drag 
                                  dragSnapToOrigin
                                  dragElastic={0.2}
                                  onDragStart={() => dragZIndex.set(10)}
                                  onDragEnd={() => dragZIndex.set(1)}
                                  whileTap={{zIndex:"10"}}
                                  >
      <div className="note-title">
        <h2>{noteTitle}</h2>
      </div>
      <div className="note-content">
        <h3>{noteContent}</h3>
      </div>
     <motion.img src={edit} alt='edit' className='edit' whileTap={{scale:[null,1.3,1.2]}} transition={{ duration: 0.2 }}/>
      <motion.img src={remove} alt='remove' className='remove' onClick={delet} whileTap={{scale:[null,1.3,1.2]}} transition={{ duration: 0.1 }}/>
    </motion.div>
  )
}

export default StickyNotes

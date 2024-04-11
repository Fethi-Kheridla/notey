import './App.css';
import StickyNotes from '../StickyNotes/StickyNotes';
import InputNotes from '../inputForm/InputNotes';
import AddBar from '../addBar/addBar';
import { useState } from 'react';
import pattern1 from '../image/i-like-food.svg';
import pattern2 from '../image/overlapping-circles.svg';
import pattern3 from '../image/tic-tac-toe.svg';
import pattern4 from '../image/topography.svg';

function App() {

  const [isToggled, setIsToggled] = useState(false);

 const [notes, setNotes] = useState([]);

const handleDataFromChild = (data) => {
  setNotes(n => [...n,data]);
};

const inputToggler = () =>{
  setIsToggled(!isToggled);
}






  function handleRemove(index){
    setNotes(notes.filter((_,i) => i !== index));
  };

  return (
    <div className="App">
      <AddBar inputToggler = {inputToggler}/>
      <div className="notes-section">
        {notes.map((note,index)  => <StickyNotes key={index} noteTitle={note.title} noteContent={note.content} notePattern={note.pattern} noteBgColor={note.color} delet={()=>handleRemove(index)}/>)}
      </div>
      {isToggled ? <InputNotes sendDataToParent = {handleDataFromChild} inputToggler = {inputToggler}/>:null}
    </div>
  );
}

export default App;

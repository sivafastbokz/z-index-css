import React, { useState } from 'react';
import './App.css';

function App() {
  const [zIndex, setZIndex] = useState(0);

  const handleChangeZIndex = (event) => {
    const value = parseInt(event.target.value);
      setZIndex(value);
  };

  return (
    <React.Fragment>
      <div className={` box1 ${zIndex <= 3 ? 'front' : ''}`}>box1</div>
      <input type='number' placeholder='box1' onChange={handleChangeZIndex}></input>

      <div className={` box2 ${zIndex <= 3 ? 'front' : ''}`}>box2</div>
      <input type='number' placeholder='box2' onChange={handleChangeZIndex}></input>

      <div className={` box3 ${zIndex <= 3 ? 'front' : ''}`}>box3</div>
      <input type='number' placeholder='box3' onChange={handleChangeZIndex}></input>
    </React.Fragment>
  );
}

export default App;

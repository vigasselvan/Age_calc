import React, { useState, useRef } from 'react';
import Year from './components/Year';
import Months from './components/Months';
import Days from './components/Days';

function App() {
  const yrRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [componentToRender, setComponentToRender] = useState(null);

  // Function to handle button click
  const handleClick = () => {
    const yrVal = yrRef.current.value;
    const monthVal = monthRef.current.value;
    const dayVal = dayRef.current.value;

    setIsClicked(true);
    setComponentToRender(
      <RenderedComponent
        yrVal={yrVal}
        monthVal={monthVal}
        dayVal={dayVal}
      />
    );
  };


  //change the code below to change the look of input statements.
  return (
    <div>
      <div className='formsDetail'>
      <div>
        <label htmlFor="dayVal">Day</label><br></br>
        <input type="text" id="dayVal" ref={dayRef} placeholder="Day" />
      </div>
      <div>
        <label htmlFor="monthVal">Month</label><br></br>
        <input type="text" id="monthVal" ref={monthRef} placeholder="Month" />
      </div>
      <div>
        <label htmlFor="yearVal">Year</label><br></br>
        <input type="text" id='yearVal' ref={yrRef} placeholder="Year" />
      </div>

      <button onClick={handleClick}> </button>
    </div>
    <hr className='hrStyle'></hr>
    <div className='output'>
      {isClicked && componentToRender}
    </div>
    
  </div>
    
  );
}



function RenderedComponent({ yrVal, monthVal, dayVal }) {
  return (
    <div>
      <h1>
        <Year brthMonth={monthVal} brthYr={yrVal} /> years
      </h1>
      <h1>
        <Months brthMonth={monthVal} /> months
      </h1>
      <h1>
        <Days brthDay={dayVal} /> days
      </h1>
    </div>
  );
}

export default App;
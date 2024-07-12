import './App.css';
import Heading from './components/Heading';
import Result from './components/Result';
import Buttongrp from './components/Buttongrp';
import { useState } from 'react';

function App() {
  let [calVal, setCalVal] = useState("");

  const handleButton = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div>
      <Heading />
      <div className="container">
        <div className="maincontent">
          <Result displayValue={calVal} />
          <Buttongrp handleButton={handleButton} />
        </div>
      </div>
    </div>
  );
}

export default App;

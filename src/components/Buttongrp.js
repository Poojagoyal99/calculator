import './Buttongrp.css';

const Buttongrp = ({ handleButton }) => {
  let buttonlist = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', 'C', '/',"="];

  const handleClick = (event) => {
    const buttonText = event.target.textContent;
    handleButton(buttonText);
  };

  return (
    <div className='btnsGroup'>
      {buttonlist.map((buttonName, index) => (
        <button className='btnsGroup1' type="button" onClick={handleClick} key={index}>{buttonName}</button>
      ))}
    </div>
  );
};

export default Buttongrp;

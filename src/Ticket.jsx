import React from 'react';

import classes from './App.css';

function Ticket(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h4>Name: {props.name}</h4>
      <p>License Plate: {props.licenseplate}</p>
      <p>Date: {props.date}</p> 
      <p>Time: {props.time}</p>
      <p>Amount: ${props.amount}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

// const Ticket = (props) => {
//   function handleClick() {
//     props.onDelete(props.id);
//   }

//   return (
//     <div className="note">
//       <h4>Name: {props.name}</h4>
//       <p>License Plate: {props.licenseplate}</p>
//       <p>Date: {props.date}</p> 
//       <p>Time: {props.time}</p>
//       <p>Amount: ${props.amount}</p>
//       <button onClick={handleClick}>DELETE</button>
//     </div>
//   );
// };

export default Ticket;

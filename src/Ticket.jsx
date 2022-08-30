import React from 'react';

import classes from './App.css';

const Ticket = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <li className={classes.ticket}>
      <h4>Name: {props.name}</h4>
      <p>License Plate: {props.licenseplate}</p>
      <p>Date: {props.date} Time: {props.time}</p>
      <p>Amount: ${props.amount}</p>
      <button onClick={handleClick}>DELETE</button>
    </li>
  );
};

export default Ticket;

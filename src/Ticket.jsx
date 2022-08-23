import React from 'react';

import classes from './App.css';

const Ticket = (props) => {
  return (
    <li className={classes.ticket}>
      <h4>Name: {props.name}</h4>
      <p>License Plate: {props.licenseplate}</p>
      <p>Date: {props.date} Time: {props.time}</p>
      <p>Amount: ${props.amount}</p>
    </li>
  );
};

export default Ticket;

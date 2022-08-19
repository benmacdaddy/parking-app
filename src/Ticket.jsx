import React from 'react';

import classes from './App.css';

const Ticket = (props) => {
  return (
    <li className={classes.ticket}>
      <h2>{props.name}</h2>
      <h3>{props.licenseplate}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.amount}</p>
    </li>
  );
};

    //       id: ticketData.id,
    //       name: ticketData.name,
    //       licenseplate: ticketData.licenseplate,
    //       date: ticketData.date,
    //       time: ticketData.time,
    //       amount: ticketData.amount,

export default Ticket;

import React from 'react';

import Ticket from './Ticket';

const TicketList = (props) => {
  return (
    <ul className="list-group list-group-numbered mb-3">
      {props.tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          name={ticket.name}
          licenseplate={ticket.licenseplate}
          date={ticket.date}
          time={ticket.time}
          amount={ticket.amount}
        />
      ))}
    </ul>
  );
};

export default TicketList;

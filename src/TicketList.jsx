import React from 'react';

import Ticket from './Ticket';

const TicketList = (props) => {

  // function deleteTicket(id) {
  //   setTicket(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

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
          // onDelete={deleteTicket}
        />
      ))}
    </ul>
  );
};

export default TicketList;

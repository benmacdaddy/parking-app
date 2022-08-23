import { React, useState, useCallback } from "react";
import TicketsList from './TicketList';

function TicketsRecord() {
  // console.log("TicketsRecord")
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTicketsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://parking-app-ba14d-default-rtdb.asia-southeast1.firebasedatabase.app/tickets.json");
      if (!response.ok) {
        throw new Error('Something went wrong!')
    }

    const data = await response.json();

    const loadedTickets = [];

    for (const key in data) {
      loadedTickets.push({
        id: key,
        name: data[key].name,
        licenseplate: data[key].licenseplate,
        date: data[key].date,
        time: data[key].time,
        amount: data[key].amount,
      })
    }

      setTickets(loadedTickets);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  let content = "";
  
  if (tickets.length > 0) {
    content = <TicketsList tickets={tickets} />;
  }

  else if (tickets.length === 0) {
    content = <p>You have no tickets!</p>
  }
  //WHY DOESNT THIS WORK???

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <button class="btn btn-primary btn-lg mb-5" onClick={fetchTicketsHandler}>See Tickets</button>
      {content}
    </div>
  );
}

export default TicketsRecord;
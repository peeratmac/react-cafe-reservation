import React from 'react';

const ReservationsCard = props => {
  const { id, guestName, date, time, numberOfGuests, fetchWithDelete } = props;
  return (
    <div>
      <h1>{guestName}</h1>
      <h2>{date}</h2>
      <h2>{time}</h2>
      <h2>Number of guests: {numberOfGuests}</h2>
      <button onClick={() => fetchWithDelete(id)}>Cancel</button>
    </div>
  );
};

export default ReservationsCard;

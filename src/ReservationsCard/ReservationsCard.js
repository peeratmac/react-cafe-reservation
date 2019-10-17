import React from 'react';

const ReservationsCard = props => {
  const { id, guestName, date, time, numberOfGuests } = props;
  return (
    <div>
      <h3>{guestName}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {numberOfGuests}</p>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationsCard;

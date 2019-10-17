import React from 'react';

const ReservationsCard = props => {
  const { guestName, date, time, numberOfGuests } = props;
  return (
    <div>
      <h1>{guestName}</h1>
      <h2>{date}</h2>
      <h2>{time}</h2>
      <h2>Number of guests: {numberOfGuests}</h2>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationsCard;

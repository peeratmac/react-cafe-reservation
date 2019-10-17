import React from 'react';
import ReservationsCard from '../ReservationsCard/ReservationsCard';

const ReservationsContainer = ({ reservations, fetchWithDelete }) => {
  return reservations.map(reservation => (
    <ReservationsCard
      key={reservation.id}
      guestName={reservation.name}
      date={reservation.date}
      time={reservation.time}
      numberOfGuests={reservation.number}
      id={reservation.id}
      fetchWithDelete={fetchWithDelete}
    />
  ));
};

export default ReservationsContainer;

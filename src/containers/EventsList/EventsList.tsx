import React, { useState } from 'react';
import EventCard from './../../components/EventCard';
import './EventsList.css';
import { Event } from './../../services/events/models/Event';
interface IProps {
  events: Array<Event>;
}
const EventList: React.FC<IProps> = props => {
  const { events } = props;

  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [modal, setModal] = React.useState(false);

  const openModal = (event: Event) => {
    setCurrentEvent(event);
    setModal(true);
  };

  const closeModal = () => {
    setCurrentEvent(null);
    setModal(false);
  };
//<BaseModal state={modal} onClose={closeModal}></BaseModal>
  return (
    <>
      {JSON.stringify(currentEvent)}
      

      <div className="events-list-container">
        {events.map((event: Event) => (
          <EventCard
            event={event}
            
          ></EventCard>
        ))}
      </div>
    </>
  );
};
export default EventList;

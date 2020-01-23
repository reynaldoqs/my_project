import React, { useState, useEffect } from 'react';
import { getEvents } from './../../services/events/api';
import EventsList from '../../containers/EventsList';
import {Event} from './../../services/events/models/Event';
import Loading from './../../components/Loading';
import Error from './../../components/Error';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Array<Event>>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadEvents = async () => {
    try {
      setIsLoading(true);
      const events: Array<Event> = await getEvents();
      setEvents(events);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <EventsList events={events} />
      )}
    </>
  );


};
export default EventList;

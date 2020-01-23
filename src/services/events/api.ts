import { Event } from './models/Event';
export const getEvents = (): Promise<Array<Event>> => {
  return Promise.resolve([
    {
      title: "Event title",
      description: "Event description",
      venue: "just for fun",
      booking: true
    },
    {
        title: "Event title",
        description: "Event description",
        venue: "just for fun",
        booking: true
      }
  ]);
};

import React from "react";
import { Event } from './../../services/events/models/Event';
interface EventCardProps {
  event: Event;
  onActionClick?: () => void;
}
const EventCard: React.FC<EventCardProps> = (props) => {
  return <div>Event Card</div>;
};
export default EventCard;

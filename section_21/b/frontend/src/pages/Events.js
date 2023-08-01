import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
    { eventId: "e1", title: "Programming for everyone", price: 0, description: "Learn to code in React!" },
    {   eventId: "e2", title: "Networking for introverts", price: 30, description: "Learn to code in React!" },
    {   eventId: "e3", title: "Networking for extroverts", price: 30, description: "Learn to code in React!" },
    {   eventId: "e4", title: "Networking for everyone", price: 30, description: "Learn to code in React!" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
        <ul>
            {EVENTS.map((event) => (
                <li key={event.eventId}>
                    <Link to={`${event.eventId}`} relative="true">{event.title}</Link>
                </li>
            ))}
        </ul>
    </>
  );
}

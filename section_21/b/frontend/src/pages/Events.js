import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
      {/* <EventsList /> */}
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not load events." };
    throw json(
      { message: "Could not load events." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

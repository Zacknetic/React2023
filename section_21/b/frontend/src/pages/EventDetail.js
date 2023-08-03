import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );

  if (!response.ok) {
    throw json(
      { message: "Could not load event details for selected event." },
      {
        status: 500,
      }
    );
  }

  return response;
}

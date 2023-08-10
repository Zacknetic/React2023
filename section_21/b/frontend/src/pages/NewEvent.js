import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  //this won't work, we need to use data.get() to get the values
  // const {title, description, date, time, location, image} = Object.fromEntries(data);
  //here is how to do it instead using one line and data.get()

  const eventData = Object.fromEntries(data);
  // const eventData = {
  //   title: data.get("title"),
  //   description: data.get("description"),
  //   date: data.get("date"),

  // }
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  
  if (!response.ok) {
    throw json({ message: "Could not create event" }, { status: 500 });
  }

  return redirect(`/events`);
}

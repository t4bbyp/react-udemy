import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  //in loader function u can use browser APIs but not react hooks
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "couldnt fetch events" };

    //long helper -> Router v7+
    throw new Response(JSON.stringify({ message: "could not fetch events" }), {
      status: 500,
    });

    //short helper -> Router v6
    //return json({ message: "couldnt fetch events" }, { status: 500 });
  } else {
    //const resData = await response.json();
    //return resData.events;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  //return defer({
  //defer works on react v6. for v7+ u dont need it
  return {
    events: loadEvents(),
  };
}

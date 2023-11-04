const getEvents = async () => {
  const response = await fetch("http://localhost:4000/events");
  return response.json();
};

const Events = async () => {
  const events = await getEvents();
  console.log(events);
  return <div>Events</div>;
};

export default Events;

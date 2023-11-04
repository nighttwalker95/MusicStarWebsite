import EventBox from "./EventBox";

const getEvents = async () => {
  const response = await fetch("http://localhost:4000/events");
  return response.json();
};

const Events = async () => {
  const events = await getEvents();

  return (
    <section className="section" id="tours">
      <div className=" container mx-auto">
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;

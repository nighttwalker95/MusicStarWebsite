import EventBox from "./EventBox";
import SectionHeader from "./SectionHeader";

const getEvents = async () => {
  const response = await fetch("http://localhost:4000/events");
  return response.json();
};

const Events = async () => {
  const events = await getEvents();

  return (
    <section className="section" id="tours">
      <div className=" container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;

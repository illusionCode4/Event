import EventList from '@/components/events/event-list';
import { getAllEvents } from '@/dummy-data';
import EventSearch from '@/components/events/EventSearch';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoaderState] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoaderState(true);
    fetch(
      'https://react-http-practice-434f4-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoaderState(false);
        setLoadedMeetups(meetups);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;

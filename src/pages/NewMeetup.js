import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-http-practice-434f4-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
      .then((result) => {
        navigate('/');
      })
      .catch((err) => {});
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetup;

import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const history = useNavigate();

  function onMeetupHandler(meetupData) {
    fetch(
      "firebaseUrl",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history('/');
    });
  }

  return (
    <section>
      <h1>All NewMeetupPage Page</h1>
      <NewMeetupForm onAddMeetup={onMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

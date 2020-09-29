import React from 'react';
import Form from './Form';
import { createAppt } from '../api';
import { useHistory, useParams } from 'react-router-dom';
import 'fontsource-roboto';
import 'react-router-modal/css/react-router-modal.css';

export default function CreateAppt({ date, time }) {
  const history = useHistory();
  const params = useParams();

  const onSubmit = async (data) => {
    await createAppt(data);
    window.alert(
      `Appointment request created for ${data.date} at ${data.time}. A confirmation email has been sent to your inbox.`,
    );
    history.push(`/${params.date}/ViewAppointment/${params.time}`);
  };
  return (
    <div>
      <Form date={date} time={time} onSubmit={onSubmit} />
    </div>
  );
}

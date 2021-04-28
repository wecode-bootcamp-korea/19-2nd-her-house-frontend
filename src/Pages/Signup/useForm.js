import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SEND_TO_SERVER } from '../../config';

const SIGNUP_TO_SERVER = SEND_TO_SERVER.replace('in', 'up');

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  let history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    setErrors(validate(values));

    e.preventDefault();
    await fetch(SIGNUP_TO_SERVER, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        id_number: values.idNumber,
        name: values.name,
        phone_number: values.phone.replaceAll('-', ''),
      }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('access_token', res.token);
        history.push('/');
      });
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
        setSubmitting(true);
      }
      setSubmitting(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

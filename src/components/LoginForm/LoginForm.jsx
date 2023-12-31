// Стара форма
// export const LoginForm = () => {
//   const handleSubmit = event => {
//     event.preventDefault();
// Збираємо значення полів
//     const { login, password } = event.target.elements;
//     console.log(login.value, password.value);
//   };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         login <input type="text" name="login" />
//       </label>
//       <label htmlFor="password">
//         password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(), //мінімально 6 символів, максимально 16
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: #2a2a2a;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

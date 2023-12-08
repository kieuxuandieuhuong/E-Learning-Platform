import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;

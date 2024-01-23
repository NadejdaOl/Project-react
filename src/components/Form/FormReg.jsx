import React from "react";
import { useForm } from 'react-hook-form';
import classes from './FormReg.module.css';

function FormReg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.formReg}>
      <form className={classes.registration} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.area}>
          <input
            type="text"
            placeholder="Name"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 4, message: 'Name should be at least 4 characters' },
            })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </div>

        <div className={classes.area}>
          <input
            type="text"
            placeholder="Phone number"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
                message: 'Please enter a valid phone number',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.phoneNumber?.message}</p>
        </div>

        <div className={classes.area}>
          <input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.email?.message}</p>
        </div>

        <div className={classes.area_actions}>
          <button type="submit">Get a discount</button>
        </div>
      </form>
    </div>
  );
}

export default FormReg;


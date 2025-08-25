import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitted = (data) => {
    console.log("data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmitted)}>
      <div className="register-form flex flex-col items-center justify-start gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          {...register("age")}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          {...register("password")}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </div>

      <button type="submit" className="register-btn">
        <span className="text-sm text-white">Register</span>
      </button>
    </form>
  );
};

export default Form;

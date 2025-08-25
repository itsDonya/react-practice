import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  name: "",
  age: null,
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().min(16).max(80).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(), // matches(/[a-z]+/) matches(/\d+/)
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const formSubmitted = (data) => {
    console.log("data: ", data);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmitted)}
      className="flex flex-col items-center justify-start gap-4">
      <div className="register-form flex flex-col items-center justify-start gap-2">
        <input
          type="text"
          name="name"
          className={`${errors?.name && "invalid-input"}`}
          placeholder="Name"
          {...register("name")}
        />
        {errors?.name && (
          <p className="w-full text-start text-xs text-red-500">
            - {errors?.name?.message}
          </p>
        )}

        <input
          type="number"
          name="age"
          className={`${errors?.age && "invalid-input"}`}
          placeholder="Age"
          {...register("age")}
        />
        {errors?.age && (
          <p className="w-full text-start text-xs text-red-500">
            - {errors?.age?.message}
          </p>
        )}

        <input
          type="email"
          name="email"
          className={`${errors?.email && "invalid-input"}`}
          placeholder="Email"
          {...register("email")}
        />
        {errors?.email && (
          <p className="w-full text-start text-xs text-red-500">
            - {errors?.email?.message}
          </p>
        )}

        <input
          type="password"
          name="password"
          className={`${errors?.password && "invalid-input"}`}
          placeholder="Confirm Password"
          {...register("password")}
        />
        {errors?.password && (
          <p className="w-full text-start text-xs text-red-500">
            - {errors?.password?.message}
          </p>
        )}

        <input
          type="password"
          name="confirmPassword"
          className={`${errors?.confirmPassword && "invalid-input"}`}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors?.confirmPassword && (
          <p className="w-full text-start text-xs text-red-500">
            - {errors?.confirmPassword?.message}
          </p>
        )}
      </div>

      <button type="submit" className="register-btn">
        <span className="text-sm text-white">Register</span>
      </button>
    </form>
  );
};

export default Form;

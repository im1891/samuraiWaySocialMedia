import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../reducers/auth-reducer";

export type FormInputType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<FormInputType>();

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("login", {
            required: "Required field",
          })}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <input
          {...register("password", {
            required: "Required field",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          })}
          type="password"
          placeholder={"Password"}
        />
      </div>
      <div>
        <input {...register("rememberMe")} type="checkbox" />
        <span>Remember me</span>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

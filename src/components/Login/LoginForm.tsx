import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  submit: string;
};

type LoginFormPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
export const LoginForm: React.FC<LoginFormPropsType> = ({ login }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<LoginDataType>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    try {
      await login(data.email, data.password, data.rememberMe);
      reset();
    } catch (error) {
      setError("submit", { type: "server", message: error?.toString() });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          style={{ border: errors.email && "2px solid red" }}
          {...register("email", {
            required: "Field is required",
            minLength: {
              value: 4,
              message: "Min login length is 4",
            },
          })}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <input
          style={{ border: errors.password && "2px solid red" }}
          {...register("password", {
            required: "Field is required",
            minLength: {
              value: 4,
              message: "Min password length is 4",
            },
          })}
          type="password"
          placeholder={"Password"}
        />
      </div>
      <div
        style={{
          height: (errors.email || errors.password) && "30px",
          color: "red",
        }}
      >
        {errors.email
          ? errors.email.message
          : errors.password
          ? errors.password.message
          : errors.submit && errors.submit.message}
      </div>
      <div>
        <input {...register("rememberMe")} type="checkbox" />
        <span>Remember me</span>
      </div>
      <div>
        <button disabled={!isValid} onClick={() => clearErrors()}>
          Login
        </button>
      </div>
    </form>
  );
};

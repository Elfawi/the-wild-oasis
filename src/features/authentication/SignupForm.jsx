import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import ShowPasswordEye from "../../ui/ShowPasswordEye";
import styled from "styled-components";
const StyledInput = styled.div`
  position: relative;
  width: 100%;
`;
// Email regex: /\S+@\S+\.\S+/
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          {...register("fullName", { required: "This field is required" })}
          type="text"
          id="fullName"
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          id="email"
          disabled={isLoading}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <StyledInput>
          <Input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            disabled={isLoading}
          />
          <ShowPasswordEye
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            id="password"
          />
        </StyledInput>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <StyledInput>
          <Input
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues("password") || "Passwords need to match",
            })}
            type={showConfirmPassword ? "text" : "password"}
            id="passwordConfirm"
            disabled={isLoading}
          />

          <ShowPasswordEye
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
            id="passwordConfirm"
          />
        </StyledInput>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

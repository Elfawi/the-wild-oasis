import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";
import ShowPasswordEye from "../../ui/ShowPasswordEye";
import styled from "styled-components";
const StyledInput = styled.div`
  position: relative;
  width: 100%;
`;
function UpdatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <StyledInput>
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            disabled={isUpdating}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
          <ShowPasswordEye
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </StyledInput>
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <StyledInput>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            id="passwordConfirm"
            disabled={isUpdating}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Passwords need to match",
            })}
          />
          <ShowPasswordEye
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
        </StyledInput>
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;

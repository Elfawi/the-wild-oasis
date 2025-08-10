import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function UpdatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  function togglePasswordVisibility() {
    setShowPassword((show) => !show);
  }
  function toggleConfrimPasswordVisibility() {
    setShowConfirmPassword((show) => !show);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <>
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
          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "40%",
              top: "10px",
            }}
          >
            {showPassword ? (
              <HiEyeOff size={18} onClick={togglePasswordVisibility} />
            ) : (
              <HiEye size={18} onClick={togglePasswordVisibility} />
            )}
          </span>
        </>
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <>
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
          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "40%",
              top: "22px",
            }}
          >
            {showConfirmPassword ? (
              <HiEyeOff size={18} onClick={toggleConfrimPasswordVisibility} />
            ) : (
              <HiEye size={18} onClick={toggleConfrimPasswordVisibility} />
            )}
          </span>
        </>
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

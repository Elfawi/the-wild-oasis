import { useForm } from "react-hook-form";
import { format } from "date-fns";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useEditBooking } from "./useEditBooking";
import styled from "styled-components";
const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
function BookingForm({ booking, onCloseModal }) {
  const { editBooking, isEditing } = useEditBooking();
  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: {
      ...booking,
      startDate: format(new Date(booking.startDate), "yyyy-MM-dd"),
      endDate: format(new Date(booking.endDate), "yyyy-MM-dd"),
    },
  });
  const { errors } = formState;
  console.log(getValues("status"));
  function onSubmit(data) {
    console.log(data);
    editBooking({
      bookingId: booking.id,
      totalPrice: data.cabinPrice + data.extrasPrice,
      ...data,
    });
    onCloseModal?.();
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow label="Start date" error={errors?.startDate?.message}>
        <Input
          id="startDate"
          type="date"
          {...register("startDate", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="End date" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          {...register("endDate", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Number of nights" error={errors?.numNights?.message}>
        <Input
          type="number"
          id="numNights"
          {...register("numNights", {
            required: "this field is required",
          })}
        />
      </FormRow>
      <FormRow label="Number of guests" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuests"
          {...register("numGuests", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin price" error={errors?.cabinPrice?.message}>
        <Input
          type="number"
          id="cabinPrice"
          {...register("cabinPrice", {
            required: "this field is required",
          })}
        />
      </FormRow>
      <FormRow label="Extras price" error={errors?.extrasPrice?.message}>
        <Input
          type="number"
          id="extrasPrice"
          {...register("extrasPrice", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.totalPrice?.message}>
        {/* <Input
          type="text"
          id="status"
          {...register("status", {
            required: "this field is required",
          })}
        /> */}
        {/* <Select
          id="status"
          value={getValues("status")}
          options={[
            { label: "unconfirmed", value: "unconfirmed" },
            { label: "checked-in", value: "checked-in" },
            { label: "checked-out", value: "checked-out" },
          ]}
          {...register("status", {
            required: "this field is required",
          })}
        /> */}
        <StyledSelect
          id="status"
          {...register("status", { required: "this field is required" })}
        >
          <option value="unconfirmed">unconfirmed</option>
          <option value="checked-in">checked-in</option>
          <option value="checked-out">checked-out</option>
        </StyledSelect>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isEditing}>Edit Booking</Button>
      </FormRow>
    </Form>
  );
}

export default BookingForm;

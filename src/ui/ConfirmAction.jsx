import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmAction = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmAction({
  type,
  title,
  message,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  return (
    <StyledConfirmAction>
      <Heading as="h3">{title}</Heading>
      <p>{message}</p>
      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation={`${type === "delete" ? "danger" : "primary"}`}
          disabled={disabled}
          onClick={onConfirm}
        >
          {type}
        </Button>
      </div>
    </StyledConfirmAction>
  );
}

export default ConfirmAction;

import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  position: relative; // for eye
  padding: 1.2rem 0;
  justify-content: space-between;
  @media (max-width: 800px) {
    grid-template-columns: 10rem 40rem;
    /* grid-template-columns: 24rem 1fr 1.2fr; */
  }
  @media (max-width: 600px) {
    /* grid-template-columns: 10rem 25rem; */
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-start;
    &:has(label) {
      flex-direction: column;
      width: 100%;
    }
  }
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    padding-top: 2.4rem;
    @media (max-width: 600px) {
      justify-content: center;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    @media (max-width: 800px) {
      justify-content: center;
    }
    @media (max-width: 600px) {
      justify-content: flex-start;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;

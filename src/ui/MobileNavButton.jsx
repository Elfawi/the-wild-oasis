import { FaBars } from "react-icons/fa";
import styled from "styled-components";
const StyledMobileNavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  color: var(--color-brand-600);
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    @media (max-width: 800px) {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;
function MobileNavButton({ onClick }) {
  return (
    <StyledMobileNavButton onClick={onClick}>
      <FaBars />
    </StyledMobileNavButton>
  );
}
export default MobileNavButton;

import styled from "styled-components";
import { useMobileNav } from "../context/MobileNavContext";

const StyledMain = styled.main`
  padding: 4rem 4.8rem 6.4rem; // top left & right bottom
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  /* @media (max-width: 1100px) {
    padding: 2rem 2.8rem 3.4rem;
  } */
  @media (max-width: 900px) {
    padding: 1rem 1.8rem 2.4rem;
  }
  @media (max-width: 800px) {
    padding: 1rem;
    padding-bottom: 4rem;
    height: 100vh;
  }
`;
export default function Main({ children }) {
  const { setIsMobileNavActive } = useMobileNav();
  return (
    <StyledMain onClick={() => setIsMobileNavActive(false)}>
      {children}
    </StyledMain>
  );
}

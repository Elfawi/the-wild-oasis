import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 1100px) {
    gap: 2.4rem;
  }
  @media (max-width: 800px) {
    gap: 1.2rem;
  }
`;

export default function Container({ children }) {
  const ref = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { x: -400, opacity: 0, scale: 0.5 },
      { duration: 0.5, x: 0, opacity: 1, scale: 1 }
    );
  }, [ref.current]);
  return <StyledContainer ref={ref}>{children}</StyledContainer>;
}

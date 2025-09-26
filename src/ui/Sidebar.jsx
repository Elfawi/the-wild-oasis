import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useMobileNav } from "../context/MobileNavContext";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 3.2rem;
  @media (max-width: 1100px) {
    ${(props) =>
      props.isMobileNavActive
        ? {
            position: "fixed",
            backgroundColor: "var(--color-grey-0)",
            zIndex: 999,
            top: 0,
            height: "100vh",
            width: "30%",
            gap: "6rem",
            boxShadow: "0 0 8px rgba(0,0,0,0.15)",
          }
        : {
            display: "none",
          }}
  }
  @media (max-width: 800px) {
    ${(props) =>
      props.isMobileNavActive && {
        width: "50%",
      }}
  }
  @media (max-width: 500px) {
    ${(props) =>
      props.isMobileNavActive && {
        width: "60%",
      }}
  }
`;
function Sidebar() {
  const { isMobileNavActive } = useMobileNav();
  const sidebarRef = useRef();
  const sidebarAnimation = gsap.fromTo(
    sidebarRef.current,
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: 0,
      ease: "elastic.out(0.5)",
      duration: 0.5,
      paused: true,
    }
  );
  useGSAP(() => {
    if (isMobileNavActive) {
      sidebarAnimation.play();
    } else {
      sidebarAnimation.reverse();
    }

    return () => sidebarAnimation.kill();
  }, [isMobileNavActive]);

  return (
    <StyledSidebar ref={sidebarRef} isMobileNavActive={isMobileNavActive}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

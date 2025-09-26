import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { MobileNavProvider } from "../context/MobileNavContext";
import Main from "./Main";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-50);
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;
function AppLayout() {
  const ref = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: 400, opacity: 0, scale: 0.2 },
      { duration: 0.5, y: 0, opacity: 1, scale: 1 }
    );
  }, [ref.current]);
  return (
    <StyledAppLayout ref={ref}>
      <MobileNavProvider>
        <Header />
        <Sidebar />
        <Main>
          {/* <Container> for GSAP animation purpose I commented it out  */}
          <Outlet />
          {/* </Container> */}
        </Main>
      </MobileNavProvider>
    </StyledAppLayout>
  );
}

export default AppLayout;

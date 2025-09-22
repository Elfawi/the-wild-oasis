import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const ref = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: -400, opacity: 0, scale: 1.5 },
      { duration: 0.5, y: 0, opacity: 1, scale: 1 }
    );
  }, [ref.current]);
  return (
    <LoginLayout ref={ref}>
      <Logo />
      <Heading as="h4">Login to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;

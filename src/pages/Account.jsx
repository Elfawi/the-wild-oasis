import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styled from "styled-components";
const AccountContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function Account() {
  const ref = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: -400, opacity: 0, scale: 0.5 },
      { duration: 0.5, y: 0, opacity: 1, scale: 1 }
    );
  }, [ref.current]);
  return (
    <AccountContainer ref={ref}>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </AccountContainer>
  );
}

export default Account;

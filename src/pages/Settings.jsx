import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Settings() {
  const ref = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { x: -400, opacity: 0, scale: 0.5 },
      { duration: 0.5, x: 0, opacity: 1, scale: 1 }
    );
  }, [ref.current]);
  return (
    <Row ref={ref}>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;

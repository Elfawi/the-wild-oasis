import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function NewUsers() {
    const ref = useRef();
    useGSAP(()=>{
      gsap.fromTo(ref.current,
        {x:-400,opacity:0 , scale:0.5}
        ,{duration:0.5,x:0,opacity:1,scale:1})
    },[ref.current])
  return (
    <div ref={ref}>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;

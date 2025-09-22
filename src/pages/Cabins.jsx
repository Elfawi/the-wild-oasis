import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Cabins() {
    const ref = useRef();
    useGSAP(()=>{
      gsap.fromTo(ref.current,
        {x:-400,opacity:0 , scale:0.5}
        ,{duration:0.5,x:0,opacity:1,scale:1})
    },[ref.current])
  return (
    <div ref={ref}>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </div>
  );
}

export default Cabins;

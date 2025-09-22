import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Bookings() {
    const ref = useRef();
    useGSAP(()=>{
      gsap.fromTo(ref.current,
        {x:-400,opacity:0 , scale:0.5}
        ,{duration:0.5,x:0,opacity:1,scale:1})
    },[ref.current])
  return (
    <div ref={ref}>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </div>
  );
}

export default Bookings;

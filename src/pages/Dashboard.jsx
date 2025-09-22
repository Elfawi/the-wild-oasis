import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Dashboard() {
  const ref = useRef();
  useGSAP(()=>{
    gsap.fromTo(ref.current,
      {x:-400,opacity:0 , scale:0.5}
      ,{duration:0.5,x:0,opacity:1,scale:1})
  },[ref.current])
  return (
    <div ref={ref}>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;

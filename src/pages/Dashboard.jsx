import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Container from "../ui/Container";
function Dashboard() {
  return (
    <Container>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </Container>
  );
}

export default Dashboard;

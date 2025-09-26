import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import Container from "../ui/Container";
import { getAllUsers } from "../services/apiAuth";
function NewUsers() {
  getAllUsers().then((data) => console.log(data));
  return (
    <Container>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </Container>
  );
}

export default NewUsers;

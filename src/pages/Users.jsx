import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import Container from "../ui/Container";
function NewUsers() {
  return (
    <Container>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </Container>
  );
}

export default NewUsers;

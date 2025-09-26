import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import MobileNavButton from "./MobileNavButton";
import { useMobileNav } from "../context/MobileNavContext";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  @media (max-width: 800px) {
    gap: 2rem;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { setIsMobileNavActive } = useMobileNav();
  return (
    <StyledHeaderMenu>
      <li>
        <MobileNavButton
          onClick={() => setIsMobileNavActive((prev) => !prev)}
        />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

import styled from "styled-components";
import { HiEye, HiEyeOff } from "react-icons/hi";
import PropsType from "prop-types";
const StyledEyeIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  @media (max-width: 900px) {
    top: 7px;
  }
`;
function ShowPasswordEye({ showPassword, setShowPassword, id }) {
  function togglePasswordVisibility() {
    setShowPassword((show) => !show);
  }
  return (
    <StyledEyeIcon id={id}>
      {showPassword ? (
        <HiEyeOff size={18} onClick={togglePasswordVisibility} />
      ) : (
        <HiEye size={18} onClick={togglePasswordVisibility} />
      )}
    </StyledEyeIcon>
  );
}
ShowPasswordEye.propTypes = {
  showPassword: PropsType.bool,
  setShowPassword: PropsType.func,
};
export default ShowPasswordEye;

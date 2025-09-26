import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ConfirmAction from "../../ui/ConfirmAction";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <Modal>
      <Modal.Open opens="logout">
        <ButtonIcon>
          {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name="logout">
        <ConfirmAction
          type="Logout"
          title="Log out"
          message="Are you sure you want to log out?"
          disabled={isLoading}
          onConfirm={() => logout()}
        />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;

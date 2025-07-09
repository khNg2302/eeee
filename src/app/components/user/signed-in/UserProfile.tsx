import { Modal } from "@/components/modals/Standar";
import { useToggle } from "@/hooks/useToggle";

export const UserProfile = () => {
  const { isOpen, handleClose, handleOpen } = useToggle();
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div>User</div>
    </Modal>
  );
};

import { useModalContext } from "@/components/modals/ModalProvider";
import { signOut } from "@/services/signOut";

export const SignOutConfirm = () => {
  const { handleClose: handleCloseConfirmModal } = useModalContext();
  const handleOK = async () => {
    const res = signOut();
    handleCloseConfirmModal();
    console.log(res);
  };
  return (
    <div>
      <p>Are u sure to sign out?</p>
      <div>
        <button onClick={handleCloseConfirmModal}>Cancel</button>
        <button onClick={handleOK}>OK</button>
      </div>
    </div>
  );
};

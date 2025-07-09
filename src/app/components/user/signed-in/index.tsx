import { useToggle } from "@/hooks/useToggle";
import { SignedInDropdown } from "./Dropdown";
import { Modal } from "@/components/modals/Standar";
import { createContext, useContext } from "react";
import { UserProfile } from "./UserProfile";
import { SignOutConfirm } from "./SignOutConfirm";

export const SignedIn = () => {
  const {
    isOpen: isOpenUserProfile,
    handleClose: handleCloseProfile,
    handleOpen: handleOpenProfile,
  } = useToggle();

  const {
    isOpen: isOpenConfirmSignOut,
    handleClose: handleCloseSignOut,
    handleOpen: handleOpenSignOut,
  } = useToggle();
  return (
    <SignedContext.Provider
      value={{
        handleOpenProfile,
        handleOpenSignOut,
      }}
    >
      <SignedInDropdown />
      {isOpenUserProfile && (
        <Modal isOpen={isOpenUserProfile} handleClose={handleCloseProfile}>
          <UserProfile />
        </Modal>
      )}

      {isOpenConfirmSignOut && (
        <Modal isOpen={isOpenConfirmSignOut} handleClose={handleCloseSignOut}>
          <SignOutConfirm />
        </Modal>
      )}
    </SignedContext.Provider>
  );
};

type SignedContext = {
  handleOpenProfile: () => void;
  handleOpenSignOut: () => void;
};

const SignedContext = createContext<SignedContext | null>(null);
export const useSignedInProvider = () => {
  return useContext(SignedContext) as SignedContext;
};

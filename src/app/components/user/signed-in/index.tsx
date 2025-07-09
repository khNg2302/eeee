import { useToggle } from "@/hooks/useToggle";
import { SignedInDropdown } from "./Dropdown";
import { Modal } from "@/components/modals/Standar";
import { createContext, useContext } from "react";
import { UserProfile } from "./UserProfile";

export const SignedIn = () => {
  const { isOpen: isOpenUserProfile, handleClose, handleOpen } = useToggle();
  return (
    <SignedContext.Provider
      value={{
        handleOpenProfile: handleOpen,
      }}
    >
      <SignedInDropdown />
      {isOpenUserProfile && (
        <Modal isOpen={isOpenUserProfile} handleClose={handleClose}>
          <UserProfile />
        </Modal>
      )}
    </SignedContext.Provider>
  );
};

type SignedContext = {
  handleOpenProfile: () => void;
};

const SignedContext = createContext<SignedContext | null>(null);
export const useSignedInProvider = () => {
  return useContext(SignedContext) as SignedContext;
};

import { Modal } from "@/components/modals/Standar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { UserAuthState, useUser } from "@/hooks/forms/useUser";
import { createContext, useContext } from "react";
import { SignedIn } from "./signed-in";

export const User = () => {
  const {
    isOpenAuthForm,
    handleCloseAuthForm,
    handleChangeStateSignUp,
    handleOpenSignIn,
    handleOpenSignUp,
    userAuthState,
  } = useUser();

  if (userAuthState === undefined) return <div>loading...</div>;

  return (
    <UserContext.Provider value={{ handleChangeStateSignUp } as UserContext}>
      {userAuthState === UserAuthState.Signed_In && <SignedIn />}

      {userAuthState !== UserAuthState.Signed_In && (
        <>
          <button onClick={handleOpenSignIn}>Sign In</button>
          <button onClick={handleOpenSignUp}>Sign Up</button>
        </>
      )}

      <Modal isOpen={isOpenAuthForm} handleClose={handleCloseAuthForm}>
        {userAuthState === UserAuthState.Sign_In && <SignIn />}
        {userAuthState === UserAuthState.Sign_Up && <SignUp />}
      </Modal>
    </UserContext.Provider>
  );
};

type UserContext = {
  handleChangeStateSignUp: () => void;
};

const UserContext = createContext<UserContext | null>(null);
export const useUserProvider = () => {
  return useContext(UserContext) as UserContext;
};

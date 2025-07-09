import { UserAuthForm } from "@/components/forms/UserAuth";

import { useSignUp } from "@/hooks/forms/useSignUp";
import * as Yup from "yup";

const userSignUpValidation = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export const SignUp = () => {
  const { onSubmit } = useSignUp();
  return (
    <>
      <UserAuthForm onSubmit={onSubmit} validationSchema={userSignUpValidation}>
        <button type="submit">Sign Up</button>
      </UserAuthForm>
    </>
  );
};

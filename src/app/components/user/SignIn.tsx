import { UserAuthForm } from "@/components/forms/UserAuth";
import { useSignIn } from "@/hooks/forms/useSignIn";
import * as Yup from "yup";
import { useUserProvider } from ".";

const userSignInValidation = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export const SignIn = () => {
  const { onSubmit, propsFields } = useSignIn();
  const { handleChangeStateSignUp } = useUserProvider();
  return (
    <>
      <UserAuthForm
        propsFields={propsFields}
        onSubmit={onSubmit}
        validationSchema={userSignInValidation}
      >
        <button type="submit">Sign In</button>
        <br />
        <button onClick={handleChangeStateSignUp}>
          Do not have account?. Sign up!
        </button>
      </UserAuthForm>
    </>
  );
};

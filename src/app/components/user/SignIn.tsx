import { UserAuthForm } from "@/components/forms/UserAuth";
import { useSignIn } from "@/hooks/forms/useSignIn";
import * as Yup from "yup";
import { useUserProvider } from ".";
import { useModalContext } from "@/components/modals/ModalProvider";
import { FormikHelpers, FormikValues } from "formik";

const userSignInValidation = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export const SignIn = () => {
  const { onSubmit, propsFields, loading } = useSignIn();
  const { handleChangeStateSignUp } = useUserProvider();
  const { handleClose } = useModalContext();
  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    await onSubmit(values, formikHelpers);
    handleClose();
  };
  return (
    <>
      <UserAuthForm
        propsFields={propsFields}
        onSubmit={handleSubmit}
        validationSchema={userSignInValidation}
      >
        <button type="submit">Sign In {loading && "..."}</button>
        <br />
        <button onClick={handleChangeStateSignUp}>
          Do not have account?. Sign up!
        </button>
      </UserAuthForm>
    </>
  );
};

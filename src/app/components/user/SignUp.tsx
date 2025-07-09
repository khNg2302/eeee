import { UserAuthForm } from "@/components/forms/UserAuth";
import { useModalContext } from "@/components/modals/ModalProvider";

import { useSignUp } from "@/hooks/forms/useSignUp";
import { FormikConfig, FormikValues } from "formik";
import * as Yup from "yup";

const userSignUpValidation = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export const SignUp = () => {
  const { onSubmit, loading } = useSignUp();
  const { handleClose } = useModalContext();
  const handleSubmit: FormikConfig<FormikValues>["onSubmit"] = async (
    values,
    formikHelpers
  ) => {
    await onSubmit(values, formikHelpers);
    handleClose();
  };
  return (
    <>
      <UserAuthForm
        onSubmit={handleSubmit}
        validationSchema={userSignUpValidation}
      >
        <button type="submit">Sign Up {loading && "..."}</button>
      </UserAuthForm>
    </>
  );
};

import {
  Form as FormFormikLib,
  Formik,
  FormikConfig,
  FormikValues,
} from "formik";
import { ReactNode } from "react";

export type FormI = FormikConfig<FormikValues> & {
  children: ReactNode;
};

export const Form = ({ children, ...props }: FormI) => {
  return (
    <Formik {...props}>
      <FormFormikLib>{children}</FormFormikLib>
    </Formik>
  );
};

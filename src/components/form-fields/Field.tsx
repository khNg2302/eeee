import { ErrorMessage } from "formik";
import { ReactNode } from "react";

export interface FormFieldI {
  children: ReactNode;
  label: string;
  name: string;
}

export const FormField = ({ children, label, name }: FormFieldI) => {
  return (
    <div>
      <label>{label}</label>
      <div>{children}</div>
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
};

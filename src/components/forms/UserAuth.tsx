import { AuthInfo } from "@/type/user";
import { Form, FormI } from "./Form";
import { TextInput } from "../form-fields/Text";
import { FormInstance } from "@/type/form";

type UserAuthForm = Omit<FormI, "initialValues"> & FormInstance<string>;

const initialUserAuthValues: AuthInfo = {
  email: "",
  password: "",
};

export const UserAuthForm = ({
  propsFields = {},
  children,
  ...props
}: UserAuthForm) => {
  return (
    <Form {...props} initialValues={initialUserAuthValues}>
      <TextInput
        label="Email"
        name="email"
        onChange={propsFields["email"]?.onChange}
      ></TextInput>
      <TextInput label="Password" name="password" type="password"></TextInput>
      {children}
    </Form>
  );
};

import { FormField } from "./Field";
import { FormInput } from "@/type/formInput";
import { Field } from "formik";
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export const TextInput = ({
  label,
  name,
  onChange,
  ...props
}: FormInput<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  string
>) => {
  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    onChangeDefault: InputHTMLAttributes<HTMLInputElement>["onChange"]
  ) => {
    if (onChangeDefault) onChangeDefault(e);
    if (onChange) {
      await onChange(e.target.value);
    }
  };
  return (
    <FormField label={label} name={name}>
      <Field name={name} {...props}>
        {({ field }: { field: InputHTMLAttributes<HTMLInputElement> }) => {
          return (
            <input
              {...field}
              onChange={(e) => handleChange(e, field.onChange)}
            />
          );
        }}
      </Field>
    </FormField>
  );
};

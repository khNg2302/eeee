import { FormFieldI } from "@/components/form-fields/Field";
import { FieldAttributes } from "formik";

export type FormInput<InputProps, InputType> = Omit<FormFieldI, 'children'> & {
    onChange?: OnChangeInput<InputType>
} & FieldAttributes<InputProps>

export type OnChangeInput<T> = (value: T) => Promise<T> | T
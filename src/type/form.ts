import { OnChangeInput } from "./formInput"

export type FormInstance<T> = {
    propsFields?: {
        [fieldName: string]: PropsField<T>
    }
}

export type PropsField<T> = {
    onChange: OnChangeInput<T>
}
import { emailAndPasswordSignIn } from "@/services/signIn"
import { OnChangeInput } from "@/type/formInput"
import { AuthInfo } from "@/type/user"
import { debounce } from "@/utils/debounce"
import { FormikConfig, FormikValues } from "formik"

export const useSignIn = () => {
    const debounceFunc = debounce((value) => {
        console.log(value)
    }, 300)
    const checkUsernameExisted = (value: string) => {
        debounceFunc(value)
        return value
    }
    const onSubmit: FormikConfig<FormikValues>['onSubmit'] = async (values: FormikValues) => {
        const response = await emailAndPasswordSignIn(values as AuthInfo)
        return response
    }
    const propsFields = {
        'email': {
            onChange: checkUsernameExisted as OnChangeInput<string>
        }
    }
    return { propsFields, onSubmit }
}
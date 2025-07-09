
import { signUp } from "@/services/signUp"
import { useRequest } from "../useRequest"
import { AuthInfo } from "@/type/user"
import { FormikConfig, FormikValues } from "formik"


export const useSignUp = () => {
    const { loading, request } = useRequest()
    const onSubmit: FormikConfig<FormikValues>['onSubmit'] = async (values) => {
        const { email, password } = values as AuthInfo
        const res = await request({
            service: async () => signUp({ email, password })
        })
        return res
    }

    return { onSubmit, loading }
}
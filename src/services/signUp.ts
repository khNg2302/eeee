import { apiFailedResponse, apiSuccessResponse } from "@/lib/apiResponse";
import { auth } from "@/lib/firebase";
import { AuthInfo } from "@/type/user";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const signUp = async ({ email, password }: AuthInfo) => {

    console.log(email, password, 'pp')
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            return apiSuccessResponse({ message: 'Signed up', code: '200', data: user })
        })
        .catch((error) => {
            return apiFailedResponse({ message: error.message, code: error.code, data: null })
            // ..
        });
}
import { apiFailedResponse } from "@/lib/apiResponse";
import { app } from "@/lib/firebase";
import { AuthInfo } from "@/type/user";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export const signIn = () => {

}

export const emailAndPasswordSignIn = async ({ email, password }: AuthInfo) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            return userCredential
            // ...
        })
        .catch((error) => {
            return apiFailedResponse<null>({ data: null, message: error.message, code: error.code })
        });
}



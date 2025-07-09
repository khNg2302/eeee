import { apiSuccessResponse } from "@/lib/apiResponse";
import { auth } from "@/lib/firebase";
import { signOut as signOutFirebase } from "firebase/auth";

export const signOut = () => {
    signOutFirebase(auth).then(() => {
        return apiSuccessResponse({ message: 'Signed out', code: '200', data: null })
    }).catch((error) => {
        console.log(error)
        // An error happened.
    });

}
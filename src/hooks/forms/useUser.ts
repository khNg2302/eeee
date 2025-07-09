import { useEffect, useState } from "react"
import { useToggle } from "../useToggle"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();


export enum UserAuthState {
    Signed_In = "Signed_In",
    Sign_In = "Sign_In",
    Sign_Up = "Sign_up"
}

export const useUser = () => {
    const { isOpen: isOpenAuthForm, handleClose: handleCloseAuthFormModal, handleOpen: handleOpenAuthForm } = useToggle()
    const [userAuthState, setUserAuthState] = useState<UserAuthState>()

    const handleOpenSignIn = () => {
        handleOpenAuthForm()
        setUserAuthState(UserAuthState.Sign_In)
    }

    const handleOpenSignUp = () => {
        handleOpenAuthForm()
        setUserAuthState(UserAuthState.Sign_Up)
    }

    const handleCloseAuthForm = () => {
        handleCloseAuthFormModal()
        setUserAuthState(undefined)
    }

    const handleChangeStateSignUp = () => {
        setUserAuthState(UserAuthState.Sign_Up)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log(user)
                setUserAuthState(UserAuthState.Signed_In)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    return { isOpenAuthForm, handleCloseAuthForm, handleOpenSignIn, handleOpenSignUp, handleChangeStateSignUp, userAuthState }
}
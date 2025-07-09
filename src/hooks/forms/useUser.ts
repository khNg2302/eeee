import { useEffect, useState } from "react"
import { useToggle } from "../useToggle"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();


export enum UserAuthState {
    Signed_In = "Signed_In",
    Un_Auth = "Un_Auth",
    Sign_In = "Sign_In",
    Sign_Up = "Sign_up"
}

export const useUser = () => {
    const { isOpen: isOpenAuthForm, handleClose: handleCloseAuthFormModal, handleOpen: handleOpenAuthForm } = useToggle()
    const [userAuthState, setUserAuthState] = useState<UserAuthState>()
    const [user, setUser] = useState<unknown>()

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
    }

    const handleChangeStateSignUp = () => {
        setUserAuthState(UserAuthState.Sign_Up)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user)
                // ...
            } else {
                setUser(null)
                // User is signed out
                // ...
            }
        });

    }, [])

    useEffect(() => {
        if (!isOpenAuthForm && user !== undefined) {
            setUserAuthState(user ? UserAuthState.Signed_In : UserAuthState.Un_Auth)
        }
    }, [isOpenAuthForm, user])

    return { isOpenAuthForm, user, handleCloseAuthForm, handleOpenSignIn, handleOpenSignUp, handleChangeStateSignUp, userAuthState }
}
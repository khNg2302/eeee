import { useState } from "react"



export const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }
    return { isOpen, handleOpen, handleClose }
}
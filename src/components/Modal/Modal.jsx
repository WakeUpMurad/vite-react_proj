import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'
import cl from './Modal.module.css'

export default function Modal({children, open}) {
    const dialog = useRef()

    useEffect(() => {
        if (open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])

    return createPortal(
        <dialog ref={dialog} className={cl.dialog}>{children}</dialog>,
        document.getElementById('modal')
    )
}
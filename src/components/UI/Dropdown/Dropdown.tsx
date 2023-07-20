import React, { useEffect, useState } from "react";
import styles from './dropdown.module.css'

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
const NOOP = () => { }


export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
    const [isOpened, setIsOpened] = useState(isOpen);
    useEffect(() => setIsOpened(isOpen), [isOpen])
    useEffect(()=> isOpened ? onOpen() : onClose(), [isOpened, onClose, onOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsOpened(!isOpened)
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>

            {isOpened && (<div style={{ 'fontSize': '20px' }} className={styles.listContainer}>
                <div onClick={() => setIsOpened(false)} className={styles.list}>
                    {children}
                </div>
            </div>)
            }

        </div>
    )
}
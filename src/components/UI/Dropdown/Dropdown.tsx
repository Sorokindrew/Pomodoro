import React, { useEffect, useState } from "react";
import styles from './dropdown.module.css'

type Style = {
    top: number,
    left: number
}

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    style?: Style;
}
const NOOP = () => { }


export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP, style }: IDropdownProps) {
    // const ref = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(isOpen);
    useEffect(() => setIsOpened(isOpen), [isOpen])
    useEffect(() => isOpened ? onOpen() : onClose(), [isOpened, onClose, onOpen])
    // useEffect(() => {
    //     function handleClick(e: MouseEvent) {
    //         console.log('click');
    //     }
    //     document.addEventListener('click', handleClick);

    //     return () => { document.removeEventListener('click', handleClick) };
    // }, [])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsOpened(!isOpened)
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen} className={styles.button}>
                {button}
            </div>

            {isOpened && (<div className={styles.listContainer} >
                <div style={style} onClick={() => setIsOpened(false)} className={styles.list}>
                    {children}
                </div>
            </div>)
            }
        </div>
    )
}
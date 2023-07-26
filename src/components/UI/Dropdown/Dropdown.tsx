import React, { useEffect, useRef, useState } from "react";
import styles from './dropdown.module.css'
import ReactDOM from "react-dom";

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
}
const NOOP = () => { }


export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(isOpen);
    const [clickPosition, setClickPosition] = useState<Style>({
        top: 0,
        left: 0
    })
    useEffect(() => setIsOpened(isOpen), [isOpen])
    useEffect(() => isOpened ? onOpen() : onClose(), [isOpened])
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (e.target instanceof Node && !ref.current?.contains(e.target)) {
                setIsOpened(false);
            }
        }
        document.addEventListener('click', handleClick);

        return () => { document.removeEventListener('click', handleClick) };
    }, [])

    const node = document.querySelector('#modal_root');
    if (!node) return null;


    const handleOpen = (e: React.MouseEvent) => {
        if (isOpen === undefined) {
            setIsOpened(!isOpened);
            let top = e.pageY + 20;
            let left = e.pageX - 82.5;
            setClickPosition({
                top: top,
                left: left
            })
        }
    }



    return (
        <div className={styles.container} ref={ref}>
            <div onClick={handleOpen} className={styles.button}>
                {button}
            </div>

            {isOpened && ReactDOM.createPortal(
                <div style={{ top: clickPosition.top, left: clickPosition.left }}
                    onClick={() => setIsOpened(false)}
                    className={styles.list}
                >
                    {children}
                </div>, node
            )
            }
        </div>
    )
}
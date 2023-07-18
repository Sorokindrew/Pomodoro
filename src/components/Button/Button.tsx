import React, { FormEvent } from 'react'
import styles from './button.module.css'

interface IButtonProps {
    text: string
    onClick: (e: FormEvent) => void
}



export function Button({text, onClick}: IButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}
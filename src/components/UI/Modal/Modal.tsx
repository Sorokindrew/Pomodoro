import React from 'react';
import styles from './modal.module.css';

interface IModalProps {
    children?: React.ReactNode;
}



export function Modal({ children }: IModalProps) {
    return (
        <div className={styles.modal_container}>
            {children}
        </div>
    )
}
import React from 'react';
import styles from './pmodoroQuantity.module.css';

interface IPomodoroQuantityProps {
    quantity: number
}


export function PomodoroQuantity({quantity}: IPomodoroQuantityProps) {
    return (
        <div className={styles.pomodoro}>
            {quantity}
        </div>
    )
}
import React from 'react';
import styles from './pomodoroQuantity.module.css';

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
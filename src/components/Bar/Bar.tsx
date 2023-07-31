import React from "react";
import styles from './bar.module.css';

interface IBarProps {
    height: number;
}

export function Bar({height}: IBarProps) {
    return (
        <div className={styles.bar} style={{height: height}}></div>
    )
}
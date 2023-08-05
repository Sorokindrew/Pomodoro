import React from "react";
import styles from './bar.module.css';
import classNames from "classnames";

interface IBarProps {
    height: number;
    onClick?: () => void;
    active?: boolean;
}

export function Bar({ height, onClick, active }: IBarProps) {
    if (active) {
        return (
            <div className={classNames(styles.bar, styles.active)} style={{ height: height }} onClick={onClick}></div>
        )
    }
    return (
        <div className={styles.bar} style={{ height: height }} onClick={onClick}></div>
    )
}
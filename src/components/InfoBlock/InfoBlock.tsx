import React from "react";
import classNames from "classnames";
import styles from './infoBlock.module.css';

interface IInfoBlockProps {
    className: string;
    value: number;
}


export function InfoBlock({ className, value }: IInfoBlockProps) {
    const classes = classNames(
        styles.container,
        styles[className]
    )
    let title = 'Фокус';
    let symbol = '%';

    switch (className) {
        case 'pause':
            title = 'Время на паузе';
            symbol = 'm'
            break;
        case 'stop':
            title = 'Остановки';
            symbol = ''
            break;
    }

    return (
        <div className={classes}>
            <p className={styles.title}>{title}</p>
            <p className={styles.figures}>{value + symbol}</p>
        </div>
    )
}
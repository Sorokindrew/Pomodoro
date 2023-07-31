import React from "react";
import styles from './diagram.module.css';
import { Bar } from "../Bar";

interface IDiagramProps {
    report: number[];
}

export function Diagram({report}: IDiagramProps) {
    return (
        <div className={styles.diagram}>
            <div className={styles.screen}>
                <div className={styles.bars}>
                    {report.map(el=>{
                        return (
                            <Bar height={el}/>
                        )
                    })}
                     
                </div>
            </div>
            <div className={styles.day_of_week}>
                <p className={styles.day_name}>Пн</p>
                <p className={styles.day_name}>Вт</p>
                <p className={styles.day_name}>Ср</p>
                <p className={styles.day_name}>Чт</p>
                <p className={styles.day_name}>Пт</p>
                <p className={styles.day_name}>Сб</p>
                <p className={styles.day_name}>Вс</p>
            </div>
        </div>
    )
}
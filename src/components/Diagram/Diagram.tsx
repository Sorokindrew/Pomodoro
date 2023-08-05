import React, { useState } from "react";
import styles from './diagram.module.css';
import { TimeLine } from "./TimeLine";
import { WeekDiagram } from "./WeekDiagram";
import classNames from "classnames";

export type DailyReport = {
    [key: string]: number
}

interface IDiagramProps {
    report: DailyReport[]
}

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export function Diagram({ report }: IDiagramProps) {
    const [isActive, setIsActive] = useState([false, false, false, false, false, false, false]);

    let max = 0;
    report.forEach(el => {
        if (Object.values(el)[0] > max) {
            max = Object.values(el)[0]
        }
    })


    const barHandleClick = (index: number) => {
        let barState = [...isActive];
        for (let i = 0; i < 7; i++) {
            if (i === index) barState[i] = true
            else barState[i] = false
        }
        setIsActive(barState);
    }

    return (
        <div className={styles.diagram}>
            <div className={styles.screen}>
                <WeekDiagram max={max} report={report} active={isActive} onClick={barHandleClick} />
                <TimeLine max={max} />
            </div>
            <div className={styles.day_of_week}>
                {weekDays.map(el => {
                    if (weekDays.indexOf(el) === isActive.indexOf(true)){
                        return (
                            <p className={classNames(styles.day_name, styles.active_day)}>{el}</p>
                        )
                    }
                    return (
                        <p className={styles.day_name} key={el}>{el}</p>
                    )
                })
                }
            </div>
        </div>
    )
}
import React from "react";
import styles from './timeLine.module.css';
import { timeLineArray } from "../../../utils/timeLinesArray";

interface ITimeLineProps {
    max: number;
}


export function TimeLine({max}: ITimeLineProps) {
    const times = timeLineArray(max);
    
    return (
        <div className={styles.timelines}>
            {
                times.map(el => {
                    return (
                        <div className={styles.time_line} key={times.indexOf(el)}>{el}</div>
                    )
                })
            }
        </div>
    )
}
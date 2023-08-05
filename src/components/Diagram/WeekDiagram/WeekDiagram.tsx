import React from "react";
import styles from './weekDiagram.module.css';
import { DailyReport } from "../Diagram";
import { Bar } from "../Bar";

interface IWeekDiagramProps {
    report: DailyReport[];
    max: number;
    onClick: (index: number) => void;
    active: boolean[];
}


export function WeekDiagram({ report, onClick, max, active }: IWeekDiagramProps) {
    const intervalQuantity = Math.floor(max / 25) + 1;
    const diagramHeight = 420;

    return (
        <div className={styles.bars}>
            {report.map(el => {
                return (
                    <Bar key={Object.keys(el)[0]}
                        height={diagramHeight * (Object.values(el)[0] / 25 / intervalQuantity)}
                        onClick={() => onClick(report.indexOf(el))}
                        active={active[report.indexOf(el)]} />
                )
            })
            }
        </div>
    )
}
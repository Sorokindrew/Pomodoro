import React from 'react';
import styles from './statistic.module.css';
import { InfoBlock } from '../InfoBlock';
import { Diagram } from '../Diagram';
import { WeekDrop } from '../WeekDrop/WeekDrop';
import { Aside } from '../Aside';



export function Statistic() {

    return (
        <div className={styles.statistic}>
            <div className={styles.upper}>
                <div className={styles.upper_wrapper}>
                    <h2 className={styles.title}>Ваша активность</h2>
                    <WeekDrop />
                </div>
            </div>
            <Aside />
            <Diagram report={[
                { 'Пн': 50 },
                { 'Вт': 25 },
                { 'Ср': 100 },
                { 'Чт': 80 },
                { 'Пт': 50 },
                { 'Сб': 10 },
                { 'Вс': 5 }
            ]} />
            <div className={styles.info}>
                <InfoBlock className='focus' value={35} />
                <InfoBlock className='pause' value={9} />
                <InfoBlock className='stop' value={3} />
            </div>
        </div>
    )
}
import React from 'react';
import styles from './statistic.module.css';
import { InfoBlock } from '../InfoBlock';
import { Diagram } from '../Diagram';
import { BigPomodoro } from '../Icons';
import { WeekDrop } from '../WeekDrop/WeekDrop';



export function Statistic() {
    
    return (
        <div className={styles.statistic}>
            <div className={styles.upper}>
                <div className={styles.upper_wrapper}>
                    <h2 className={styles.title}>Ваша активность</h2>
                    <WeekDrop />
                </div>
            </div>
            <div className={styles.aside}>
                <div className={styles.descr}>
                    <div className={styles.day_descr}>Понедельник</div>
                    <div className={styles.descr_text}>
                        Вы работали над задачами в течение
                        <span className={styles.descr_time}> 51 минуты</span>
                    </div>
                </div>
                <div className={styles.pomo}>
                    <div className={styles.pomo_number}>
                        <BigPomodoro />
                    </div>
                    <div className={styles.pomo_descr}>
                        2 помидора
                    </div>
                </div>
            </div>
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
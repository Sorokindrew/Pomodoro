import React from "react";
import styles from './aside.module.css';
import { BigPomodoro } from "../Icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { days } from "../Diagram";

export function Aside() {
    const activeDay = useSelector<RootState, string>(state=> state.statisticState.activeDay);
    const activeWeek = useSelector<RootState, string>(state=> state.statisticState.activeWeek);
    const statistic = useSelector<RootState, {thisWeek: number[], prevWeek: number[], twoWeeksAgo: number[]}>(state => state.statisticState.weeksStatistic);
    let selectedWeekStatistic: number[] = [];
    switch (activeWeek) {
        case 'Эта неделя':
            selectedWeekStatistic = statistic.thisWeek;
            break;
        case 'Прошедшая неделя':
            selectedWeekStatistic = statistic.prevWeek;
            break;
        case 'Две недели назад':
            selectedWeekStatistic = statistic.twoWeeksAgo;
            break;
    }

    const value = selectedWeekStatistic[days.indexOf(activeDay)]
    
    return (
        <div className={styles.aside}>
        <div className={styles.descr}>
            <div className={styles.day_descr}>{activeDay}</div>
            <div className={styles.descr_text}>
                Вы работали над задачами в течение
                <span className={styles.descr_time}> {value} минуты</span>
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
    )
}
import React, { useState } from 'react';
import styles from './homeRight.module.css';
import { Button } from '../../UI/Button';
import { PlusButtonIcon } from '../../Icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { timeToTimer } from '../../../utils/timeSplit';
import { RootState, Task } from '../../../store/store';
import { complete_pomodoro, increase_pomodoro } from '../../../store/task/actions';
import classNames from 'classnames';
import { decrease_timer, pause_timer, reset_timer, run_timer } from '../../../store/timer/action';


export function HomeRight() {
    const dispatch = useDispatch();
    const task = useSelector<RootState, Task[]>(state => state.task.taskList)
    let taskName = '';
    let pomodoro = 0;

    if (task[0] !== undefined) {
        taskName = task[0].taskName
        pomodoro = task[0].completedPomodoro + 1
    }
    let taskTimerBgClass = classNames(styles.task_timer);
    const isTask = useSelector<RootState, boolean>(state => state.timer.isTask);
    const isTaskRunned = useSelector<RootState, boolean>(state => state.timer.isStarted);
    const isTimerRunned = useSelector<RootState, boolean>(state => state.timer.isRunned);

    const handleClick = () => {
        dispatch(increase_pomodoro(task[0].id))
    }

    const time = useSelector<RootState, number>(state => state.timer.time)
    const [runnedInterval, setRunnedInterval] = useState(setInterval(() => { }, 1000))
    const runTimer = () => dispatch(decrease_timer())
    const handleStartPause = () => {
        if (!isTimerRunned) {
            dispatch(run_timer())
            const interval = setInterval(runTimer, 1000);
            setRunnedInterval(interval);
        }
        else {
            dispatch(pause_timer())
            const interval = runnedInterval;
            clearInterval(interval);
        }
    }
    const handleStop = () => {
        if (isTaskRunned === true && isTimerRunned === false) {
            dispatch(complete_pomodoro());
        }
        dispatch(reset_timer());
        const interval = runnedInterval;
        clearInterval(interval);
    }


    // Check if timer runned on Task or Break
    if (isTask && isTaskRunned) {
        taskTimerBgClass = classNames(styles.task_timer, styles.task_timer_bg)
    }

    let startPauseText = 'Старт';
    let stopText = 'Стоп';
    let stopButtonClasses = styles.inactive_button;

    if (isTaskRunned === true && isTimerRunned === true) {
        startPauseText = 'Пауза';
        stopButtonClasses = classNames(styles.inactive_button, styles.stop);
    }
    else if (isTaskRunned === true && isTimerRunned === false) {
        startPauseText = 'Продолжить';
        stopText = 'Сделано';
        stopButtonClasses = classNames(styles.inactive_button, styles.stop);
    }

    return (
        <div className={styles.content__right}>
            <div className={taskTimerBgClass}>
                <p className={styles.task_name}>{taskName}</p>
                {taskName && <p className={styles.task_duration}>Помидор <span>{pomodoro}</span></p>}
            </div>
            <p className={styles.timer__time}>
                <span>{timeToTimer(time)}</span>
                <button className={styles.add_pomodoro} type="button" onClick={handleClick}><PlusButtonIcon /></button>
            </p>

            {taskName && <p className={styles.task_descr}>
                <span>Задача 1 - </span>
                {taskName}
            </p>}
            <div className={styles.button_block}>
                <Button className={styles.add_button} text={startPauseText} onClick={handleStartPause} />
                <Button className={stopButtonClasses} text={stopText} onClick={handleStop} />
            </div>
        </div>
    )

}
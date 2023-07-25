import React, { useEffect, useState } from 'react';
import styles from './homeRight.module.css';
import { Button } from '../../UI/Button';
import { PlusButtonIcon } from '../../Icons';
import { useDispatch } from 'react-redux';
import { increase_pomodoro } from '../../../store/actions';
import { useSelector } from 'react-redux';
import { RootState, Task } from '../../../store/reducer';

interface IHomeRightProps {
    taskName: string
    pomodoros: number
}

export function HomeRight({ taskName, pomodoros }: IHomeRightProps) {
    const [pomodor, setPomodor] = useState(pomodoros)
    useEffect(() => setPomodor(pomodoros), [pomodoros])
    const dispatch = useDispatch()
    const tasks = useSelector<RootState, Task[]>(state => state.taskList)

    const handleClick = () => {
        dispatch(increase_pomodoro(tasks[0].id))
    }

    const time = 25 * pomodor
    return (
        <div className={styles.content__right}>
            <div className={styles.task_timer}>
                <p className={styles.task_name}>{taskName}</p>
                <p className={styles.task_duration}>Помидор <span>{pomodor}</span></p>
            </div>
            <p className={styles.timer__time}>
                <span>{time}:00</span>
                <button className={styles.add_pomodoro} type="button" onClick={handleClick}><PlusButtonIcon /></button>
            </p>

            <p className={styles.task_descr}>
                <span>Задача 1 - </span>
                {taskName}
            </p>
            <div className={styles.button_block}>
                <Button className={styles.add_button} text='Старт' />
                <Button className={styles.inactive_button} text='Стоп' />
            </div>
        </div>
    )

}
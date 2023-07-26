import React from 'react';
import styles from './home.module.css';
import { HomeLeft } from './HomeLeft';
import { HomeRight } from './HomeRight';
import { useSelector } from 'react-redux';
import { RootState, Task } from '../../store/reducer';



export function Home() {
    const task = useSelector<RootState, Task[]>(state => state.taskList)
    let taskName = '';
    let pomodoros = 0;

    if (task[0] !== undefined) {
        taskName = task[0].taskName
        pomodoros = task[0].taskDuration
    }

    return (
        <div className={styles.container}>
            <HomeLeft />
            <HomeRight taskName={taskName} pomodoros={pomodoros} />
        </div>
    )
}
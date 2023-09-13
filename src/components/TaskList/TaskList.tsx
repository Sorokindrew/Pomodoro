import React from 'react';
import { TaskItem } from './TaskItem';
import styles from './taskList.module.css';
import { Task } from '../../store/store';

interface ITaskListProps {
    list: Task[]
}



export function TaskList({ list }: ITaskListProps) {

    return (
        <ul className={styles.list}>
            {list.map(el => {
                return (
                    <li key={el.id} className={styles.listItem}>
                        <TaskItem text={el.taskName} pomodoro={el.taskDuration} id={el.id}/>
                    </li>
                )
            })}
        </ul>
    )
}
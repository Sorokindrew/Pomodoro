import React from 'react';
import styles from './homeLeft.module.css';
import { Instruction } from './Instruction';
import { useSelector } from 'react-redux';
import { AddTaskForm } from './AddTaskForm';
import { TaskList } from '../../TaskList';
import { RootState, Task } from '../../../store/store';

export function HomeLeft() {
    const tasks = useSelector<RootState, Task[]>(state => state.task.taskList)
    
    
    return (
        <div className={styles.content__left}>
            <Instruction />
            <AddTaskForm />
            <TaskList list={tasks}/>
        </div>
    )

}
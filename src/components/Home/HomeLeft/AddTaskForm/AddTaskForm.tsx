import React, { ChangeEvent, FormEvent } from 'react'
import styles from './addTaskForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../UI/Button'
import { RootState } from '../../../../store/store'
import { updateInputText, addTask } from '../../../../store/task/actions'


export function AddTaskForm() {

    const inputText = useSelector<RootState, string>(state => state.task.inputText)
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateInputText(e.target.value))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(updateInputText(''))
        dispatch(addTask(inputText))
    }
    return (
        <form>
            <input type="text" 
            onChange={handleChange} 
            value={inputText} 
            className={styles.input}
            placeholder='Название задачи'/>
            <Button text={'Добавить'} className={styles.add_button} onClick={handleSubmit} />
        </form>
    )
}
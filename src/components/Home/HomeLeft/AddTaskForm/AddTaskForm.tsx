import React, { ChangeEvent, FormEvent } from 'react'
import styles from './addTaskForm.module.css'
import { addTask, updateInputText } from '../../../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/reducer'
import { Button } from '../../../UI/Button'


export function AddTaskForm() {

    const inputText = useSelector<RootState, string>(state => state.inputText)
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
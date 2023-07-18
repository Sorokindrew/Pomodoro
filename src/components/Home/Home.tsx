import React, { ChangeEvent, FormEvent } from 'react'
import styles from './home.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducer'
import { Button } from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addTask, updateInputText } from '../../store/actions'



export function Home() {
const inputText = useSelector<RootState, string>(state => state.inputText)
const dispatch = useDispatch()
const tasks = useSelector<RootState,string[]>(state=>state.taskList)

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInputText(e.target.value))
}

const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addTask(inputText))
    dispatch(updateInputText(''))
}

    return (
        <div className={styles.home}>
           Home screen
           <form>
           <input type="text" onChange={handleChange} value={inputText}/>
           <Button text={'Добавить задачу'} onClick={handleSubmit}/>
           </form>
           <ul>
            {tasks.map(el=> {
                return (
                    <li>{el}</li>
                )
            })}
           </ul>
           
          
           
        </div>
    )
}
import React, { useState } from 'react'
import { DropdownIcon, IncreaseIcon, DecreaseIcon, EditIcon, DeleteIcon } from '../../Icons'
import { Dropdown } from '../../UI/Dropdown';
import styles from './taskItem.module.css';
import { PomodoroQuantity } from './PomodoroQuantity';
import { useDispatch } from 'react-redux';
import { decrease_pomodoro, deleteTask, increase_pomodoro } from '../../../store/actions';
import { Modal } from '../../UI/Modal';
import { DeleteConfirmation } from '../../DeleteConfirmation';

interface ITaskItemProps {
    id: number
    text: string
    pomodoro: number
}



export function TaskItem({ text, pomodoro, id }: ITaskItemProps) {

    const [isModalOpened, setIsModalOpened] = useState(false);
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increase_pomodoro(id))
    }

    const handleDecrease = () => {
        dispatch(decrease_pomodoro(id))
    }

    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    const handleCancel = () => {
        setIsModalOpened(false);
    }

    return (
        <>
            <div className={styles.task}>
                <PomodoroQuantity quantity={pomodoro} />
                <div className={styles.task_desc}>
                    <span> {text} </span>
                </div>
                <Dropdown
                    button={<button className={styles.button}><DropdownIcon /></button>} >
                    <ul className={styles.dropdownList}>
                        <li className={styles.dropdownItem} onClick={handleIncrease}>
                            <IncreaseIcon />
                            <span className={styles.itemText}>Увеличить</span>
                        </li>
                        <li className={styles.dropdownItem} onClick={handleDecrease}>
                            <DecreaseIcon />
                            <span className={styles.itemText}>Уменьшить</span>
                        </li>
                        <li className={styles.dropdownItem}>
                            <EditIcon />
                            <span className={styles.itemText}>Редактировать</span>
                        </li>
                        <li className={styles.dropdownItem} onClick={()=>setIsModalOpened(true)}>
                            <DeleteIcon />
                            <span className={styles.itemText}>Удалить</span>
                        </li>
                    </ul>
                </Dropdown>
            </div>
            {isModalOpened && <Modal>
                <DeleteConfirmation handleDelete={handleDelete} handleCancel={handleCancel} />
            </Modal>}
        </>
    )
}
import React from 'react'
import styles from './statistic.module.css'
import { Button } from '../Button/Button'
// import { useDispatch } from 'react-redux'
import { Dropdown } from '../UI/Dropdown'



export function Statistic() {
    // const dispatch = useDispatch()

    const handleClick = () => {
        console.log('click');
    }

    return (
        <div className={styles.statistic}>
            <p>Statistic screen</p>
            <Button text={'Старт'} onClick={handleClick} />
            <Dropdown
                button={<button>Drop</button>}
                onOpen={() => console.log('opened')}
                onClose={() => console.log('closed')}>
                <ul>
                    <li>
                        1
                    </li>
                </ul>
            </Dropdown>
        </div>
    )
}
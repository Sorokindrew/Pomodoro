import React, { useEffect, useState } from 'react';
import styles from './layout.module.css';
import { Header } from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Content } from '../Content/Content';
import { useDispatch } from 'react-redux';
import { init_app } from '../../store/task/actions';



export function Layout() {
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(init_app());
        setIsMounted(true);
    }, [dispatch]);


    return (
        <>
            {isMounted && (
                <BrowserRouter>
                    <div className={styles.container}>
                        <Header />
                        <Content />
                    </div>
                </BrowserRouter>
            )}
        </>
    )
}
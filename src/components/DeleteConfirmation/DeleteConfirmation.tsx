import React from "react";
import styles from './deleteConfirmation.module.css';
import { CloseModal } from "../Icons";

interface IDeleteConfirmationProps {
    handleDelete: ()=>void;
    handleCancel: ()=>void;
}


export function DeleteConfirmation({handleDelete, handleCancel}: IDeleteConfirmationProps) {
    return (
        <div className={styles.modal_window}>
            <button className={styles.close_button} onClick={handleCancel}><CloseModal /></button>
            <p className={styles.text}>Удалить задачу?</p>
            <button className={styles.delete_button} onClick={handleDelete}>Удалить</button>
            <button className={styles.cancel} onClick={handleCancel}>Отменить</button>
        </div>
    )
}
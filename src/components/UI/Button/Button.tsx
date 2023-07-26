import React, { FormEvent } from 'react';

interface IButtonProps {
    text: string;
    className: string;
    onClick?: (e: FormEvent) => void;
}



export function Button({text, className, onClick}: IButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}
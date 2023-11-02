import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './Login.module.css';

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const active = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: active
        }
    })
    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.type}>{props.label}</label>
            <input
                type={props.type}
                id={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={inputRef}
            />
        </div>
    );
});

export default Input;
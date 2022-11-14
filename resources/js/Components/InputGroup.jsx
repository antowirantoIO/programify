import InputError from '@/Components/InputError';
import styles from '@/styles';
import { IconEye, IconEyeOff } from '@tabler/icons';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

export default function InputGroup({ eye = false, error = '', type = 'text', isFocused = false, label, ...props }) {
    const inputRef = useRef();
    const [showing, setShowing] = useState(false);
    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (eye) {
            if (showing) {
                inputRef.current.type = 'text';
            } else {
                inputRef.current.type = 'password';
            }
        }
    }, [showing]);

    const labelClass = clsx(error ? 'text-red-500' : 'text-slate-400', '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1');
    return (
        <>
            <div
                className={clsx(
                    styles.inputWithin,
                    styles.transitionDefault,
                    error &&
                        '!ring-red-200 dark:!ring-red-600/30 !border-red-400 dark:!border-red-600 bg-red-600/10 dark:bg-red-900/10',
                    'flex h-10 sm:h-11 items-center overflow-hidden group bg-white rounded-lg px-4'
                )}>
                <span className={labelClass}>{label}</span>
                <input
                    ref={inputRef}
                    type={type}
                    className={clsx(
                        error && '!placeholder-red-600/50',
                        'placeholder-slate-400 dark:placeholder-slate-500 text-tiny form-text w-full dark:text-white border-0 bg-transparent focus:outline-none focus:ring-0'
                    )}
                    {...props}
                />
                {eye && (
                    <div className={labelClass} onClick={() => setShowing(!showing)}>
                        {showing ? <IconEye /> : <IconEyeOff />}
                    </div>
                )}
            </div>
            {error && <InputError message={error} />}
        </>
    );
}

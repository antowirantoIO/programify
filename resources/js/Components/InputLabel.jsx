import clsx from 'clsx';
import React from 'react';

export default function InputLabel({ forInput, className, value, children }) {
    return (
        <label
            htmlFor={forInput}
            className={clsx(className, 'mb-1 block text-sm capitalize text-slate-600 dark:text-slate-200')}>
            {value ? value : children}
        </label>
    );
}

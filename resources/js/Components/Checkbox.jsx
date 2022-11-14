import clsx from 'clsx';
import React from 'react';

export default function Checkbox({ className, ...props }) {
    return (
        <input
            type='checkbox'
            className={clsx(
                className,
                'h-[18px] w-[18px] rounded border-slate-200 text-primary-500 shadow-sm ring-offset-0 checked:text-primary-500 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-slate-600/50 dark:bg-slate-700/50'
            )}
            {...props}
        />
    );
}

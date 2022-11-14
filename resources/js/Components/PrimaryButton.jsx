import clsx from 'clsx';
import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing = false, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                'transition duration-200 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-primary-500/20 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 text-white font-semibold h-[2.6rem] px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-500',
                processing && 'cursor-none opacity-50',
                className
            )}
            disabled={processing}>
            {children}
        </button>
    );
}

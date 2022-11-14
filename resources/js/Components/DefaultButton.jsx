import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function DefaultButton({
    rose = false,
    sky = false,
    emerald = false,
    violet = false,
    orange = false,
    blue = false,
    primary = false,
    href,
    isAnchor = false,
    children,
    ...props
}) {
    const classes = clsx(
        'group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition',
        blue && 'text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-500',
        sky && 'text-white bg-sky-500 hover:bg-sky-400 active:bg-sky-400',
        orange && 'text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-500',
        violet && 'text-white bg-violet-600 hover:bg-violet-500 active:bg-violet-500',
        rose && 'text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-500',
        emerald && 'text-white bg-emerald-600 hover:bg-emerald-500',
        primary &&
            'dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white text-slate-900 bg-slate-300 hover:bg-slate-200'
    );
    return isAnchor ? (
        <a href={href} className={classes}>
            {children}
            <svg
                className='mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]'
                fill='none'
                width='10'
                height='10'
                viewBox='0 0 10 10'
                aria-hidden='true'>
                <path className='opacity-0 transition group-hover:opacity-100' d='M0 5h7'></path>
                <path className='transition group-hover:translate-x-[3px]' d='M1 1l4 4-4 4'></path>
            </svg>
        </a>
    ) : (
        <Link {...props} href={href} className={classes}>
            {children}
            <svg
                className='mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]'
                fill='none'
                width='10'
                height='10'
                viewBox='0 0 10 10'
                aria-hidden='true'>
                <path className='opacity-0 transition group-hover:opacity-100' d='M0 5h7'></path>
                <path className='transition group-hover:translate-x-[3px]' d='M1 1l4 4-4 4'></path>
            </svg>
        </Link>
    );
}

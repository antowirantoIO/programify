import { InertiaLink } from '@inertiajs/inertia-react';
import clsx from 'clsx';

export default function NavLink({ active = false, link, children, className = '' }) {
    return (
        <InertiaLink
            href={link}
            className={clsx(
                'relative flex items-center gap-x-2 py-4 px-0.5 font-medium tracking-tight transition-colors duration-200 focus:outline-none'
            )}>
            <span
                className={clsx(
                    className,
                    active ? 'text-primary-500' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500',
                    'inline-block py-1.5 px-4'
                )}>
                {children}
            </span>
        </InertiaLink>
    );
}

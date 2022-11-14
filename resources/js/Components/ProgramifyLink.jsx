import { InertiaLink } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function ProgramifyLink({
    lightAndDark = false,
    isAnchor = false,
    href,
    className = '',
    children,
    ...props
}) {
    const defaultClass = clsx(
        lightAndDark && 'dark:text-primary-400 text-primary-500',
        'font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline'
    );
    return isAnchor ? (
        <a {...props} href={href} className={clsx(className, defaultClass)}>
            {children}
        </a>
    ) : (
        <InertiaLink {...props} href={href} className={clsx(className, defaultClass)}>
            {children}
        </InertiaLink>
    );
}

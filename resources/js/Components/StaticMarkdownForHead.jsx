import clsx from 'clsx';
import React from 'react';

export default function StaticMarkdownForHead({
    className = '',
    options = { darkBackground: false, lightAndDark: false },
    children,
}) {
    return (
        <div
            className={clsx(
                options.darkBackground && 'text-slate-300',
                options.lightAndDark && 'dark:prose-invert',
                className,
                'prose max-w-none prose-a:no-underline lg:prose-lg'
            )}>
            {children}
        </div>
    );
}

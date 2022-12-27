import { InertiaLink } from '@inertiajs/inertia-react';
import React, { FunctionComponent } from 'react';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}

const Link: FunctionComponent<LinkProps> = ({
    href,
    active = false,
    children,
}) => {
    return (
        <InertiaLink
            className={`group block flex items-center rounded-[12px] px-3 py-2 text-left text-sm font-medium hover:bg-grey-400 dark:hover:bg-panel-800 dark:hover:text-blue ${
                active
                    ? 'bg-grey-400 text-blue dark:bg-panel-800'
                    : 'dark:text-white/85'
            }`}
            href={href}
        >
            <span
                aria-hidden="true"
                className={`inline-block h-[16px] rounded-xl group-hover:scale-y-125 group-hover:bg-blue ${
                    active
                        ? 'scale-y-125 bg-blue'
                        : 'bg-grey-700 dark:bg-blue/10'
                }`}
                style={{
                    transition:
                        'transform 0.3s ease 0.1s, background-color 0.3s ease',
                    marginRight: 9,
                    width: 9,
                }}
            />{' '}
            {children}
        </InertiaLink>
    );
};

export default Link;

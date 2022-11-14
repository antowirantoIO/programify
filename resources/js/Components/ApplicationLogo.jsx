import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

import MarkBlue from './Logo/MarkBlue';
import TypeLogo from './Logo/TypeLogo';

export default function ApplicationLogo({ type, className = 'mr-8' }) {
    return (
        <Link href='/' className={clsx(className, 'flex shrink-0 items-center focus:outline-none')}>
            <MarkBlue />
            <TypeLogo className={type} />
        </Link>
    );
}

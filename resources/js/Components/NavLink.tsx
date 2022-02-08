import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
  className?: string;
}

export default function NavLink({
  active,
  href,
  className,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? className + ' text-gray-700 focus:outline-none test-md font-medium border border-gray-400/50 lg:mx-0.5 flex items-center gap-x-2 relative tracking-tight py-2 px-3 rounded-lg transition-colors duration-200'
    : className + ' text-gray-500 hover:text-gray-700 focus:outline-none text-md font-medium hover:border-gray-400/50 lg:mx-0.5 flex items-center gap-x-2 relative tracking-tight py-2 px-3 rounded-lg transition-colors duration-200';

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}

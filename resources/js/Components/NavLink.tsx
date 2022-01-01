import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
}

export default function NavLink({
  active,
  href,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'inline-flex items-center cursor-pointer px-1 pt-1 text-sm font-medium leading-5 text-white focus:outline-none transition'
    : 'inline-flex items-center cursor-pointer px-1 pt-1 text-sm font-medium leading-5 text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none focus:text-white focus:border-gray-300 transition';

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}

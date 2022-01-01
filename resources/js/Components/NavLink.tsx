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
    ? `${className} inline-flex items-center cursor-pointer px-1 pt-1 text-sm font-medium leading-5 text-white focus:outline-none transition`
    : `${className} inline-flex items-center cursor-pointer px-1 pt-1 text-sm font-medium leading-5 text-gray-200 hover:text-gray-100 hover:border-gray-300 focus:outline-none focus:text-white focus:border-gray-300 transition`;

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}

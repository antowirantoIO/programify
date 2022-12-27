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
    ? 'navbar-link block flex-shrink-0 font-poppins text-md font-medium uppercase text-grey-600/30 hover:text-white md:px-3 xl:px-5 xl:text-center is-active text-white'
    : 'navbar-link block flex-shrink-0 font-poppins text-md font-medium uppercase text-grey-600/30 hover:text-white md:px-3 xl:px-5 xl:text-center';

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}

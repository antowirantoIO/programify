import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props =
  | {
      as: 'button';
      active?: boolean;
      href?: undefined;
    }
  | {
      active?: boolean;
      href: string;
    };

export default function ResponsiveNavLink({
  active,
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'block w-full px-4 py-2 text-sm leading-5 text-gray-900 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition'
    : 'block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition';

  return (
    <div>
      {'as' in props && props.as === 'button' ? (
        <button className={classNames('w-full text-left', classes)}>
          {children}
        </button>
      ) : (
        <InertiaLink href={href || ''} className={classes}>
          {children}
        </InertiaLink>
      )}
    </div>
  );
}

import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';

interface Props {
  as?: string;
  href?: string;
  active?: boolean;
}

export default function DropdownLink({
  as,
  href,
  active,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div>
      {(() => {
        switch (as) {
          case 'button':
            return (
              <button
                type="submit"
                className={`${
                  active ? 'bg-gray-100' : ''
                } block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition`}
              >
                {children}
              </button>
            );
          case 'a':
            return (
              <a
                href={href}
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition`}
              >
                {children}
              </a>
            );
          default:
            return (
              <InertiaLink
                href={href || ''}
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition`}
              >
                {children}
              </InertiaLink>
            );
        }
      })()}
    </div>
  );
}

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'px-6 py-[11px] focus:ring focus:ring-gray-500 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition duration-150 focus:outline-none',
        props.className,
      )}
    >
      {children}
    </button>
  );
}

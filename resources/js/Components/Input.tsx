import classNames from 'classnames';
import React, { forwardRef } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className={classNames(
      'form-text h-11 py-0.5 w-full focus:outline-none focus:ring focus:ring-primary-100/60 shadow-sm focus:border-primary-400 border-gray-200 caret-primary-300 selection:bg-primary-100 selection:text-primary-700 rounded-xl transition duration-200 ease-in',
      props.className,
    )}
  />
));

export default Input;

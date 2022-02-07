import React, { PropsWithChildren } from 'react';

interface Props {
  value?: string;
  htmlFor?: string;
}

export default function Label({
  value,
  htmlFor,
  children,
}: PropsWithChildren<Props>) {
  return (
    <label
      className="capitalize mb-1 block text-sm text-gray-600"
      htmlFor={htmlFor}
    >
      {value || children}
    </label>
  );
}

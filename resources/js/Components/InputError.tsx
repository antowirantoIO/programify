import React, { PropsWithChildren } from 'react';

interface Props {
  message?: string;
  className?: string;
}

export default function InputError({
  message,
  className,
  children,
}: PropsWithChildren<Props>) {
  if (!message && !children) {
    return null;
  }
  return (
    <div className={className}>
      <p className="text-sm mt-1 text-red-600">{message || children}</p>
    </div>
  );
}

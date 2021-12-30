import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  on: boolean;
  message: string;
}

export default function ActionMessage({ on, message }: Props) {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      {on ? toast.success(message) : null}
    </div>
  );
}

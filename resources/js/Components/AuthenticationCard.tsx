import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@Components/AuthenticationCardLogo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 sm:justify-center sm:pt-0">
      <div>
        <AuthenticationCardLogo />
      </div>

      <div className="overflow-hidden px-6 py-4 mt-6 w-full bg-white shadow-md sm:max-w-md sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}

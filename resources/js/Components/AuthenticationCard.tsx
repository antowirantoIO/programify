import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 px-4 sm:pt-0 bg-gray-300">
      <div>
        <AuthenticationCardLogo />
      </div>

      <div className="w-full sm:max-w-lg mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-2xl">
        {children}
      </div>
    </div>
  );
}

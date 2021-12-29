import React from 'react';
import AuthenticationCardLogo from '@Components/AuthenticationCardLogo';
// @ts-ignore
import { Head } from '@inertiajs/inertia-react';

interface Props {
  policy: string;
}

export default function PrivacyPolicy({ policy }: Props) {
  return (
    <div>
      <Head title="Privacy Policy" />

      <div className="font-sans antialiased text-gray-900">
        <div className="pt-4 bg-gray-100">
          <div className="flex flex-col items-center pt-6 min-h-screen sm:pt-0">
            <div>
              <AuthenticationCardLogo />
            </div>

            <div
              className="overflow-hidden p-6 mt-6 w-full bg-white shadow-md sm:max-w-2xl sm:rounded-lg prose"
              dangerouslySetInnerHTML={{ __html: policy }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import ApplicationMark from './ApplicationMark';

export default function AuthenticationCardLogo() {
  return (
    <InertiaLink href="/">
      <ApplicationMark width="150" height="30" className="text-gray-900" />
    </InertiaLink>
  );
}

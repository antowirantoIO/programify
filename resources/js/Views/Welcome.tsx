import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Welcome() {
  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
          <div className="px-4 py-2">Hello</div>
        </div>
      </div>
    </div>
  );
}

Welcome.layout = (page: JSX.Element) => (
  <AppLayout children={page} title="Landing Page" />
);

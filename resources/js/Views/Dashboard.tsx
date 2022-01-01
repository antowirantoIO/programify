import React from 'react';
import Welcome from '@Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
          <Welcome />
        </div>
      </div>
    </div>
  );
}

Dashboard.layout = (page: JSX.Element) => (
  <AppLayout children={page} title="Dashboard" />
);

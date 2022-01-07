import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
  return <div className="py-12">Dashboard</div>;
}

Dashboard.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title="Dashboard"
    renderHeader={() => (
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    )}
  />
);

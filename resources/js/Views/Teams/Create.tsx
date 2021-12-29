import CreateTeamForm from '@/Partials/Teams/CreateTeamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

export default function Create() {
  return (
    <div>
      <div className="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <CreateTeamForm />
      </div>
    </div>
  );
}

Create.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title="Create Team"
    renderHeader={() => (
      <h2 className="text-xl font-semibold leading-tight text-gray-800">
        Create Team
      </h2>
    )}
  />
);

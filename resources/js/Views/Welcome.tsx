import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Welcome() {
  return <div>Landing Page</div>;
}

Welcome.layout = (page: JSX.Element) => (
  <AppLayout children={page} title="Landing Page" />
);

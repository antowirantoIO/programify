import React from 'react';

interface Props {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="grid gap-4 items-center px-4 py-3 rounded-t-xl border-b bg-gray-50/40 sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-8">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

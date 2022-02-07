import React from 'react';

interface Props {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="items-center px-4 py-3 border-b gap-4 bg-gray-50/40 sm:grid-cols-12 grid rounded-t-xl">
      <div className="col-span-12 sm:col-span-8">
        <div className="block font-medium tracking-tighter lg:text-lg">
          {title}
        </div>
        <span className="block text-xs tracking-tighter text-gray-500 lg:text-sm">
          {description}
        </span>
      </div>
    </div>
  );
}

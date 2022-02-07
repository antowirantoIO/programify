import React, { PropsWithChildren } from 'react';
import SectionTitle from '@/Components/SectionTitle';

interface Props {
  title: string;
  description: string;
}

export default function ActionSection({
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div>
      <div className="bg-white border shadow-sm rounded-xl">
        <SectionTitle title={title} description={description} />

        <div className="md:col-span-2">
          <div className="px-4 py-5 bg-white shadow sm:rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

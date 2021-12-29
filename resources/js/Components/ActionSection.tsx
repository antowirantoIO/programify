import React, { PropsWithChildren } from 'react';
import SectionTitle from '@Components/SectionTitle';

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
    <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 lg:order-none">
          <div className="bg-white rounded-xl border shadow-sm">
            <SectionTitle title={title} description={description} />

            <div className="rounded-b-xl undefined">
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

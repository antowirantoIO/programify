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
    <div className="px-4 mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 lg:order-none">
          <div className="bg-white border shadow-sm rounded-xl">
            <SectionTitle title={title} description={description} />

            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="px-4 py-5 bg-white shadow sm:rounded-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

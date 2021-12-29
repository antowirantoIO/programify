import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import SectionTitle from '@Components/SectionTitle';

interface Props {
  title: string;
  description: string;
  renderActions?(): JSX.Element;
  onSubmit(): void;
}

export default function FormSection({
  onSubmit,
  renderActions,
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  const hasActions = !!renderActions;

  return (
    <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 lg:order-none">
          <div className="bg-white rounded-xl border shadow-sm">
            <SectionTitle title={title} description={description} />

            <div className="rounded-b-xl undefined">
              <div className="p-4">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <div className="grid grid-cols-6 gap-6">{children}</div>
                  {hasActions && (
                    <div className="flex items-center pt-3 sm:rounded-bl-md sm:rounded-br-md">
                      {renderActions?.()}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

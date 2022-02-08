import React from 'react';
import APITokenManager from '@/Partials/API/APITokenManager';
import AppLayout from '@/Layouts/AppLayout';
import { ApiToken } from '@/types';

interface Props {
  tokens: ApiToken[];
  availablePermissions: string[];
  defaultPermissions: string[];
}

export default function ApiTokenIndex({
  tokens,
  availablePermissions,
  defaultPermissions,
}: Props) {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-5 px-5 lg:px-9 xl:px-8">
        <APITokenManager
          tokens={tokens}
          availablePermissions={availablePermissions}
          defaultPermissions={defaultPermissions}
        />
      </div>
    </div>
  );
}

ApiTokenIndex.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title={'API Tokens'}
    renderHeader={() => (
      <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
        <div className="flex items-center gap-x-2">
          <a className="flex items-center" href="/antowiranto">
            <img
              className="w-7 h-7 rounded-full sm:mr-2"
              src={page.props.user.profile_photo_url}
              alt="Anto Wiranto"
            />
            <span className="hidden sm:inline">{page.props.user.name}</span>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          API
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-400 capitalize">Create API Token</span>
        </div>
      </div>
    )}
  />
);

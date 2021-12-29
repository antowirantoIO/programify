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
      <div className="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
  <AppLayout children={page} title={'API Tokens'} />
);

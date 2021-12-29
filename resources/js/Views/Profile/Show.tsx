import React from 'react';
import DeleteUserForm from '@/Partials/Profile/DeleteUserForm';
import LogoutOtherBrowserSessions from '@/Partials/Profile/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Partials/Profile/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Partials/Profile/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Partials/Profile/UpdateProfileInformationForm';
import useTypedPage from '@/Hooks/useTypedPage';
import SectionBorder from '@Components/SectionBorder';
import AppLayout from '@/Layouts/AppLayout';
import { Session } from '@/types';

interface Props {
  sessions: Session[];
}

export default function Show({ sessions }: Props) {
  const page = useTypedPage();

  return (
    <div>
      <div className="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {page.props.jetstream.canUpdateProfileInformation ? (
          <div>
            <UpdateProfileInformationForm user={page.props.user} />

            <SectionBorder />
          </div>
        ) : null}

        {page.props.jetstream.canUpdatePassword ? (
          <div className="mt-10 sm:mt-0">
            <UpdatePasswordForm />

            <SectionBorder />
          </div>
        ) : null}

        {page.props.jetstream.canManageTwoFactorAuthentication ? (
          <div className="mt-10 sm:mt-0">
            <TwoFactorAuthenticationForm />

            <SectionBorder />
          </div>
        ) : null}

        <div className="mt-10 sm:mt-0">
          <LogoutOtherBrowserSessions sessions={sessions} />
        </div>

        {page.props.jetstream.hasAccountDeletionFeatures ? (
          <>
            <SectionBorder />

            <div className="mt-10 sm:mt-0">
              <DeleteUserForm />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

Show.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title={'Profile'}
    renderHeader={() => (
      <h2 className="text-xl font-semibold leading-tight text-gray-800">
        Profile
      </h2>
    )}
  />
);

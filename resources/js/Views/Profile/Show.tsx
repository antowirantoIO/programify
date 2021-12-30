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
import Example from './Example';

interface Props {
  sessions: Session[];
}

export default function Show({ sessions }: Props) {
  const page = useTypedPage();

  return (
    // <div>
    //   <div className="px-4 py-5 mx-auto max-w-7xl sm:px-5 lg:px-6">
    //     {page.props.jetstream.canUpdateProfileInformation ? (
    //       <div>
    //         <UpdateProfileInformationForm user={page.props.user} />

    //         <SectionBorder />
    //       </div>
    //     ) : null}

    //     {page.props.jetstream.canUpdatePassword ? (
    //       <div className="mt-10 sm:mt-0">
    //         <UpdatePasswordForm />

    //         <SectionBorder />
    //       </div>
    //     ) : null}

    //     {page.props.jetstream.canManageTwoFactorAuthentication ? (
    //       <div className="mt-10 sm:mt-0">
    //         <TwoFactorAuthenticationForm />

    //         <SectionBorder />
    //       </div>
    //     ) : null}

    //     <div className="mt-10 sm:mt-0">
    //       <LogoutOtherBrowserSessions sessions={sessions} />
    //     </div>

    //     {page.props.jetstream.hasAccountDeletionFeatures ? (
    //       <>
    //         <SectionBorder />

    //         <div className="mt-10 sm:mt-0">
    //           <DeleteUserForm />
    //         </div>
    //       </>
    //     ) : null}
    //   </div>
    // </div>
    <div>
      <Example />
    </div>
  );
}

Show.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title={'Profile'}
    renderHeader={() => (
      <div>
        <h1 className="text-2xl md:text-4xl flex justify-center font-extrabold leading-tight text-white">
          Account Seeting
        </h1>
        <p className="text-white flex justify-center text-md tracking-tighter">
          Update your account's profile information and email address.
        </p>
      </div>
    )}
  />
);

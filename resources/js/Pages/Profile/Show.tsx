import React from 'react';
import DeleteUserForm from '@/Partials/Profile/DeleteUserForm';
import LogoutOtherBrowserSessions from '@/Partials/Profile/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Partials/Profile/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Partials/Profile/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Partials/Profile/UpdateProfileInformationForm';
import useTypedPage from '@/Hooks/useTypedPage';
import AppLayout from '@/Layouts/AppLayout';
import { Session } from '@/types';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
  sessions: Session[];
}

export default function Show({ sessions }: Props) {
  const page = useTypedPage();

  return (
    <div className="px-5 pt-10 mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-9 xl:px-8">
      <Tab.Group as={'div'} className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Tab.List className="md:col-span-4 lg:col-span-3">
          <div className="space-y-6 lg:relative">
            {page.props.jetstream.canUpdateProfileInformation ? (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                      selected ? 'text-primary-500' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-gear"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    Update Profile Information
                  </div>
                )}
              </Tab>
            ) : null}
            {page.props.jetstream.canUpdatePassword ? (
              <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
                {({ selected }) => (
                  <div
                    className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                      selected ? 'text-primary-500' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-shield"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                    </svg>
                    Change Password
                  </div>
                )}
              </Tab>
            ) : null}
            {page.props.jetstream.canManageTwoFactorAuthentication ? (
              <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
                {({ selected }) => (
                  <div
                    className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                      selected ? 'text-primary-500' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-cup"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z" />
                    </svg>
                    Two Factor Authentication
                  </div>
                )}
              </Tab>
            ) : null}
            <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
              {({ selected }) => (
                <div
                  className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                    selected ? 'text-primary-500' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-bookmarks"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                  </svg>
                  Logout Other Browser
                </div>
              )}
            </Tab>
            <div className="w-full h-px rounded-full bg-gradient-to-r from-gray-300 via-white to-white" />
            <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
              {({ selected }) => (
                <div
                  className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                    selected ? 'text-primary-500' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path
                      fillRule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Subscription Information
                </div>
              )}
            </Tab>
            <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
              {({ selected }) => (
                <div
                  className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                    selected ? 'text-primary-500' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-receipt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Receipt for You
                </div>
              )}
            </Tab>
            <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
              {({ selected }) => (
                <div
                  className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                    selected ? 'text-primary-500' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-receipt-cutoff"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                    <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
                  </svg>
                  Your Invoice
                </div>
              )}
            </Tab>
            <div className="w-full h-px rounded-full bg-gradient-to-r from-gray-300 via-white to-white" />
            {page.props.jetstream.hasAccountDeletionFeatures ? (
              <Tab className="group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left">
                {({ selected }) => (
                  <div
                    className={`group focus:outline-none gap-x-2 truncate text-sm text-gray-600 flex items-center w-full text-left hover:text-blue-500 ${
                      selected ? 'text-primary-500' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{' '}
                    </svg>
                    Delete Account
                  </div>
                )}
              </Tab>
            ) : null}
          </div>
        </Tab.List>
        <Tab.Panels className="md:col-span-8 lg:col-span-9">
          {page.props.jetstream.canUpdateProfileInformation ? (
            <Tab.Panel className="bg-white border shadow-sm rounded-xl">
              <div>
                <UpdateProfileInformationForm user={page.props.user} />
              </div>
            </Tab.Panel>
          ) : null}
          {page.props.jetstream.canUpdatePassword ? (
            <Tab.Panel className="bg-white border shadow-sm rounded-xl">
              <div>
                <UpdatePasswordForm />
              </div>
            </Tab.Panel>
          ) : null}
          {page.props.jetstream.canManageTwoFactorAuthentication ? (
            <Tab.Panel>
              <div>
                <TwoFactorAuthenticationForm />
              </div>
            </Tab.Panel>
          ) : null}
          <Tab.Panel>
            <div>
              <LogoutOtherBrowserSessions sessions={sessions} />
            </div>
          </Tab.Panel>
          {page.props.jetstream.hasAccountDeletionFeatures ? (
            <Tab.Panel>
              <div>
                <DeleteUserForm />
              </div>
            </Tab.Panel>
          ) : null}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Show.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title={'Update Profile Information'}
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
          Settings
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
          <span className="text-gray-400 capitalize">Profile Information</span>
        </div>
      </div>
    )}
  />
);

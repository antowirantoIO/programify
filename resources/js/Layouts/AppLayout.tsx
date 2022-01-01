// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import ApplicationMark from '@Components/ApplicationMark';
import Banner from '@Components/Banner';
import Dropdown from '@Components/Dropdown';
import NavLink from '@Components/NavLink';
import { Toaster } from 'react-hot-toast';

interface Props {
  title: string;
}

export default function AppLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  const route = useRoute();
  return (
    <div>
      <Head title={title} />

      <Banner />
      <Toaster position="bottom-right" />
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-gray-900 border-b border-gray-100">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* <!-- Logo --> */}
                <div className="flex flex-shrink-0 items-center">
                  <InertiaLink href={route('dashboard')}>
                    <ApplicationMark className="block w-auto h-9" />
                  </InertiaLink>
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden gap-x-2 sm:-my-px sm:ml-10 sm:flex">
                  <NavLink
                    href={route('welcome')}
                    active={route().current('welcome')}
                  >
                    Home
                  </NavLink>
                  <NavLink href={'#'}>Series</NavLink>
                  <NavLink href={'#'}>Topics</NavLink>
                  <NavLink href={'#'}>Discussion</NavLink>
                  <NavLink href={'#'}>Premium</NavLink>
                </div>
              </div>

              <Dropdown />
            </div>
          </div>
        </nav>

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
    </div>
  );
}

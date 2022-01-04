// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Search from '@/Components/Search';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import DropdownMenuResponsive from '@/Components/DropdownMenuResponsive';
import { Toaster } from 'react-hot-toast';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const route = useRoute();

  return (
    <div>
      <Head title={title} />

      <Banner />
      <Toaster position="bottom-right" />
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white border-b border-gray-100">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* <!-- Logo --> */}
                <div className="flex-shrink-0 flex items-center">
                  <InertiaLink href={route('dashboard')}>
                    <ApplicationMark className="block h-9 w-auto" />
                  </InertiaLink>
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                  <NavLink
                    href={route('dashboard')}
                    active={route().current('dashboard')}
                  >
                    Dashboard
                  </NavLink>
                </div>
              </div>

              <div className="flex items-center">
                <Search />
                {/* <!-- Navigation Menu --> */}
                <div className="hidden sm:flex sm:items-center ml-3 relative">
                  <DropdownMenu />
                </div>
              </div>

              {/* <!-- Responsive Navigation Menu --> */}
              <div className="mr-2 flex items-center relative sm:hidden">
                <DropdownMenuResponsive />
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Page Heading --> */}
        {renderHeader ? (
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {renderHeader()}
            </div>
          </header>
        ) : null}

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
    </div>
  );
}

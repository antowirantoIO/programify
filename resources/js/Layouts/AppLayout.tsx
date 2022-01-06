// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Search from '@/Components/Search';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import DropdownMenuResponsive from '@/Components/DropdownMenuResponsive';
import { Toaster } from 'react-hot-toast';
import useTypedPage from '@/Hooks/useTypedPage';

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
  const page = useTypedPage();

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
              <div className="flex items-center">
                {/* <!-- Logo --> */}
                <div className="flex-shrink-0 flex items-center">
                  <InertiaLink href={route('dashboard')}>
                    <ApplicationMark className="block h-9 w-auto" />
                  </InertiaLink>
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex">
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
                {page.props.user ? (
                  <div className="hidden sm:flex sm:items-center ml-3 relative">
                    <DropdownMenu />
                  </div>
                ) : (
                  <div className="pl-4 hidden sm:flex">
                    <InertiaLink
                      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"
                      href={route('login')}
                    >
                      Login
                    </InertiaLink>
                  </div>
                )}
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

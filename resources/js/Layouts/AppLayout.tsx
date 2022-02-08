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
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-100">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* <!-- Logo --> */}
                <div className="flex-shrink-0 flex items-center">
                  <InertiaLink href={route('dashboard')}>
                    <ApplicationMark className="block h-9 w-auto" />
                  </InertiaLink>
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                  <NavLink
                    href={route('welcome')}
                    active={route().current('welcome')}
                  >
                    Home
                  </NavLink>
                  <NavLink href={'#'}>Series</NavLink>
                  <NavLink href={'#'}>Topics</NavLink>
                  <NavLink href={'#'}>Articles</NavLink>
                  <NavLink className="hidden lg:block" href={'#'}>
                    Forum
                  </NavLink>
                  <NavLink className="hidden lg:block" href={'#'}>
                    Premium
                  </NavLink>
                  {/* <NavLink
                    href={route('dashboard')}
                    active={route().current('dashboard')}
                  >
                    Dashboard
                  </NavLink> */}
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
                      className="text-gray-500 hover:text-gray-600 focus:outline-none font-medium hover:border-gray-400/50 lg:mx-0.5 flex items-center gap-x-2 relative tracking-tight py-2 px-2 rounded-lg transition-colors duration-200"
                      href={route('login')}
                    >
                      Login
                    </InertiaLink>
                    <InertiaLink
                      className="text-gray-500 hover:text-gray-600 focus:outline-none font-medium hover:border-gray-400/50 lg:mx-0.5 flex items-center gap-x-2 relative tracking-tight py-2 rounded-lg transition-colors duration-200"
                      href={route('register')}
                    >
                      Register
                    </InertiaLink>
                  </div>
                )}
                <DropdownMenuResponsive />
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Page Heading --> */}
        {renderHeader ? (
          <header className="bg-white shadow-xl shadow-primary-300/30">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
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

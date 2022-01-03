// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import React, { Fragment, PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import DropdownMenuResponsive from '@/Components/DropdownMenuResponsive';
import { Toaster } from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import DialogModal from '@/Components/DialogModal';
import Input from '@/Components/Input';

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
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
                <button
                  className="items-center hidden gap-2 px-3 py-2 border md:flex border-white/10 bg-gray-700 rounded-xl"
                  onClick={openModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="#ffffff"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <span className="px-2 text-sm text-gray-200 bg-gray-800 rounded-md">
                    ⌘ + /
                  </span>
                </button>

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                  >
                    <div className="min-h-screen px-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500/20" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className="inline-block w-full sm:max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Payment successful
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted.
                              We’ve sent you an email with all of the details of
                              your order.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                              onClick={closeModal}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition>

                {/* <!-- Settings Dropdown --> */}
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

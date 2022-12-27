import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Lang() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <a className="block leading-none" onClick={openModal}>
                    <img
                        src="//unavatar.io/github/antowirantoIO"
                        className="rounded-lg"
                        alt="antowiranto avatar"
                        width="50"
                    />
                </a>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10 vfm"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 vfm__overlay vfm--overlay" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="vfm__container vfm--absolute vfm--inset vfm--outline-none flex m-auto justify-end">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="vfm__content account-slideout-menu rounded-none bg-blue-900 flex flex-col">
                                    <div className="px-8 py-6 text-white">
                                        <div className="flex">
                                            <div
                                                className="flex-shrink-0"
                                                style={{ width: '200px' }}
                                            >
                                                <header className="mb-6 pt-8">
                                                    <div className="flex items-center">
                                                        <a
                                                            className="inline-flex"
                                                            href="/@antowiranto"
                                                        >
                                                            <img
                                                                src="//unavatar.io/github/antowirantoIO"
                                                                alt="Avatar of antowiranto"
                                                                width={60}
                                                                height={60}
                                                                style={{
                                                                    height: '60px',
                                                                    borderRadius:
                                                                        '9px',
                                                                    border: '2px solid #fff',
                                                                }}
                                                            />
                                                        </a>
                                                        <div className="ml-5">
                                                            <h5 className="font-poppins text-[14px] font-medium">
                                                                antowiranto
                                                            </h5>
                                                            <a
                                                                className="inline-flex text-2xs font-medium"
                                                                href="/settings/subscription/portal"
                                                            >
                                                                <svg
                                                                    width={18}
                                                                    height={18}
                                                                    viewBox="0 0 18 18"
                                                                    className="mr-1"
                                                                    style={{
                                                                        marginLeft:
                                                                            '-2px',
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M4.2 6.116a.802.802 0 0 1 .434-.225l8.726-2.267a.829.829 0 0 1 .845.269l.02.026c.156.196.22.46.152.721l-2.285 8.796a.805.805 0 0 1-.981.576l-.006-.001-.006-.002a.826.826 0 0 1-.42-.274l-2.623-2.623-1.018 1.02a.82.82 0 0 1-1.083.068l-.077-.069a.82.82 0 0 1 0-1.16l3.177-3.177a.82.82 0 0 1 1.083-.068l.077.068c.32.32.32.84 0 1.16l-1.02 1.019 1.673 1.672 1.585-6.098-6.098 1.584.513.513c.29.29.313.748.067 1.064l-.067.076a.806.806 0 0 1-1.14 0L4.265 7.322a.825.825 0 0 1-.236-.315l-.037-.105-.014-.061a.808.808 0 0 1-.003-.018l.017.079a.809.809 0 0 1-.027-.152v-.03a.52.52 0 0 1-.002-.067l.003-.03a.575.575 0 0 1 .008-.07l.006-.03a.648.648 0 0 1 .048-.152.787.787 0 0 1 .105-.18l.067-.075zm.125 6.409a.82.82 0 0 1 1.083-.069l.077.069c.32.32.32.84 0 1.16l-.478.477a.82.82 0 0 1-1.083.069l-.077-.069a.82.82 0 0 1 0-1.16l.478-.477z"
                                                                        fill="#328AF1"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Guest{' '}
                                                                    <span className="text-white/50">
                                                                        Plan
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </header>
                                                <nav className="mt-10">
                                                    <ul className="-ml-8 flex h-full flex-col space-y-7">
                                                        {/**/}
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/week-in-review"
                                                            >
                                                                What's New{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // new
                                                                    content for
                                                                    ya
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/me"
                                                            >
                                                                My Library{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // keep
                                                                    going
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/discuss/feed"
                                                            >
                                                                Social Feed{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // new from
                                                                    the
                                                                    community
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/@antowiranto"
                                                            >
                                                                My Profile{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // everyone
                                                                    sees this
                                                                    page
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/settings/account"
                                                            >
                                                                Settings{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // make a
                                                                    tweak
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <a
                                                                className="group ml-8 block text-left text-xl font-medium hover:text-blue"
                                                                href="/gift-certificates"
                                                            >
                                                                Gift an Account{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // from the
                                                                    kindness of
                                                                    your &lt;3
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="account-slideout-link relative font-medium">
                                                            <button className="group ml-8 block text-left text-xl font-medium hover:text-blue">
                                                                Logout{' '}
                                                                <div className="text-3xs text-grey-600/30 group-hover:text-blue">
                                                                    // but...
                                                                    why?
                                                                </div>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div
                                                className="mx-6 h-auto w-px bg-deep-black"
                                                style={{ marginTop: '50px' }}
                                            />
                                            <div
                                                className="flex-1"
                                                style={{ width: '300px' }}
                                            >
                                                <header className="flex items-center justify-between text-white">
                                                    <p>Notifications</p>
                                                    {/**/}
                                                </header>
                                                <div
                                                    className="mt-4 h-full space-y-3 overflow-auto overflow-y-auto"
                                                    style={{
                                                        maxHeight: '89vh',
                                                    }}
                                                >
                                                    <div className="flex h-full flex-col items-center justify-center">
                                                        <img
                                                            src="https://laracasts.com/images/nothing-to-see-here-account-slideout-icon.png"
                                                            alt=""
                                                            className="mix-blend-luminosity"
                                                            width={159}
                                                            height={166}
                                                        />
                                                        <p className="mt-3 text-center text-xs text-white/25">
                                                            {' '}
                                                            When other Laracasts
                                                            users mention
                                                            @antowiranto or
                                                            respond to forum
                                                            threads you've
                                                            created, you'll
                                                            receive a
                                                            notification here.{' '}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

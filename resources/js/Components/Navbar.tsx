import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import useRoute from '@/Hooks/useRoute';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import MenuDesktop from './MenuDesktop';

interface Props {
    menuShown: boolean;
}

export default function Navbar({ menuShown }: Props) {
    const route = useRoute();

    return (
        <>
            <nav
                className="section new-nav z-50 w-full max-w-none py-4 bg-transparent md:pt-7 md:pb-4"
                style={{ height: '60px' }}
            >
                <div className="relative flex h-full items-center justify-between">
                    <div
                        id="header-logo-arrow"
                        className="mr-4 flex lg:mr-8 xl:mr-0 xl:w-1/4"
                    >
                        <InertiaLink
                            className="relative inline-block cursor-pointer leading-none"
                            href={route('homepage')}
                        >
                            <ApplicationLogo width={'145'} />
                        </InertiaLink>
                    </div>
                    {menuShown && (
                        <div
                            className="navbar-links relative mr-auto hidden font-cabin md:flex md:justify-start lg:justify-around xl:mr-0 xl:w-full"
                            style={{ flex: '0 1 0%' }}
                        >
                            <NavLink active={false} href={'/my'}>
                                My Library
                            </NavLink>
                            <NavLink active={false} href="/browse/all">
                                {' '}
                                Topics
                            </NavLink>
                            <NavLink active={false} href="/series">
                                Series
                            </NavLink>
                            <NavLink active={false} href="/path">
                                Path
                            </NavLink>
                            <NavLink active={false} href="/bits">
                                Article
                            </NavLink>
                            <NavLink active={false} href="/discuss">
                                Forum
                            </NavLink>
                            <NavLink active={false} href="/podcast">
                                Premium
                            </NavLink>
                        </div>
                    )}
                    <div className="flex items-center md:hidden">
                        <button
                            title="Tip: press / or s anywhere to instantly activate me."
                            className="leading-none mr-4 inline-flex rounded-xl bg-blue/7 p-3 text-white transition-all hover:text-blue"
                        >
                            <svg width={16} viewBox="0 0 15 15">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M-2-2h20v20H-2z" />
                                    <path
                                        className="fill-current"
                                        d="M10.443 9.232h-.638l-.226-.218A5.223 5.223 0 0 0 10.846 5.6 5.247 5.247 0 1 0 5.6 10.846c1.3 0 2.494-.476 3.414-1.267l.218.226v.638l4.036 4.028 1.203-1.203-4.028-4.036zm-4.843 0A3.627 3.627 0 0 1 1.967 5.6 3.627 3.627 0 0 1 5.6 1.967 3.627 3.627 0 0 1 9.232 5.6 3.627 3.627 0 0 1 5.6 9.232z"
                                    />
                                </g>
                            </svg>
                        </button>
                        <div>
                            <a className="block leading-none">
                                <div className="hamburger-nav">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden md:block xl:w-1/4">
                        <div className="flex items-center justify-end">
                            <button
                                title="Tip: press / or s anywhere to instantly activate me."
                                className="leading-none rounded-xl border border-transparent bg-blue/10 p-3 leading-none text-white transition-all hover:border-blue/20 hover:text-blue"
                            >
                                <svg width={16} viewBox="0 0 15 15">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-2-2h20v20H-2z" />
                                        <path
                                            className="fill-current"
                                            d="M10.443 9.232h-.638l-.226-.218A5.223 5.223 0 0 0 10.846 5.6 5.247 5.247 0 1 0 5.6 10.846c1.3 0 2.494-.476 3.414-1.267l.218.226v.638l4.036 4.028 1.203-1.203-4.028-4.036zm-4.843 0A3.627 3.627 0 0 1 1.967 5.6 3.627 3.627 0 0 1 5.6 1.967 3.627 3.627 0 0 1 9.232 5.6 3.627 3.627 0 0 1 5.6 9.232z"
                                        />
                                    </g>
                                </svg>
                            </button>
                            <MenuDesktop />

                            {/* <InertiaLink href={route('login')} className="link ml-6 flex-shrink-0 text-xs font-medium text-white hover:text-white"> Sign In </InertiaLink>
                        <InertiaLink href={route('register')} className="btn flex-center btn-blue ml-6 flex-shrink-0 px-3 py-2">
                            <span className="text-wrap inline-block flex-shrink-0"> Get Started for Free </span>
                        </InertiaLink> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

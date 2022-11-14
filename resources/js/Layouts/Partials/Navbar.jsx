import VerifiedIcon from '@/Components/Icons/VerifiedIcon';
import Image from '@/Components/Image';
import NavLink from '@/Components/NavLink';
import ResponsiveNavigation from '@/Layouts/Partials/ResponsiveNavigation';
import { ThemeSwitcher } from '@/Layouts/Partials/ThemeSwitcher';
import styles from '@/styles';
import { Link, usePage } from '@inertiajs/inertia-react';
import {
    IconBasket,
    IconBook2,
    IconBookmark,
    IconChartPie,
    IconHeart,
    IconLogout,
    IconNotebook,
    IconPlayerStop,
    IconSearch,
    IconServer2,
    IconSettings,
    IconUserCheck,
    IconUserCircle,
    IconWriting,
} from '@tabler/icons';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import ApplicationLogo from '../../Components/ApplicationLogo';
// import CommandPalette from '../../Components/CommandPalette';
import DropdownMenu from '../../Components/DropdownMenu';

export default function Navbar({ className }) {
    const { auth } = usePage().props;
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const isAppleOS = () => {
        const platform = navigator?.userAgentData?.platform || navigation?.platform || 'unknown';
        return /(Mac|iPhone|iPod|iPad)/i.test(platform);
    };
    const keyboardShortcut = isAppleOS ? '⌘ K' : 'Ctrl + K';
    function isEditingContent(event) {
        let element = event.target;
        let tagName = element.tagName;
        return element.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
    }

    useEffect(() => {
        function onKeyDown(event) {
            if (
                (event.keyCode === 27 && isOpen) ||
                (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
                (!isEditingContent(event) && event.key === '/' && !isOpen)
            ) {
                event.preventDefault();
                if (isOpen) return;
            }
        }

        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <>
            {/* <CommandPalette {...{ isOpen, setIsOpen }} /> */}
            <ResponsiveNavigation
                {...{
                    setIsOpen,
                    auth,
                }}
            />
            <nav
                className={clsx(
                    'z-20 hidden bg-white dark:shadow-none relative dark:bg-slate-1000 px-4 py-0.5 print:hidden lg:block',
                    className
                )}>
                <div className='mx-auto lg:max-w-screen-2xl flex flex-row items-center justify-between'>
                    <ApplicationLogo type={'dark:fill-white fill-black'} className='mr-3' />
                    <div
                        className={`hidden w-full flex-col justify-between border-t border-slate-800 md:flex md:flex-row md:items-center md:border-t-0 md:py-0`}>
                        <div className='flex items-center'>
                            <NavLink active={route().current('home')} className='sm:hidden lg:block' link={'/'}>
                                Home
                            </NavLink>
                            <NavLink active={route().current('series.*')} link={'/series'}>
                                Screencast
                            </NavLink>
                            <NavLink active={route().current('topics.*')} link={'/topics'}>
                                Topics
                            </NavLink>
                            <NavLink active={route().current('articles.*')} link={'/articles'}>
                                Articles
                            </NavLink>
                            <NavLink active={route().current('ebooks.*')} link={'/ebooks'}>
                                Ebooks
                            </NavLink>

                            {auth.user ? (
                                !auth.user?.r && (
                                    <NavLink active={route().current('premium')} link='/premium'>
                                        Premium
                                    </NavLink>
                                )
                            ) : (
                                <NavLink active={route().current('premium')} link='/premium'>
                                    Premium
                                </NavLink>
                            )}
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <button
                                onClick={() => setIsOpen(true)}
                                className={clsx(
                                    styles.lightAndDarkBorderBackgroundHover,
                                    'group flex items-center gap-x-2 rounded-lg fade px-3.5 py-2 focus:outline-none xl:px-3'
                                )}>
                                <IconSearch stroke={1.25} className='h-4 w-4' />
                                <span className='hidden items-center gap-x-4 xl:flex'>
                                    <span className='hidden text-sm lg:block'>Quick search...</span>
                                    <span>{keyboardShortcut}</span>
                                </span>
                            </button>
                            <ThemeSwitcher />
                            {auth.user ? (
                                <div className='flex items-center gap-1'>
                                    {!auth.user?.r && (
                                        <Link
                                            className={clsx(
                                                url.startsWith('/invoices') && '!text-primary-500',
                                                styles.lightAndDarkBorderBackgroundHover,
                                                'py-[9px] inline-block px-3 border rounded-lg font-medium transition'
                                            )}
                                            href={route('invoices.to_confirm')}>
                                            <IconBasket stroke={1} className='h-5 w-5' />
                                        </Link>
                                    )}
                                    {/* <Link   
                                        className={clsx(
                                            url.startsWith('/referrals') && '!text-primary-500',
                                            styles.lightAndDarkBorderBackgroundHover,
                                            'py-[9px] relative inline-block px-3 border rounded-lg font-medium transition'
                                        )}
                                        href='/referrals'>
                                        <span className='absolute top-1 right-1 animate-pulse z-20 w-2 h-2 rounded-full bg-emerald-500 dark:bg-sky-500'></span>
                                        <IconCoin stroke={1} className='h-5 w-5' />
                                    </Link> */}
                                    <DropdownMenu
                                        trigger={
                                            <div className='flex items-center gap-x-2'>
                                                {auth.user.r && (
                                                    <VerifiedIcon className='dark:text-white text-primary-600 absolute -top-1 -right-1 inline h-4 w-4' />
                                                )}
                                                <Image
                                                    width='20'
                                                    height='20'
                                                    className='h-5 w-5 rounded-full object-cover object-center'
                                                    src={auth.user.picture}
                                                    alt={auth.user.identifier}
                                                />
                                                {auth.user.name.slice(0, 8)}
                                                ...
                                            </div>
                                        }>
                                        {auth.user?.a ? (
                                            <>
                                                <DropdownMenu.Link href='/dashboard'>
                                                    <IconChartPie />
                                                    Dashboard
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link isAnchor href='/horizon'>
                                                    <IconServer2 />
                                                    Horizon
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Divider />
                                            </>
                                        ) : (
                                            ''
                                        )}
                                        <>
                                            {!auth.user.a ? (
                                                <DropdownMenu.Link
                                                    isActive={route().current('panel')}
                                                    href={route('panel')}>
                                                    <IconChartPie />
                                                    Dashboard
                                                </DropdownMenu.Link>
                                            ) : null}
                                            <DropdownMenu.Link
                                                isActive={route().current('profile', auth.user?.identifier)}
                                                href={`/${auth.user?.identifier}`}>
                                                <IconUserCircle />
                                                View profile
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                isActive={route().current('settings.index')}
                                                href={route('settings.index')}>
                                                <IconSettings />
                                                Settings
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Divider />
                                        </>
                                        <>
                                            <DropdownMenu.Link
                                                isActive={route().current('ebooks.mine')}
                                                href={route('ebooks.mine')}>
                                                <IconBook2 />
                                                My ebooks
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Divider />
                                            <DropdownMenu.Link
                                                isActive={route().current('articles.table')}
                                                href='/articles/table'>
                                                <IconNotebook />
                                                My articles
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                isActive={route().current('articles.create')}
                                                href='/articles/create'>
                                                <IconWriting />
                                                Create new article
                                            </DropdownMenu.Link>

                                            <DropdownMenu.Link
                                                isActive={route().current('articles.favorite')}
                                                href='/articles/favorite'>
                                                <IconHeart />
                                                Favorite articles
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Divider />
                                        </>
                                        <DropdownMenu.Link
                                            isActive={route().current('catalog')}
                                            href='/settings/catalog'>
                                            <IconPlayerStop />
                                            Catalog
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link
                                            isActive={route().current('watchlist')}
                                            href='/settings/watch-for-later'>
                                            <IconBookmark />
                                            Watch for later
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Divider />
                                        <DropdownMenu.Link
                                            isActive={route().current('settings.subscription')}
                                            href='/settings/subscription'>
                                            <IconUserCheck />
                                            Subscription
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Divider />
                                        <DropdownMenu.Link href='/logout' method='post' as='button'>
                                            <IconLogout />
                                            Logout
                                        </DropdownMenu.Link>
                                    </DropdownMenu>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        className={clsx(
                                            styles.lightAndDarkBorderBackgroundHover,
                                            'py-2 inline-block px-4 rounded-lg font-medium fade'
                                        )}
                                        href='/login'>
                                        Login
                                    </Link>
                                    <Link
                                        className={clsx(
                                            styles.lightAndDarkBorderBackgroundHover,
                                            'py-2 inline-block px-4 rounded-lg font-medium fade'
                                        )}
                                        href='/register'>
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

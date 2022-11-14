import MarkBlue from '@/Components/Logo/MarkBlue';
import TypeLogo from '@/Components/Logo/TypeLogo';
import { ThemeSwitcher } from '@/Layouts/Partials/ThemeSwitcher';
import styles from '@/styles';
import { Link } from '@inertiajs/inertia-react';
import {
    IconBook2,
    IconBookmark,
    IconBooks,
    IconChartPie,
    IconDeviceTvOld,
    IconHeart,
    IconHome,
    IconLogin,
    IconLogout,
    IconMenu2,
    IconNotebook,
    IconPlayerStop,
    IconRocket,
    IconSearch,
    IconServer2,
    IconSettings,
    IconTag,
    IconUserCheck,
    IconUserCircle,
    IconWriting,
} from '@tabler/icons';
import clsx from 'clsx';
import React from 'react';

import DropdownMenu from '../../Components/DropdownMenu';

export default function ResponsiveNavigation({ auth, setIsOpen }) {
    return (
        <nav className='relative w-full dark:border-slate-800 dark:bg-slate-900 py-2 px-4 lg:hidden'>
            <div className='flex items-center justify-between'>
                <Link href='/resources/js/Pages' className='flex flex-none items-center'>
                    <MarkBlue className='mr-2 w-7' />
                    <TypeLogo className='w-20 fill-black dark:fill-white' />
                </Link>
                <div className={clsx('flex w-full items-center justify-end gap-x-1')}>
                    <button
                        onClick={() => setIsOpen(true)}
                        className={clsx(
                            styles.flexCenter,
                            styles.lightAndDarkBorderBackgroundHover,
                            'h-10 rounded-lg px-3.5'
                        )}>
                        <IconSearch stroke={1} className='h-5 w-5' />
                    </button>
                    <ThemeSwitcher />
                    <DropdownMenu
                        cheveronDownIcon={auth.user ? true : false}
                        trigger={
                            auth.user ? (
                                <div className='flex items-center gap-x-2'>
                                    {auth.user.r && (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='currentColor'
                                            className={`absolute -top-1 -right-1 inline h-4 w-4 text-primary-600 dark:text-white`}
                                            viewBox='0 0 16 16'>
                                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                                        </svg>
                                    )}
                                    {auth.user.name.slice(0, 3)}
                                    ...
                                </div>
                            ) : (
                                <IconMenu2 className='w-5 h-5' stroke={1.5} />
                            )
                        }>
                        <DropdownMenu.Link isActive={route().current('home')} href='/'>
                            <IconHome stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Home
                        </DropdownMenu.Link>
                        <DropdownMenu.Link isActive={route().current('series.*')} href='/series'>
                            <IconDeviceTvOld stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Screencast
                        </DropdownMenu.Link>
                        <DropdownMenu.Link isActive={route().current('premium')} href={'/premium'}>
                            <IconRocket stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Premium
                        </DropdownMenu.Link>
                        <DropdownMenu.Link isActive={route().current('topics.*')} href='/topics/laravel'>
                            <IconTag stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Topics
                        </DropdownMenu.Link>
                        <DropdownMenu.Link isActive={route().current('articles.*')} href='/articles'>
                            <IconNotebook stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Articles
                        </DropdownMenu.Link>
                        <DropdownMenu.Link isActive={route().current('ebooks.*')} href='/ebooks'>
                            <IconBooks stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                            Ebooks
                        </DropdownMenu.Link>

                        {auth.user ? (
                            <>
                                {auth.user?.a ? (
                                    <>
                                        <DropdownMenu.Divider />
                                        <DropdownMenu.Link href='/dashboard'>
                                            <IconChartPie
                                                stroke={1}
                                                className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                            />
                                            Dashboard
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Anchor href='/horizon'>
                                            <IconServer2
                                                stroke={1}
                                                className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                            />
                                            Horizon
                                        </DropdownMenu.Anchor>
                                        <DropdownMenu.Divider />
                                    </>
                                ) : (
                                    ''
                                )}
                                <>
                                    {!auth.user.a ? (
                                        <>
                                            <DropdownMenu.Divider />
                                            <DropdownMenu.Link href={'/panel'}>
                                                <IconChartPie
                                                    stroke={1}
                                                    className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                                />
                                                Dashboard
                                            </DropdownMenu.Link>
                                        </>
                                    ) : null}
                                    <DropdownMenu.Link href={`/${auth.user?.identifier}`}>
                                        <IconUserCircle
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        View profile
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href='/settings'>
                                        <IconSettings
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        Settings
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Divider />
                                </>
                                <>
                                    <DropdownMenu.Link href='/ebooks/mine'>
                                        <IconBook2 stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                                        My ebooks
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href='/articles/table'>
                                        <IconNotebook
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        My articles
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href='/articles/create'>
                                        <IconWriting
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        Create new article
                                    </DropdownMenu.Link>
                                </>
                                <>
                                    <DropdownMenu.Link href='/settings/catalog'>
                                        <IconPlayerStop
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        Catalog
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href='/settings/watch-for-later'>
                                        <IconBookmark
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        Watch for later
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link href='/articles/favorite'>
                                        <IconHeart stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                                        Favorite articles
                                    </DropdownMenu.Link>
                                </>
                                <>
                                    <DropdownMenu.Link href='/settings/subscription'>
                                        <IconUserCheck
                                            stroke={1}
                                            className='h-4 w-4 text-slate-700 dark:text-slate-300'
                                        />
                                        Subscription
                                    </DropdownMenu.Link>
                                </>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link href='/logout' method='post' as='button'>
                                    <IconLogout stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                                    Logout
                                </DropdownMenu.Link>
                            </>
                        ) : (
                            <>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link href='/login'>
                                    <IconLogin stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                                    Login
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href='/register'>
                                    <IconUserCircle stroke={1} className='h-4 w-4 text-slate-700 dark:text-slate-300' />
                                    Register
                                </DropdownMenu.Link>
                            </>
                        )}
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}

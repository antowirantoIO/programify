import MarkBlue from '@/Components/Logo/MarkBlue';
import TypeLogo from '@/Components/Logo/TypeLogo';
import ProgramifyToaster from '@/Layouts/Partials/ProgramifyToaster';
import { Head, Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function Guest({ children, title }) {
    return (
        <>
            <Head title={title} />
            <ProgramifyToaster />
            <main className='flex bg-white dark:bg-slate-1000 flex-col md:flex-row min-h-screen'>
                <div className='w-1/3' />
                <div className='md:border-l dark:border-slate-700/50 relative flex items-center justify-center w-full lg:w-2/5'>
                    <div className='md:min-h-screen w-full bg-grid-slate-100 dark:bg-grid-slate-800/40 flex items-center md:p-10 justify-center'>
                        <div className='bg-gradient-to-b from-white dark:from-slate-1000 to-white dark:to-slate-1000 via-transparent dark:via-transparent absolute w-full h-full'></div>
                        <div className='bg-gradient-to-r from-white dark:from-slate-1000 to-white dark:to-slate-1000 via-transparent dark:via-transparent absolute w-full h-full'></div>
                        <div className={'w-full'}>
                            <div className='justify-center sm:justify-start flex sm:flex-none border-b sm:border-none sm:border-transparent border-slate-300 dark:border-primary-700 sm:shadow-none bg-slate-50 dark:bg-slate-1000 dark:shadow-xl dark:shadow-primary-900/30 relative'>
                                <Link
                                    href='/'
                                    className={clsx(
                                        'flex shrink-0 md:-ml-[5.25rem] mb-6 md:mb-0 pt-6 md:pt-0 items-center focus:outline-none'
                                    )}>
                                    <div className='bg-white dark:bg-slate-1000 md:p-5 md:-mb-[6.1rem]'>
                                        <MarkBlue className={'w-8 h-8 md:w-11 md:h-11'} />
                                    </div>
                                    <TypeLogo className={'md:hidden block fill-slate-800 ml-1 dark:fill-white'} />
                                </Link>
                            </div>
                            <div className='p-6'>{children}</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

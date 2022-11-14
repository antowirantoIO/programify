import Case from '@/Components/Case';
import HasNotVerified from '@/Components/HasNotVerified';
import Footer from '@/Layouts/Partials/Footer';
import ProgramifyToaster from '@/Layouts/Partials/ProgramifyToaster';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './Partials/Navbar';

export default function ApplicationLayout({ children, title }) {
    const { auth } = usePage().props;

    return (
        <div className='min-h-screen bg-white text-slate-900'>
            <Head title={title} />
            {auth?.user?.m ? (
                <div className='border-b border-solid border-white/10 bg-slate-900 py-4 text-white'>
                    <Case>
                        You are impersonate.{' '}
                        <Link className='shadow-underline-dark' method='delete' as='button' href='/carl'>
                            Leave Now!
                        </Link>
                    </Case>
                </div>
            ) : null}
            <Navbar />
            <ProgramifyToaster />
            <Toaster position='top-right' />
            <main>{children}</main>

            <Footer />
            {auth.user && !auth.user.verified && <HasNotVerified {...{ auth }} />}
        </div>
    );
}

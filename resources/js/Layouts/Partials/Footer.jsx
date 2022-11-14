import Case from '@/Components/Case';
import styles from '@/styles';
import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';

import TypeLogo from '../../Components/Logo/TypeLogo';

const defaultItemClass =
    'block capitalize text-slate-800 hover:text-primary-500 dark:text-slate-300 fade focus:text-black dark:focus:text-white';
const socials = [
    { name: 'github', url: '/github' },
    { name: 'twitter', url: '/twitter' },
    { name: 'discord', url: '/discord' },
    { name: 'youtube', url: '/youtube' },
    { name: 'telegram', url: '/telegram' },
    { name: 'facebook', url: '/facebook' },
    { name: 'instagram', url: '/instagram' },
    { name: 'whatsapp', url: 'https://wa.me/message/D2PDBCKZSUKTJ1' },
];

const FooterTitle = ({ children }) => (
    <h4 className='mb-4 font-semibold uppercase text-slate-900 dark:text-white'>{children}</h4>
);

const FooterLink = ({ children, href, ...props }) => {
    return (
        <Link {...props} href={href} className={defaultItemClass}>
            {children}
        </Link>
    );
};

export default function Footer() {
    return (
        <div className='border-t dark:border-slate-800/50 bg-white dark:bg-slate-1000 py-6 text-sm print:hidden md:py-8 lg:py-16'>
            <Case>
                <div className='grid gap-x-0 gap-y-10 sm:grid-cols-12 lg:gap-x-10'>
                    <div className='col-span-full sm:col-span-6 lg:col-span-3'>
                        <FooterTitle>Ready to binge</FooterTitle>
                        <div className='space-y-2 md:space-y-4'>
                            <FooterLink href='https://parsinta.com/series/belajar-laravel-8-dari-awal-ign7z'>
                                Laravel 8 Dari Awal
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/belajar-tailwind-css-3-xw2pe'>
                                Belajar Tailwind CSS 3
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/test-driven-laravel-ysggm'>
                                Test Driven Laravel - TDD
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/belajar-queue-di-laravel-klqu1'>
                                Belajar Laravel Queues Dari Awal
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/mari-kita-belajar-basic-react-js-1598047011'>
                                Mari Kita Belajar Basic React JS
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/datatable-dengan-laravel-inertia-1ta3l'>
                                Datatable Dengan Laravel Inertia
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/realtime-dengan-laravel-echo-pusher-mrbr7'>
                                Realtime Dengan Laravel Echo & Pusher
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series/membangun-toko-online-dengan-payment-gateway-dtmdj'>
                                Membangun Toko Online Dengan Payment Gateway
                            </FooterLink>
                            <FooterLink href='https://parsinta.com/series'>More</FooterLink>
                        </div>
                    </div>
                    <div className='col-span-6 grid grid-cols-3 gap-x-1'>
                        <div>
                            <FooterTitle>Explore</FooterTitle>
                            <div className='space-y-2 md:space-y-4'>
                                <FooterLink href='https://parsinta.com/paths'>Paths</FooterLink>
                                <FooterLink href='https://parsinta.com/series'>Series</FooterLink>
                                <FooterLink href='https://parsinta.com/topics/laravel'>Topics</FooterLink>
                                <FooterLink href='https://parsinta.com/ebooks'>Ebooks</FooterLink>
                                <FooterLink href='https://parsinta.com/premium'>Premium</FooterLink>
                                <FooterLink href='https://parsinta.com/series/is/pro'>
                                    The pro series
                                </FooterLink>
                                <FooterLink href='https://parsinta.com/series/is/popular'>popular</FooterLink>
                                <FooterLink href='https://parsinta.com/series/is/trending'>Trending</FooterLink>
                                <FooterLink href='https://parsinta.com/leaderboard'>Leaderboard</FooterLink>
                            </div>
                        </div>
                        <div>
                            <FooterTitle>Social</FooterTitle>
                            <div className='space-y-2 md:space-y-4'>
                                {socials.map((social, index) => (
                                    <a className={defaultItemClass} key={index} href={social.url}>
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <FooterTitle>Extras</FooterTitle>
                            <div className='space-y-2 md:space-y-4'>
                                <FooterLink href={'https://parsinta.com/faq'}>FAQ</FooterLink>
                                <FooterLink href={'https://parsinta.com/articles'}>Blog</FooterLink>
                                <FooterLink href={'/#package'}>Price</FooterLink>
                                <a className={defaultItemClass} href={'/#testimonials'}>
                                    Testimonials
                                </a>
                                <FooterLink href='https://parsinta.com/privacy'>Privacy policy</FooterLink>
                                <FooterLink href='https://parsinta.com/ads'>Advertisement</FooterLink>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className={defaultItemClass}
                                    href={'http://saweria.co/irsyadadl'}>
                                    Saweria (Donate)
                                </a>
                                <FooterLink href='https://parsinta.com/terms'>Terms & condition</FooterLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full sm:col-span-8 lg:col-span-3'>
                        <div className='text-sm leading-relaxed text-invert'>
                            <TypeLogo className='w-24 fill-black dark:fill-white' />
                            <div className='mb-4 mt-4 text-slate-200'>
                                <strong className='font-semibold'>Parsinta</strong>{' '}

                                adalah platform pembelajaran online yang berbentuk screencast yang ditujukan untuk para pengembang web. Melalui seri-seri seperti Laravel, Reactjs, Vuejs, Inertiajs, Html, Bootstrap, Tailwind CSS, dan banyak lagi.
                                .
                                <div className='mt-8 md:mt-16'>
                                    <a target='_blank' href='https://usefathom.com/ref/JPAHJA'>
                                        <img
                                            src='https://parsinta.com/logo/vendor/fathom-for-light.svg'
                                            alt='DMCA.com Protection Status'
                                            className='w-16 dark:hidden'
                                        />
                                        <img
                                            src='https://parsinta.com/logo/vendor/fathom-for-dark.svg'
                                            alt='DMCA.com Protection Status'
                                            className='w-16 hidden dark:block'
                                        />

                                        <div className='mt-2'>
                                            We care about your privacy, so we use{' '}
                                            <strong className='font-semibold'>fathom</strong> as our analytics.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Case>
            <div className={clsx(styles.flexCenter, 'mt-16 border-t text-slate-200 dark:border-slate-800 pt-6 md:-mb-8')}>
                <div className='relative max-w-2xl px-4'>
                    <div className='w-full text-center text-invert'>
                        <p className='mb-2'>
                            Parsinta is a Trademark of{' '}
                            <strong className='font-semibold'>Irsyad A. Panjaitan</strong>.
                        </p>
                        <strong className='font-semibold'>© Copyright 2022 Parsinta</strong>.{' '}
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://pdki-indonesia.dgip.go.id/detail/EC00202255558?type=copyright&keyword=parsinta'>
                            All rights reserved
                        </a>
                        . Yes, all of them (<strong>EC00202255558</strong>).
                    </div>
                </div>
            </div>
        </div>
    );
}

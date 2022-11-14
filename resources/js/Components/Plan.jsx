import { numberFormat } from '@/Libs/helper';
import { __ } from '@/Libs/lang';
import styles from '@/styles';
import { Link, useForm } from '@inertiajs/inertia-react';
import { IconCheck, IconLoader, IconQuestionMark } from '@tabler/icons';
import clsx from 'clsx';
import { useState } from 'react';

import Case from './Case';
import ProgramifyLink from './ProgramifyLink';

export default function Plan({ plans }) {
    const { post, processing } = useForm();
    const [hash, setHash] = useState('');
    const takePackageHandler = (planHash) => {
        setHash(planHash);
        post(`make-a-plan/${planHash}`);
    };
    return (
        <div className='py-8 lg:py-16 relative'>
            <Case>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10 xl:grid-cols-3'>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className='relative rounded-xl bg-white dark:bg-[radial-gradient(164.75%_100%_at_50%_0%,#475569_0%,#1e293b_48.73%)] p-4 text-slate-200 shadow sm:p-6 lg:p-9'>
                            {'conqueror' === plan.type ? (
                                <span className='bg-[length:400%] text-white animate-move-bg text-xs font-medium bg-gradient-to-r from-rose-500 via-orange-400 to-rose-500 px-2 py-1 lg:block hidden rounded-md absolute left-16 top-0 mt-[5.8rem]'>
                                    {__('Most popular')}
                                </span>
                            ) : null}
                            <div className='mb-2 flex items-start justify-between lg:mb-5'>
                                <span
                                    className={clsx(
                                        styles.textInvert,
                                        'dark:bg-slate-900 bg-slate-200 rounded-md px-2 py-0.5 text-xs border-none font-medium capitalize tracking-tight'
                                    )}>
                                    {plan.type}
                                </span>
                                <div className='text-center font-mono text-xl font-semibold tracking-tighter'>
                                    <span className='text-invert'>
                                        <sup>Rp</sup> {numberFormat(plan.price - 1, 0, '.', '.')}
                                    </span>

                                    <div className='text-right text-sm text-muted line-through'>
                                        {plan.price !== plan.price + plan.discounted_price
                                            ? numberFormat(plan.price + plan.discounted_price, 0, '.', '.')
                                            : '-'}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='justify-left flex'>
                                    <h3 className='sr-only'>{__('Features')}</h3>
                                    <ul
                                        role='list'
                                        className={clsx(styles.textInvert, 'grid grid-cols-1 gap-x-8 gap-y-4')}>
                                        <li className='mt-4 [&>svg]:mr-3 [&>svg]:inline [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-muted'>
                                            <IconCheck />
                                            {__('Free access for')}{' '}
                                            <strong className='ml-1 font-semibold'>
                                                {plan.for === '1 bulan'
                                                    ? __('1 month')
                                                    : plan.for === '3 bulan'
                                                    ? __('3 months')
                                                    : plan.for === '6 bulan'
                                                    ? __('6 months')
                                                    : plan.for === '1 tahun'
                                                    ? __('1 year')
                                                    : __(plan.for)}
                                            </strong>
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('Save to')}{' '}
                                            <span className='ml-1 font-mono'>
                                                {numberFormat(plan.discounted_price, 0, 0, '.')}
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('No more prank calls')}
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('No ads.')}
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('Free updates')}
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('Access to all series')}
                                        </li>
                                        <li className='flex items-center'>
                                            <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                            {__('Source code access')}
                                        </li>
                                    </ul>
                                </div>

                                <div className='mt-10 flex justify-center'>
                                    <button
                                        onClick={() => takePackageHandler(plan.hash)}
                                        disabled={processing}
                                        className={clsx(
                                            'h-10 w-full rounded-xl dark:bg-slate-600 font-semibold dark:text-white fade text-slate-900 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-500 dark:hover:text-white lg:h-12 lg:w-64',
                                            processing && 'opacity-70'
                                        )}>
                                        {processing && hash === plan.hash ? (
                                            <IconLoader className='inline animate-spin' stroke={1} />
                                        ) : (
                                            __('Buy now')
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='relative rounded-xl bg-white dark:bg-[radial-gradient(164.75%_100%_at_50%_0%,#475569_0%,#1e293b_48.73%)] p-4 text-slate-200 shadow sm:p-6 lg:p-9'>
                        <div className='mb-2 flex items-start justify-between lg:mb-5'>
                            <span
                                className={clsx(
                                    styles.textInvert,
                                    'dark:bg-slate-900 bg-slate-200 rounded-md px-2 py-0.5 text-xs border-none font-medium capitalize tracking-tight'
                                )}>
                                Ebook
                            </span>
                            <div className='text-center font-mono text-xl font-semibold tracking-tighter text-invert'>
                                <sup>Rp</sup> 370.000
                                <div className='text-right text-sm text-muted line-through'>430.000</div>
                            </div>
                        </div>
                        <div>
                            <div className='justify-left flex'>
                                <h3 className='sr-only'>{__('Features')}</h3>
                                <ul role='list' className='grid grid-cols-1 gap-x-8 gap-y-4 text-invert'>
                                    <li className='mt-4 flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('Free access for')} {__('seumur hidup')}
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('Save to')} <span className='ml-1 font-mono'>60.000</span>
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('Free updates')}
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        627 {__('pages')}
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('Support Light & Dark')}
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('100% Bahasa')}
                                    </li>
                                    <li className='flex items-center'>
                                        <IconCheck className='mr-3 inline h-4 w-4 text-muted' />
                                        {__('Including source code')}
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-10 flex justify-center'>
                                <Link
                                    href='/ebooks/belajar-laravel-lebih-dari-sekedar-fundamental'
                                    className={clsx(
                                        styles.inlineFlexCenter,
                                        'h-10 w-full rounded-xl dark:bg-slate-600 font-semibold dark:text-white fade dark:hover:bg-slate-500 text-slate-900 bg-slate-200 hover:bg-slate-300 dark:hover:text-white lg:h-12 lg:w-64'
                                    )}>
                                    {__('Buy now')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Case>

            <div className='bg-white/50 dark:bg-slate-800/50 backdrop-blur border-t dark:border-slate-700/50 -mb-8 lg:-mb-16 py-8 lg:py-20 mx-auto relative mt-10 grid place-items-center selection:bg-lime-100 selection:text-lime-700 md:mt-16'>
                <Case>
                    <div className='max-w-5xl mx-auto text-center'>
                        <>
                            <h1 className='text-3xl font-semibold text-invert'>FAQ</h1>
                            <div className='text-lg leading-relaxed text-muted md:text-xl'>
                                {__('Here are some of the most frequently asked questions')}.
                            </div>
                        </>
                        <div className='mt-10 text-left'>
                            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                                <Faq
                                    a={
                                        <>
                                            {__(
                                                'Payment is made by bank transfer and also e-wallet.For our e-wallet there are only gopay, funds, just links and Ovo.For bank transfers we have BCA and Jago'
                                            )}
                                            .{' '}
                                        </>
                                    }
                                    q={`${__('With any payment method I can pay')} ?`}
                                />
                                <Faq
                                    a={
                                        <>
                                            {__(
                                                'If you are not Indonesian, but want to keep subscribing to Parsinta.Then you can pay it through'
                                            )}{' '}
                                            <a href='https://wise.com/invite/u/c767a4' target='_blank' rel='noreferrer'>
                                                Wise
                                            </a>
                                            .{' '}
                                        </>
                                    }
                                    q={`${__('I am outside Indonesia')} ?`}
                                />
                                <Faq
                                    a={
                                        <>
                                            {__(
                                                'Yep.Everything is without anything exception, but it will be obtained according to the duration taken.So it is highly recommended to take the right steps.I.e. 1 year or lifetime'
                                            )}
                                            .{' '}
                                        </>
                                    }
                                    q={`${__('After making a payment, can I see all videos')} ?`}
                                />
                                <Faq
                                    a={
                                        <>
                                            {__(
                                                "The fastest 8 seconds, no later than 1 hour.So if you don't want to wait long.You can chat on WhatsApp before making a purchase"
                                            )}
                                            .{' '}
                                        </>
                                    }
                                    q={`${__('How long does the payment conflict do')} ?`}
                                />
                            </div>
                            <div className='mt-12 text-center'>
                                <ProgramifyLink href='/faq'>{__('Show more')}</ProgramifyLink>
                            </div>
                        </div>
                    </div>
                </Case>
            </div>
        </div>
    );
}

function Faq({ q, a }) {
    return (
        <div className='flex flex-col'>
            <div className='mb-2 flex gap-x-3 font-semibold lg:text-lg'>
                <div className={clsx(styles.flexCenter, 'w-5 h-5 rounded-full shadow mt-0.5 bg-primary-500 shrink-0')}>
                    <IconQuestionMark className='text-white w-3.5 h-3.5' />
                </div>

                <span className='text-invert'>{q}</span>
            </div>
            <div className='karteil ml-9 leading-loose text-muted prose-a:text-primary-500 prose-a:no-underline prose-a:shadow-underline-primary-dark'>
                {a}
            </div>
        </div>
    );
}

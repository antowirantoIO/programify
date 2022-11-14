import Case from '@/Components/Case';
import {
    IconBrandDiscord,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTelegram,
    IconBrandTwitter,
    IconBrandYoutube,
} from '@tabler/icons';
import React from 'react';

function SocialIntegration() {
    return (
        <div className='relative bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-900 py-8 sm:py-16 md:py-20'>
            <Case>
                <div className='mb-10 text-center'>
                    <h1 className='text-xl font-semibold dark:text-white lg:text-3xl'>
                        {'Follow our social media'}
                    </h1>
                    <div className='leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg'>
                        {'Get very fast information from several social media'}.
                    </div>
                </div>
                <ul className='grid gap-6 sm:gap-8 sm:grid-cols-2 max-w-3xl mx-auto lg:gap-12 relative'>
                    <Social
                        href='/facebook'
                        icon={<IconBrandFacebook stroke={1} />}
                        label={'Facebook'}
                        description={"Like Parsinta's facebook to get the latest updates"}
                    />
                    <Social
                        href='/discord'
                        icon={<IconBrandDiscord stroke={1} />}
                        label={'Discord'}
                        description={'If you want a discussion, please join the parsinta discord'}
                    />
                    <Social
                        href='/twitter'
                        icon={<IconBrandTwitter stroke={1} />}
                        label={'Twitter'}
                        description={"Follow Parsinta's twitter to get the latest updates"}
                    />
                    <Social
                        href='/youtube'
                        icon={<IconBrandYoutube stroke={1} />}
                        label={'You Tube'}
                        description={'Subscribe and enjoy all lessons every day on youtube'}
                    />
                    <Social
                        href='/instagram'
                        icon={<IconBrandInstagram stroke={1} />}
                        label={'Instagram'}
                        description={'Get to know the new series through our stories on Instagram'}
                    />
                    <Social
                        href='/telegram'
                        icon={<IconBrandTelegram stroke={1} />}
                        label={'Telegram'}
                        description={'Join the Parsinta telegram to get updates on each of the latest series'}
                    />
                </ul>
            </Case>
        </div>
    );
}

function Social({ href, label, description, icon }) {
    return (
        <li>
            <a href={href} target='_blank' rel='noreferrer' className='flex gap-x-4'>
                <div className='shrink-0'>
                    <div className='flex h-12 w-14 items-center justify-center rounded-lg border-t dark:border-slate-600 border-slate-100 bg-slate-50 dark:bg-slate-800 dark:text-white shadow dark:ring-1 dark:ring-slate-900'>
                        {icon}
                    </div>
                </div>
                <div>
                    <h4 className='dark:text-white font-semibold'>{label}</h4>
                    <div className='text-sm text-slate-500 dark:text-slate-400'>{description}</div>
                </div>
            </a>
        </li>
    );
}

export default SocialIntegration;

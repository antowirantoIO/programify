import styles from '@/styles';
import {
    IconBrandBootstrap,
    IconBrandInertia,
    IconBrandJavascript,
    IconBrandLaravel,
    IconBrandNextjs,
    IconBrandPhp,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandVue,
    IconChevronRight,
} from '@tabler/icons';
import clsx from 'clsx';
import React from 'react';

import Case from './Case';

const frameworks = [
    {
        name: 'PHP',
        slug: 'php',
        description: 'A general-purpose scripting language geared toward web development',
        logo: <IconBrandPhp stroke={1} className='text-indigo-300' />,
    },
    {
        name: 'Laravel',
        slug: 'laravel',
        description: 'PHP web application framework with expressive, elegant syntax.',
        logo: <IconBrandLaravel stroke={1} className='text-red-500' />,
    },
    {
        name: 'Inertia',
        slug: 'inertia',
        description: 'Build single-page apps, without building an API.',
        logo: <IconBrandInertia stroke={1} className='text-violet-500' />,
    },
    {
        name: 'Javascript',
        slug: 'js',
        description: 'A programming language that is one of the core technologies of the World Wide Web.',
        logo: <IconBrandJavascript stroke={1} className='text-yellow-400' />,
    },
    {
        name: 'Next.js',
        slug: 'nextjs',
        description: 'Full-featured React framework with great developer experience.',
        logo: <IconBrandNextjs stroke={1} className='text-black' />,
    },
    {
        name: 'React.js',
        slug: 'reactjs',
        description: 'A library for building user interfaces based on UI components.',
        logo: <IconBrandReact stroke={1} className='text-cyan-400' />,
    },
    {
        name: 'Vue.js',
        slug: 'vue',
        description: 'JavaScript framework for building user interfaces and single-page applications.',
        logo: <IconBrandVue stroke={1} className='text-emerald-500' />,
    },
    {
        name: 'Tailwind CSS',
        slug: 'tailwind-css',
        description: 'Rapidly build modern websites without ever leaving your HTML.',
        logo: <IconBrandTailwind stroke={1} className='text-sky-500' />,
    },
    {
        name: 'Bootstrap',
        slug: 'bootstrap',
        description: 'CSS framework directed at responsive, mobile-first front-end web development.',
        logo: <IconBrandBootstrap stroke={1} className='text-indigo-500' />,
    },
];
export default function FrameworkGuide() {
    return (
        <section id='framework' className='relative py-6 md:py-16'>
            <Case>
                <div className='relative mx-auto mb-12 max-w-3xl text-center'>
                    <h1 className='mb-2 inline-block text-xl font-semibold capitalize text-slate-900 md:text-3xl'>
                        Start by choosing topics
                    </h1>
                    <div className='mx-auto max-w-xl text-xl text-slate-500'>

                            If you are confused about which series to choose, you can see a list of series that have been grouped into certain topics
                        .
                    </div>
                </div>
                <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
                    {frameworks.map((framework, i) => (
                        <li key={i} className='relative flex flex-row-reverse'>
                            <div className='peer group ml-6 flex-auto'>
                                <h4 className='mb-2 font-semibold leading-6 text-slate-900'>
                                    <a
                                        className='before:absolute before:-inset-3 before:rounded-2xl'
                                        href={`/topics/${framework.slug}`}>
                                        {framework.name}
                                        <IconChevronRight
                                            stroke={3}
                                            className='ml-3 -mt-px inline w-3 overflow-visible text-slate-400 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100'
                                        />
                                    </a>
                                </h4>
                                <p className='text-sm leading-6 text-slate-700'>{framework.description}</p>
                            </div>
                            <div
                                className={clsx(
                                    styles.flexCenter,
                                    'h-14 w-14 flex-none overflow-hidden rounded-full bg-white shadow ring-1 ring-slate-900/5'
                                )}>
                                {framework.logo}
                            </div>
                            <div className='peer-hover:opacity-100/50 absolute -inset-3 -z-10 rounded-2xl bg-slate-50 opacity-0' />
                        </li>
                    ))}
                </ul>
            </Case>
        </section>
    );
}

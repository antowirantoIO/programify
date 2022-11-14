import styles from '@/styles';
import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

import Image from './Image';

export default function ArticleBlock({ lightAndDark = false, article }) {
    return (
        <li className='overflow-hidden flex flex-col relative h-full'>
            <Link className={'flex-1'} href={`/articles/${article?.slug}`} aria-label={article?.title}>
                {article?.picture ? (
                    <Image
                        width='640'
                        height='360'
                        className='aspect-[6/3.33] rounded w-full object-cover object-center shadow-none duration-500 ease-in-out group-hover:shadow-lg dark:brightness-[.9]'
                        src={article?.picture}
                        alt={article?.title}
                        caption={article?.title}
                    />
                ) : null}
                <div className='mt-2.5 lg:mt-3.5 font-medium flex gap-x-2 text-xs md:text-sm flex flex-wrap items-center gap-x-1.5 md:gap-x-3 [&>span]:text-primary-600 [&>span]:hover:text-primary-700'>
                    {article?.tags?.map((tag, i) => (
                        <span key={i}>{tag.name}</span>
                    ))}
                </div>
                <h2
                    className={clsx(
                        lightAndDark && 'dark:text-slate-200',
                        'text-slate-800 max-w-sm text-base font-medium leading-tight mt-2.5 leading-none lg:mt-3.5'
                    )}>
                    {article?.title}
                </h2>
                <div
                    className={clsx(
                        lightAndDark && 'dark:text-slate-400',
                        'text-slate-500 leading-relaxed md:line-clamp-3 mt-2.5 text-sm lg:mt-3.5'
                    )}>
                    {article.teaser}
                </div>
            </Link>
            <div className='flex items-center gap-x-3 mt-2.5 lg:mt-3.5'>
                <div className='flex-shrink'>
                    <Image
                        width='40'
                        height='40'
                        className='w-10 h-10 rounded-full grayscale'
                        src={article.user.picture}
                    />
                </div>
                <div>
                    <div className={clsx(lightAndDark && 'dark:text-slate-200', 'text-slate-800')}>
                        {article?.user.name}
                    </div>
                    <div className={clsx(styles.textMuted, 'text-sm')}>{article?.created_at}</div>
                </div>
            </div>
        </li>
    );
}

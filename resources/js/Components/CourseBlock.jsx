import DefaultButton from '@/Components/DefaultButton';
import Grid from '@/Components/Grid';
import Image from '@/Components/Image';
import styles from '@/styles';
import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function CourseBlock(props) {
    const { className = '', is = null, lightAndDark = false, series } = props;
    return series.length ? (
        <Grid className={className}>
            {series.map((item, index) => (
                <li key={index} className={'group'}>
                    <div className='text-left focus:outline-none'>
                        <Link href={`/series/${item.slug}`}>
                            <Image
                                className={clsx(
                                    lightAndDark && 'dark:brightness-[.8]',
                                    'mb-1 w-full h-full rounded transition-shadow duration-500 ease-in-out shadow group-hover:shadow-lg'
                                )}
                                width='640'
                                height='360'
                                src={item.picture}
                                alt={item.name}
                                caption={item.name}
                            />
                        </Link>
                        <div className='mt-2.5 lg:mt-3 flex items-center justify-between'>
                            <div className='font-medium flex gap-x-2 text-xs md:text-sm flex flex-wrap items-center gap-x-1.5 md:gap-x-3 [&>a]:text-primary-600 [&>a]:hover:text-primary-700'>
                                {item?.tags?.map((tag, i) => (
                                    <Link href={`/topics/${tag.slug}`} key={i}>
                                        {tag.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link
                            href={`/series/${item.slug}`}
                            className={'mt-2.5 lg:mt-3 flex gap-x-8 flex-row-reverse justify-between'}>
                            {item.status === 'done' ? (
                                <span className='bg-emerald-500 w-px h-6 block' />
                            ) : (
                                <span className='bg-orange-500 w-px h-6 block' />
                            )}
                            <div>
                                <span className='block leading-tight tracking-tighter'>
                                    <span
                                        className={clsx(
                                            lightAndDark && 'dark:text-white',
                                            'text-slate-800 font-medium'
                                        )}>
                                        {item.name}
                                    </span>
                                </span>
                                <span
                                    className={clsx(
                                        lightAndDark && 'dark:text-slate-400',
                                        'mt-2.5 lg:mt-3 flex items-center space-x-2 text-slate-500 text-xs sm:text-sm'
                                    )}>
                                    <span>{item.videos_count} Episodes</span>
                                    <span>{item.hours} mins</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </li>
            ))}
        </Grid>
    ) : (
        <div className='max-w-xl'>
            <div className={clsx(styles.textInvert, styles.whiteInvertBackground, 'rounded-xl relative p-6')}>
                {'There are currently no series that are categorized as ' . is }{' '}
                <div className='mt-5'>
                    <DefaultButton sky isAnchor href='/series'>
                        Goto Series
                    </DefaultButton>
                </div>
            </div>
        </div>
    );
}

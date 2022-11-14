import ArticleBlock from '@/Components/ArticleBlock';
import Case from '@/Components/Case';
import CourseBlock from '@/Components/CourseBlock';
import DefaultButton from '@/Components/DefaultButton';
import FrameworkGuide from '@/Components/FrameworkGuide';
import Grid from '@/Components/Grid';
import Image from '@/Components/Image';
import Meta from '@/Components/Meta';
import ProgramifyLink from '@/Components/ProgramifyLink';
import Plan from '@/Components/Plan';
import ApplicationLayout from '@/Layouts/ApplicationLayout';
import SocialIntegration from '@/Pages/Partials/SocialIntegration';
import Testimonial from '@/Pages/Partials/Testimonial';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home(props) {
    const { series, auth, seriesRecentlyUpdated, articles, plans, lifetime, testimonials, ebook } = props;
    return (
        <>
            <Meta
                {...{
                    title: 'Parsinta',
                    description:
                        'Tingkatkan kemampuan Anda dengan parsinta dengan mendorong keterampilan Anda ke tingkat berikutnya, melalui seri-seri yang ada disini seperti Laravel, Vue, React, Tailwind CSS dan banyak lagi.',
                    image: 'https://parsinta.com/og-image.png',
                }}
            />
            <div className='dark:bg-grid-primary-900/50 relative bg-grid-primary-100 dark:bg-slate-1000 border-t dark:border-slate-800/50 bg-white py-8 lg:py-40 mb-8 lg:mb-16'>
                <div className='bg-gradient-to-r dark:from-primary-900/10 dark:via-slate-1000 dark:to-slate-1000 from-primary-400/10 via-white to-slate-200 inset-0 absolute' />
                <div className='bg-gradient-to-b dark:from-slate-1000 dark:via-transparent dark:to-slate-1000 from-white via-transparent to-white inset-0 absolute' />
                <Case>
                    <div className='relative flex h-full flex-col justify-between'>
                        <div className='flex-1'>
                            <>
                                <h1 className='text-white max-w-4xl text-xl font-bold tracking-tighter text-invert sm:text-3xl md:text-[4rem] leading-1 lg:leading-[0.9]'>
                                    Tingkatkan keterampilan Anda
                                </h1>
                                <h2 className='text-lg sm:text-xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-600 dark:via-sky-300 via-sky-500 dark:to-cyan-400 to-cyan-500 text-transparent bg-clip-text -mt-1 md:mt-3 pb-2 block'>
                                    <Typewriter
                                        words={[
                                            'more than now',
                                            'with the practical',
                                            'screencast,',
                                            'articles,',
                                            'ebooks,',
                                            'and much more.',
                                            'and the most important',
                                            'to the next level.',
                                        ]}
                                        loop={1}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={50}
                                        deleteSpeed={20}
                                        delaySpeed={1000}
                                    />
                                </h2>
                                <p className='max-w-2xl text-muted lg:text-xl leading-relaxed mt-2 md:mt-4'>
                                    {
                                        'Tingkatkan kemampuan Anda dengan parsinta dengan mendorong keterampilan Anda ke tingkat berikutnya, melalui seri-seri di sini seperti'
                                    }{' '}
                                    <ProgramifyLink
                                        className='decoration-3 underline-offset-[-2px]'
                                        href='/topics/laravel'>
                                        Laravel
                                    </ProgramifyLink>
                                    ,{' '}
                                    <ProgramifyLink className='decoration-3 underline-offset-[-2px]' href='/topics/vue'>
                                        Vue
                                    </ProgramifyLink>
                                    ,{' '}
                                    <ProgramifyLink
                                        className='decoration-3 underline-offset-[-2px]'
                                        href='/topics/reactjs'>
                                        React
                                    </ProgramifyLink>
                                    ,{' '}
                                    <ProgramifyLink
                                        className='decoration-3 underline-offset-[-2px]'
                                        href='/topics/tailwind-css'>
                                        Tailwind CSS
                                    </ProgramifyLink>{' '}
                                    {'dan'}{' '}
                                    <ProgramifyLink className='decoration-3 underline-offset-[-2px]' href='/series'>
                                        {'Banyak lagi'}
                                    </ProgramifyLink>
                                    .
                                </p>
                            </>
                        </div>
                        <div className='mt-4 flex gap-x-2 md:mt-16'>
                            <DefaultButton blue href={`/series`}>
                                {'Browse series'}
                            </DefaultButton>
                            <DefaultButton primary href={`/articles`}>
                                {'Read articles'}
                            </DefaultButton>
                        </div>
                    </div>
                </Case>
            </div>

            {/* <Case>
                {seriesRecentlyUpdated.length ? (
                    <div className='mb-16'>
                        <h4 className='text-xl font-semibold capitalize'>{'Recently updated'}</h4>
                        <p className='text-xs text-slate-500'>
                            {"Curious what's new at Parsinta? The following series have been recently updated"}.
                        </p>
                        <CourseBlock className='mt-6' {...{ series: seriesRecentlyUpdated }} />
                    </div>
                ) : null}
                <div className='mb-6'>
                    <h4 className='text-xl font-semibold capitalize'>{'Recently added'}</h4>
                    <p className='text-xs text-slate-500'>
                        {'This is a list of recently added series in Parsinta'}
                    </p>
                </div>
                <CourseBlock series={series} />
                <div className='mt-10 lg:mt-12'></div>
                <div className='flex justify-center md:justify-end'>
                    <DefaultButton blue href='/series?page=2' color='black'>
                        {'Load more'}
                    </DefaultButton>
                </div>
            </Case> */}

            {/* <div className='bg-grid-slate-100 relative'>
                <div className='absolute inset-0 z-0 bg-gradient-to-b from-white to-white via-transparent' />
                <section className='relative mt-6 border-solid py-6 md:mt-16 md:py-16'>
                    <Case>
                        <div className='relative flex justify-center text-center mb-10'>
                            <div className='max-w-xl'>
                                <h1 className='mb-2 inline-block text-xl font-semibold capitalize text-slate-900 md:text-3xl'>
                                    {'Latest articles'}
                                </h1>
                                <p className='leading-relaxed text-slate-500 md:text-lg'>
                                    {
                                        "If you're short on time, and want to make the most of it, we've provided you with some articles that you might find useful."
                                    }
                                </p>
                            </div>
                        </div>
                        <Grid>
                            {articles.map((article) => (
                                <ArticleBlock key={article.slug} article={article} />
                            ))}
                        </Grid>
                        <div className='relative mt-6 flex justify-center md:justify-end'>
                            <DefaultButton rose href='/articles'>
                                {'Load more'}
                            </DefaultButton>
                        </div>
                    </Case>
                </section>
                <FrameworkGuide />
            </div> */}
            {/* <section className='py-6 md:py-16'>
                <Case>
                    <div className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
                        <Link href={route('ebooks.show', ebook.slug)}>
                            <Image width='854' height='480' className='rounded-lg' src={ebook.og_image} alt='og' />
                        </Link>
                        <div className='flex h-full flex-col'>
                            <div className='flex-1'>
                                <h1 className='mb-2 text-lg font-bold leading-[1.3] lg:mb-3 lg:text-2xl'>
                                    {ebook.title}
                                </h1>
                                <div className='mt-6 space-y-5 rounded-lg leading-relaxed text-slate-600'>
                                    <div className='relative rounded-lg bg-indigo-50 p-4'>
                                        <div>
                                            Ebook akan terus diperbarui jika ada perubahan yang signifikan pada
                                            framework yang sedang digunakan. Dan bagi yang sudah membelinya akan
                                            diberikan secara{' '}
                                            <strong className='font-semibold text-black'>gratis</strong>.
                                        </div>
                                    </div>
                                    <p>
                                        Jumlah halaman yang terkandung di dalam ebook ini ada sebanyak{' '}
                                        <strong className='rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-black'>
                                            {ebook.page_number}
                                        </strong>{' '}
                                        yang sudah di bundle dengan source code. Ebook ini juga mempunyai dua versi
                                        yaitu{' '}
                                        <strong className='rounded bg-black px-2 py-1 text-xs font-semibold text-white'>
                                            dark
                                        </strong>{' '}
                                        dan{' '}
                                        <strong className='rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-black'>
                                            light
                                        </strong>{' '}
                                        , sehingga para pembaca yang tidak suka dengan cahaya dapat dengan nyaman
                                        membacanya.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <DefaultButton blue href={route('ebooks.show', ebook.slug)}>
                                    {'Details'}
                                </DefaultButton>
                            </div>
                        </div>
                    </div>
                </Case>
            </section> */}
            {/* <Testimonial {...{ testimonials }} /> */}

            {/* <section
                className='relative bg-slate-50 bg-grid-slate-500/5 border-b dark:border-slate-800 dark:bg-slate-1000 pt-6 md:pt-16'
                id='pricing'>
                <div className='bg-gradient-to-b from-transparent via-slate-50 to-slate-50 dark:via-slate-900 dark:to-slate-900 dark:from-transparent inset-0 absolute' />
                <Case>
                    <div className='relative flex justify-center text-center'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='mb-2 inline-block text-xl font-semibold capitalize text-invert md:text-3xl'>
                                {'Get unlimited access'}
                            </h1>
                            <p className='leading-relaxed text-muted md:text-lg'>
                                {
                                    'If you enjoy Parsinta, you will save a lot of money buying Conqueror or even Lifetime packages. Because the price difference is very significant than paying monthly'
                                }
                                .
                            </p>
                        </div>
                    </div>
                </Case>
                <Plan {...{ auth, plans, lifetime }} />
            </section>
            <SocialIntegration /> */}
        </>
    );
}

Home.layout = (page) => <ApplicationLayout {...{ children: page }} />;

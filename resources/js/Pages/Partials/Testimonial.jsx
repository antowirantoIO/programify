import Case from '@/Components/Case';
import Image from '@/Components/Image';
import StaticMarkdownForHead from '@/Components/StaticMarkdownForHead';
import styles from '@/styles';
import clsx from 'clsx';
import React, { useState } from 'react';

export default function Testimonial({ testimonials }) {
    const [quote, setQuote] = useState(testimonials[Math.floor(Math.random() * 33)]);
    return (
        <section id='testimonials' className='relative bg-slate-1000 bg-grid-slate-500/5 py-6 lg:py-16'>
            <div className='bg-gradient-to-b to-transparentvia-slate-900 from-slate-900 to-transparent inset-0 absolute' />
            <Case>
                <div className='mx-auto mb-8 max-w-3xl text-center relative'>
                    <h1 className='mb-2 inline-block text-xl font-semibold capitalize text-white md:text-3xl'>
                        Testimonials
                    </h1>
                    <StaticMarkdownForHead options={{ darkBackground: true }}>
                        {
                            'Developers, teachers, and even lecturers have recommended Parsinta. Prove it yourself, and seriously improve your skills and see the process in action'
                        }
                        .
                    </StaticMarkdownForHead>
                </div>
                <div
                    className={clsx(
                        styles.flexCenter,
                        'flex-col relative gap-10 rounded-lg px-4 py-6 md:flex-row lg:py-20'
                    )}>
                    <div className='w-full lg:w-2/4'>
                        <div className='flex flex-col items-center lg:px-16'>
                            <div className='mb-5 flex-shrink-0'>
                                {quote.avatar ? (
                                    <Image
                                        loading='lazy'
                                        width='64'
                                        height='64'
                                        className='w-16 !rounded-full border border-slate-300 object-cover object-top'
                                        src={quote.avatar}
                                        alt={quote.name}
                                    />
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        className='icon-user-circle w-16 object-cover'>
                                        <circle cx={12} cy={12} r={10} className='fill-slate-500' />
                                        <path
                                            className='fill-slate-300'
                                            d='M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'
                                        />
                                    </svg>
                                )}
                            </div>
                            <div className='text-center'>
                                <h1 className='mb-2 text-xl font-medium leading-none text-white md:text-2xl'>
                                    {quote.name}
                                </h1>
                                <q className='text-base leading-8 text-slate-100 selection:bg-slate-700 selection:text-white md:text-lg'>
                                    {quote.quotes}
                                </q>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.flexCenter, 'w-full flex-wrap gap-4 sm:gap-6 lg:w-2/4 lg:gap-10')}>
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={index}
                                onClick={() => setQuote(testimonial)}
                                className='flex h-8 w-8 relative overflow-hidden rounded-full border border-slate-800 fade focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600'>
                                {testimonial.avatar ? (
                                    <Image
                                        loading='lazy'
                                        width='32'
                                        height='32'
                                        className='h-8 w-8 rounded-full object-cover object-top'
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                ) : (
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-full'>
                                        <circle cx={12} cy={12} r={10} className='fill-slate-500' />
                                        <path
                                            className='fill-slate-300'
                                            d='M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </Case>
        </section>
    );
}

import React from 'react';
import SeriesBlockThumbnail from '@/Components/SeriesBlockThumbnail';
import SeriesBlockTitle from '@/Components/SeriesBlockTitle';
import SeriesBlockCard from '@/Components/SeriesBlockCard';

import { __ } from '@/Lang';

export default function FeaturedSeries() {
    return (
        <section className="!max-w-none md:pt-[20px] md:pb-[35px]">
            <div className="featured-series mx-auto overflow-hidden">
                <div className="container">
                    <div
                        className="absolute inset-0 hidden w-full lg:block"
                        style={{
                            height: '700px',
                            background:
                                'rgba(0, 0, 0, 0) linear-gradient(transparent, rgb(29, 46, 74) 80%, transparent) repeat scroll 0% 0%',
                        }}
                    />
                    <img
                        src="https://laracasts.com/images/home/light-lines.svg"
                        alt=""
                        className="absolute hidden opacity-75 lg:inline-block"
                        style={{ top: '-75px', width: '82%', left: '9%' }}
                    />
                </div>
                <div className="mb-4 flex justify-center text-center md:mx-auto md:w-2/3 xl:w-1/2">
                    <header className="container mx-auto mb-4 max-w-[700px] pb-4 text-center text-white">
                        <h3 className="inherits-color relative z-10 text-5xl font-semibold leading-tight">
                            {__('home.featured_series')}
                        </h3>
                        <p className="inherits-color mt-4 font-medium">
                            {__('home.featured_series_description')}
                        </p>
                    </header>
                </div>
                <div
                    className="mx-auto md:flex md:justify-center md:gap-5 mt-4"
                    style={{ maxWidth: '1350px' }}
                >
                    <div className="mb-4 flex flex-1 flex-col gap-4 md:mb-0 lg:max-w-[370px]">
                        <div className="flex gap-4">
                            <SeriesBlockThumbnail
                                series={{
                                    title: 'Neovim as a PHP and JavaScript IDE',
                                    url: '/series/neovim-as-a-php-ide',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png?tr=w-232',
                                    class_category: 'is-tooling',
                                }}
                            />
                            <SeriesBlockThumbnail
                                series={{
                                    title: 'Serverless Laravel',
                                    url: '/series/serverless-laravel',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/serverless-laravel.png?tr=w-232',
                                    class_category: 'is-tooling',
                                }}
                            />
                        </div>
                        <SeriesBlockCard
                            series={{
                                title: 'Laravel 8 From Scratch',
                                url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                description:
                                    'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                gradient:
                                    'bg-gradient-to-l from-languages-light to-languages',
                                difficulty: 'Intermediate',
                                lessons: 17,
                                duration: '2h 30m',
                            }}
                        />
                        <SeriesBlockCard
                            series={{
                                title: 'Laravel 8 From Scratch',
                                url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                description:
                                    'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                gradient:
                                    'bg-gradient-to-l from-languages-light to-languages',
                                difficulty: 'Beginner',
                                lessons: 17,
                                duration: '2h 30m',
                            }}
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 lg:max-w-[370px]">
                        <SeriesBlockTitle
                            series={{
                                title: 'Developing Serverless Functions in Laravel',
                                url: '/series/developing-serverless-functions-in-laravel',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/developing-serverless-functions.png?tr=w-192',
                                class_category: 'is-tooling',
                                lessons: 17,
                                hours: '4 hr 58 mnt',
                            }}
                        />
                        <div
                            className="flex flex-col justify-between gap-4"
                            style={{ height: '309px' }}
                        >
                            <SeriesBlockTitle
                                series={{
                                    title: 'Svelte Crash Course',
                                    url: '/series/svelte-crash-course',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/svelte-crash-course.png?tr=w-192',
                                    class_category: 'is-frameworks',
                                    lessons: 17,
                                    hours: '4 hr 58 mnt',
                                }}
                            />
                            <div className="flex gap-4">
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'Livewire Uncovered',
                                        url: '/series/livewire-uncovered',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/livewire-uncovered.png?tr=w-232',
                                        class_category: 'is-frameworks',
                                    }}
                                />
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'Neovim as a PHP and JavaScript IDE',
                                        url: '/series/neovim-as-a-php-ide',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png?tr=w-232',
                                        class_category: 'is-tooling',
                                    }}
                                />
                            </div>
                        </div>
                        <SeriesBlockCard
                            series={{
                                title: 'Laravel 8 From Scratch',
                                url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                description:
                                    'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                gradient:
                                    'bg-gradient-to-l from-languages-light to-languages',
                                difficulty: 'Advanced',
                                lessons: 17,
                                duration: '2h 30m',
                            }}
                        />
                    </div>
                    <div className="hidden flex-1 flex-col gap-4 xl:flex xl:max-w-[370px] widescreen:hidden">
                        <SeriesBlockCard
                            series={{
                                title: 'Laravel 8 From Scratch',
                                url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                description:
                                    'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                gradient:
                                    'bg-gradient-to-l from-languages-light to-languages',
                                difficulty: 'Beginner',
                                lessons: 17,
                                duration: '2h 30m',
                            }}
                        />
                        <SeriesBlockCard
                            series={{
                                title: 'Laravel 8 From Scratch',
                                url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                thumbnail:
                                    'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                description:
                                    'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                gradient:
                                    'bg-gradient-to-l from-languages-light to-languages',
                                difficulty: 'Beginner',
                                lessons: 17,
                                duration: '2h 30m',
                            }}
                        />
                        <div className="flex gap-4">
                            <SeriesBlockThumbnail
                                series={{
                                    title: 'Wordle Workshop',
                                    url: '/series/',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/wordle-workshop.png?tr=w-232',
                                    class_category: 'is-languages',
                                }}
                            />
                            <SeriesBlockThumbnail
                                series={{
                                    title: 'NuxtJS Crash Course',
                                    url: '/series/',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/nuxt-js-crash-course.png?tr=w-232"',
                                    class_category: 'is-frameworks',
                                }}
                            />
                        </div>
                    </div>
                    <div className="hidden flex-1 flex-col gap-4 widescreen:flex widescreen:max-w-[550px]">
                        <div className="flex gap-4">
                            <SeriesBlockCard
                                series={{
                                    title: 'Laravel 8 From Scratch',
                                    url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                    description:
                                        'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                    gradient:
                                        'bg-gradient-to-l from-languages-light to-languages',
                                    difficulty: 'Beginner',
                                    lessons: 17,
                                    duration: '2h 30m',
                                }}
                            />
                            <div className="flex flex-col gap-4">
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'Wordle Workshop',
                                        url: '/series/',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/wordle-workshop.png?tr=w-232',
                                        class_category: 'is-languages',
                                    }}
                                />
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'NuxtJS Crash Course',
                                        url: '/series/',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/nuxt-js-crash-course.png?tr=w-232"',
                                        class_category: 'is-frameworks',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <SeriesBlockCard
                                series={{
                                    title: 'Laravel 8 From Scratch',
                                    url: 'https://laracasts.com/series/laravel-8-from-scratch',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
                                    description:
                                        'Learn the latest version of Laravel, the PHP framework for web artisans.',
                                    gradient:
                                        'bg-gradient-to-l from-languages-light to-languages',
                                    difficulty: 'Beginner',
                                    lessons: 17,
                                    duration: '2h 30m',
                                }}
                            />
                            <div className="flex flex-col gap-4">
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'Wordle Workshop',
                                        url: '/series/',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/wordle-workshop.png?tr=w-232',
                                        class_category: 'is-languages',
                                    }}
                                />
                                <SeriesBlockThumbnail
                                    series={{
                                        title: 'NuxtJS Crash Course',
                                        url: '/series/',
                                        thumbnail:
                                            'https://ik.imagekit.io/laracasts/series/thumbnails/nuxt-js-crash-course.png?tr=w-232"',
                                        class_category: 'is-frameworks',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <SeriesBlockThumbnail
                                series={{
                                    title: 'Wordle Workshop',
                                    url: '/series/',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/wordle-workshop.png?tr=w-232',
                                    class_category: 'is-languages',
                                }}
                            />
                            <SeriesBlockTitle
                                series={{
                                    title: 'Developing Serverless Functions in Laravel',
                                    url: '/series/developing-serverless-functions-in-laravel',
                                    thumbnail:
                                        'https://ik.imagekit.io/laracasts/series/thumbnails/developing-serverless-functions.png?tr=w-192',
                                    class_category: 'is-tooling',
                                    lessons: 17,
                                    hours: '4 hr 58 mnt',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import SeriesBlock from './SeriesBlock';

export default function CreatorSeries() {
    const series = [
        {
            title: 'Laravel 8 From Scratch',
            thumbnail:
                'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
            instructor: {
                name: 'Jeffrey Way',
                avatar: 'https://ik.imagekit.io/laracasts/instructors/1770.jpeg?tr=w-200,q-50',
            },
            isCreatorSeries: true,
            url: 'https://laracasts.com/series/laravel-8-from-scratch',
            description:
                "You've probably heard of Statamic  by now — that rebellious little Laravel-powered content management system that refuses to use databases. Well, it's pretty grown up now, and in this series we're going to learn how Statamic can help you build highly-scalable websites quickly and efficiently,  how to run on a database.",
            lessons: 10,
            duration: '2h 30m',
            difficulty: 'Beginner',
        },
    ];
    return (
        <section className="md:mt-8 md:pt-8">
            <div className="container" style={{ maxWidth: '1166px' }}>
                <header className="container mx-auto mb-4 max-w-[700px] pb-4 text-center text-white">
                    <img
                        loading="lazy"
                        className="lazy absolute hidden translate-x-[20%] lg:inline-block lg:w-[550px] lazyloaded"
                        src="https://laracasts.com/images/sale/2022/large-prism.svg"
                        alt="Laracasts triangle, as a prism."
                        style={{ marginTop: '-20px' }}
                    />
                    <h3 className="inherits-color relative z-10 text-5xl font-semibold leading-tight">
                        <span
                            className="bg-gradient-to-r from-[#49dbff] to-[#0587eb] bg-clip-text"
                            style={{ WebkitTextFillColor: 'transparent' }}
                        >
                            Produced By Creators.
                        </span>
                    </h3>
                    <p className="inherits-color mt-4 font-medium">
                        Don't miss out on our special CreatorSeries courses.
                        Want to learn the ins and outs of tools...from the very
                        people who created them?
                    </p>
                </header>
                {/**/}
                <SeriesBlock series={series[0]} />
                <SeriesBlock series={series[0]} className="mt-8" />
            </div>
        </section>
    );
}

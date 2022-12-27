import SeriesBlock from '@/Components/SeriesBlock';
import FrontLayout from '@/Layouts/AppLayout';
import React from 'react';

const Index = () => {
    const series = [
        {
            title: 'Laravel 8 From Scratch',
            thumbnail:
                'https://ik.imagekit.io/laracasts/series/thumbnails/svg/learn-statamic-with-jack.svg',
            instructor: {
                name: 'Jeffrey Way',
                avatar: 'https://ik.imagekit.io/laracasts/instructors/1770.jpeg?tr=w-200,q-50',
            },
            isCreatorSeries: false,
            url: 'https://laracasts.com/series/laravel-8-from-scratch',
            description:
                "You've probably heard of Statamic  by now — that rebellious little Laravel-powered content management system that refuses to use databases. Well, it's pretty grown up now, and in this series we're going to learn how Statamic can help you build highly-scalable websites quickly and efficiently,  how to run on a database.",
            lessons: 10,
            duration: '2h 30m',
            difficulty: 'Beginner',
        },
    ];
    return (
        <>
            <section>
                <div className="container mt-6 max-w-md text-center">
                    <h1 className="mb-6 text-5xl leading-none text-white">
                        Explore By Topic
                    </h1>
                    <p className="text-grey-700">
                        {' '}
                        All Laracasts series are categorized into various{' '}
                        <span className="text-blue">//topics</span>. This should
                        provide you with an alternate way to decide what to
                        learn next, whether it be a particular framework,
                        language, or tool.{' '}
                    </p>
                </div>
            </section>
            <section>
                <header className="container mx-auto mb-4 max-w-[700px] pb-4 text-center text-white">
                    <h3 className="inherits-color relative z-10 text-5xl font-semibold leading-tight">
                        Currently Featured
                    </h3>
                    <p className="inherits-color mt-4 font-medium">
                        Here's what we're particularly excited to share with
                        you!
                    </p>
                </header>
                <SeriesBlock series={series[0]} />
                <SeriesBlock series={series[0]} className="mt-8" />
            </section>
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <FrontLayout title="Series">{page}</FrontLayout>
);

export default Index;

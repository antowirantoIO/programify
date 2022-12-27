import React from 'react';
import FeaturedSeries from '@/Components/FeaturedSeries';
import FrontLayout from '@/Layouts/AppLayout';
import CreatorSeries from '@/Components/CreatorSeries';
import Testimonials from '@/Components/Testimonials';
import Subscriptions from '@/Components/Subscriptions';
import TopicsMenu from '@/Components/TopicsMenu';
import TopicsCard from '@/Components/TopicsCard';
import InstructorsCard from '@/Components/InstructorsCard';

import { __ } from '@/Lang';

const Welcome = () => {
    const topicsMenu = [
        {
            name: 'All Topics',
            url: '/browse/all',
            active: true,
        },
        {
            name: 'DevOps',
            url: '/browse/devops',
            active: false,
        },
        {
            name: 'Frameworks',
            url: '/browse/frameworks',
            active: false,
        },
        {
            name: 'Languages',
            url: '/browse/languages',
            active: false,
        },
        {
            name: 'Techniques',
            url: '/browse/techniques',
            active: false,
        },
        {
            name: 'Testing',
            url: '/browse/testing',
            active: false,
        },
        {
            name: 'Tooling',
            url: '/browse/tooling',
            active: false,
        },
    ];
    const topics = [
        {
            name: 'AlpineJS',
            url: 'https://laracasts.com/topics/alpine-js',
            icon: 'https://laracasts.com/images/topics/icons/alpine-logo.svg',
            series: 7,
            videos: 86,
        },
        {
            name: 'AWS',
            url: 'https://laracasts.com/topics/aws',
            icon: 'https://laracasts.com/images/topics/icons/aws-logo.svg',
            series: 0,
            videos: 0,
        },
        {
            name: 'Blade',
            url: 'https://laracasts.com/topics/blade',
            icon: 'https://laracasts.com/images/topics/icons/blade-logo.svg',
            series: 0,
            videos: 0,
        },
        {
            name: 'Cypress',
            url: 'https://laracasts.com/topics/cypress',
            icon: 'https://laracasts.com/images/topics/icons/cypress-logo.svg',
            series: 0,
            videos: 0,
        },
    ];
    const instructors = [
        {
            name: 'Jeffrey Way',
            job_title: 'Founder of Laracasts',
            gradient: 'bg-gradient-testing',
            greeting:
                "Hi there! I'm Jeffrey, the founder of Laracasts. I've been a professional web developer for over 15 years, and I've been teaching web development for over 10 years. I'm passionate about helping you level up your skills, and I'm excited to have you on board!",
            images: 'https://ik.imagekit.io/laracasts/instructors/1770.jpeg?tr=w-200,q-50',
            twitter: 'https://twitter.com/jeffrey_way',
            github: 'https://github.com/JeffreyWay',
            series: [
                {
                    title: 'Laravel 8 From Scratch',
                    url: 'https://laracasts.com/series/laravel-8-from-scratch',
                    thumbnail:
                        'https://ik.imagekit.io/laracasts/series/thumbnails/php-for-beginners.png?tr=w-90,q-50',
                },
            ],
        },
    ];
    return (
        <>
            <FeaturedSeries />

            <section className="max-w-none px-0 md:pb-[35px]">
                <header className="container mx-auto mb-4 max-w-[700px] pb-4 text-center text-white px-6">
                    <h3 className="inherits-color relative z-10 text-5xl font-semibold leading-tight">
                        Pick a topic. Any topic.
                    </h3>
                    <p className="inherits-color mt-4 font-medium">
                        If you already know what you're looking for, Laracasts
                        is divided into various topics ranging from frameworks
                        to packages to tools.
                    </p>
                </header>
                <div className="mx-auto mt-6">
                    <section className="pt-0 pb-0" id="topics-nav">
                        <TopicsMenu menus={topicsMenu} />
                        <TopicsCard topics={topics} />
                    </section>
                </div>
            </section>
            <section className="max-w-none md:pb-[35px]">
                <div className="container" style={{ maxWidth: '1300px' }}>
                    <header className="container mx-auto mb-4 max-w-[700px] pb-4 text-center text-white">
                        <img
                            loading="lazy"
                            className="absolute hidden mix-blend-luminosity lg:inline-block"
                            src="https://laracasts.com/images/home/teacher-grid-bg.svg"
                            alt={'Teacher Grid'}
                        />
                        <h3 className="inherits-color relative z-10 text-5xl font-semibold leading-tight">
                            Modern. Current. Expert Teachers.
                        </h3>
                        <p className="inherits-color mt-4 font-medium">
                            In addition to our full-time instructors, we often
                            reach out to{' '}
                            <span className="text-blue">top developers</span> in
                            the programming space for their expertise.
                        </p>
                    </header>
                    <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2 lg:gap-y-16 lg:gap-y-20 xl:mt-[135px] xl:grid-cols-3">
                        <InstructorsCard instructors={instructors} />
                    </div>
                </div>
            </section>
            <CreatorSeries />
            <Testimonials />
            <Subscriptions />
        </>
    );
};

Welcome.layout = (page: React.ReactNode) => (
    <FrontLayout title={'Home Page'} renderHero={true}>
        {page}
    </FrontLayout>
);

export default Welcome;

import TopicsCard from '@/Components/TopicsCard';
import TopicsMenu from '@/Components/TopicsMenu';
import FrontLayout from '@/Layouts/AppLayout';
import React from 'react';

const Index = () => {
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
    return (
        <>
            <div className="banner is-topic relative mx-auto mb-6 lg:mb-0">
                <div className="pointer-events-none relative mx-auto max-w-[1000px]">
                    <img
                        src="https://laracasts.com/images/topics/banner-bg.png"
                        alt=""
                        className="absolute opacity-75 mix-blend-luminosity"
                        style={{ top: '-200px' }}
                    />
                </div>
                <section>
                    <div className="container mt-6 max-w-md text-center">
                        <h1 className="mb-6 text-5xl leading-none text-white">
                            Explore By Topic
                        </h1>
                        <p className="text-grey-700">
                            {' '}
                            All Laracasts series are categorized into various{' '}
                            <span className="text-blue">//topics</span>. This
                            should provide you with an alternate way to decide
                            what to learn next, whether it be a particular
                            framework, language, or tool.{' '}
                        </p>
                    </div>
                </section>
                <div className="py-8">
                    <div className="pt-0 pb-0">
                        <TopicsMenu menus={topicsMenu} />
                        <TopicsCard topics={topics} />
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <FrontLayout title="Topics">{page}</FrontLayout>
);

export default Index;

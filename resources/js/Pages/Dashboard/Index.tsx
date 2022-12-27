import DashboardMain from '@/Components/DashboardMain';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react';

const Index = () => {
    return (
        <>
            <DashboardMain>
                <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl relative hidden py-5 md:flex md:items-center">
                    <img
                        loading="lazy"
                        className="lazy absolute bottom-0 lazyloaded"
                        src="https://laracasts.com/images/forum/forum-feed-lary-tip-icon.png"
                        alt="Lary the robot mascot"
                        width={89}
                        height={106}
                    />
                    <div className="pl-[105px] text-sm font-medium">
                        {' '}
                        Welcome to your <strong>Social Feed</strong>. Here, you
                        can review a feed of all <strong>activity</strong> from
                        the Laracasts members you follow, such as when they{' '}
                        <strong>publish</strong> a new conversation, or{' '}
                        <strong>post</strong> a reply, or <strong>like</strong>{' '}
                        a comment. It's a great way to keep track of the people
                        you admire.{' '}
                    </div>
                </div>
                <div className="py-6 md:mt-5">
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex space-x-3 md:space-x-6">
                            <a
                                className="block cursor-pointer text-xs after:block after:h-1 after:w-full after:rounded-full md:min-w-[100px] md:text-base after:bg-blue"
                                href="/discuss/feed"
                            >
                                <a
                                    href="/discuss/feed"
                                    className="mb-3 w-full text-center font-cabin text-[14px] text-blue"
                                >
                                    <span className="hidden md:inline">
                                        Social{' '}
                                    </span>
                                    Feed{' '}
                                </a>
                            </a>
                            <a
                                className="block cursor-pointer text-xs after:block after:h-1 after:w-full after:rounded-full md:min-w-[100px] md:text-base after:bg-grey-400 dark:after:bg-blue/10"
                                href="/discuss/feed/following"
                            >
                                <a
                                    href="/discuss/feed/following"
                                    className="mb-3 w-full text-center font-cabin text-[14px] text-grey-800 dark:text-grey-600/40"
                                >
                                    {' '}
                                    Following{' '}
                                    <span className="hidden md:inline">
                                        List
                                    </span>
                                </a>
                            </a>
                            <a
                                className="block cursor-pointer text-xs after:block after:h-1 after:w-full after:rounded-full md:min-w-[100px] md:text-base after:bg-grey-400 dark:after:bg-blue/10"
                                href="/discuss/feed/admirers"
                            >
                                <a
                                    href="/discuss/feed/admirers"
                                    className="mb-3 w-full text-center font-cabin text-[14px] text-grey-800 dark:text-grey-600/40"
                                >
                                    {' '}
                                    Admirers{' '}
                                    <span className="hidden md:inline">
                                        List
                                    </span>
                                </a>
                            </a>
                        </div>
                    </div>
                    <a className="block" href="/discuss/feed/following">
                        <div className="mx-auto max-w-[670px] space-y-4 text-center">
                            <img
                                src="https://laracasts.com/images/forum/forum-feed-follow-placeholder@2x.png"
                                alt="Grey placeholder for following a user."
                            />
                            <img
                                src="https://laracasts.com/images/forum/forum-feed-follow-placeholder@2x.png"
                                alt="Grey placeholder for following a user."
                            />
                            <img
                                src="https://laracasts.com/images/forum/forum-feed-follow-placeholder@2x.png"
                                alt="Grey placeholder for following a user."
                            />
                        </div>
                        <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl mt-6">
                            <p className="text-center">
                                {' '}
                                You aren't yet following any Laracasts members.
                                Let's fix that.{' '}
                            </p>
                        </div>
                    </a>
                    {/**/}
                    {/**/}
                </div>
            </DashboardMain>
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DashboardLayout title="Dashboard">{page}</DashboardLayout>
);

export default Index;

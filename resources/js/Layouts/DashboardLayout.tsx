import Link from '@/Components/Link';
import React from 'react';
import AppLayout from './AppLayout';

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function DashboardLayout({ title, children }: Props) {
    return (
        <AppLayout title={title} showMenu={false}>
            <div className="wrapper dark:text-white dark">
                <div className="section pt-8">
                    <div>
                        <div
                            id="forum-wrapper"
                            className="mx-auto flex flex-col flex-col-reverse justify-between md:flex-row lg:gap-x-10"
                            style={{ maxWidth: 1400 }}
                        >
                            <aside
                                className="hidden flex-none lg:sticky lg:block lg:self-start"
                                style={{ width: 210, top: 40 }}
                            >
                                <div className="lg:sticky lg:text-center">
                                    <ul className="hide-scrollbar flex flex-col gap-y-2 mobile:hidden lg:max-h-[80vh] lg:overflow-y-auto text-white">
                                        <li className="list-none">
                                            <Link href="/discuss" active={true}>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/discuss/1">
                                                Category
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/discuss/1">
                                                Topics
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/dashboard/series">
                                                Series
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/discuss/1">
                                                Article
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/discuss/1">
                                                Instructor
                                            </Link>
                                        </li>
                                        <li className="list-none">
                                            <Link href="/discuss/1">
                                                Setting
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>

                            {children}

                            <div
                                className="sticky hidden h-screen max-w-[266px] 2xl:block"
                                style={{ top: 40, display: 'none' }}
                            >
                                <div className="max-h-screen space-y-4 overflow-auto pb-15">
                                    <a
                                        className="inherits-color block flex-1"
                                        href="/signup"
                                    />
                                    <div
                                        className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 rounded-2xl mx-auto px-px py-px text-center"
                                        style={{
                                            height: 205,
                                            background:
                                                'linear-gradient(148deg, rgb(33, 200, 246) -11%, rgba(33, 200, 246, 0) 42%)',
                                            maxWidth: 450,
                                        }}
                                    >
                                        <a
                                            className="inherits-color block flex-1"
                                            href="/signup"
                                        />
                                        <div
                                            className="flex h-full flex-col justify-between gap-y-4 rounded-2xl px-5 py-4 items-center"
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(circle at 0% 2%, rgb(0, 117, 255), rgb(31, 64, 106) 100%)',
                                            }}
                                        >
                                            <a
                                                className="inherits-color block flex-1"
                                                href="/signup"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="flex-1">
                                                        <img
                                                            loading="lazy"
                                                            className="lazy absolute left-0 lazyloaded"
                                                            src="https://laracasts.com/images/forum/sidebar-join-laracasts-bg.png?v=2"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            className="lazy absolute top-0 right-0 lazyloaded"
                                                            src="https://laracasts.com/images/forum/sidebar-join-laracasts-robot.png?v=2"
                                                            width={105}
                                                            alt="Lary the robot head with HTML tag reflection in his goggles."
                                                        />
                                                        <h5 className="-mt-1 text-left font-semibold leading-tight tracking-normal dark:text-white w-[65%] text-sm xl:text-[22px]">
                                                            Level Up Your
                                                            Programming with{' '}
                                                            <span className="text-blue-light">
                                                                Laracasts
                                                            </span>
                                                        </h5>
                                                        <p className="mt-4 dark:text-white text-2xs">
                                                            $15 a month for
                                                            everything we know
                                                            about programming.
                                                            Everything!
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="w-full">
                                                <a
                                                    className="inherits-color block flex-1"
                                                    href="/signup"
                                                />
                                                <a
                                                    className="btn flex-center btn-blue mb-2 w-full"
                                                    href=""
                                                >
                                                    {/**/}
                                                    {/**/}
                                                    {/**/}
                                                    <span className="text-wrap inline-block flex-shrink-0">
                                                        Join Laracasts Today!
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="inherits-color block flex-1"
                                        href="/series/serverless-laravel"
                                    >
                                        <div
                                            className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl flex flex-col items-center justify-between gap-y-4 text-center"
                                            style={{ height: 225 }}
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="flex w-full flex-col items-center justify-between">
                                                    <img
                                                        loading="lazy"
                                                        className="lazy"
                                                        src="https://ik.imagekit.io/laracasts/series/thumbnails/serverless-laravel.png"
                                                        alt="Serverless Laravel thumbnail"
                                                        width={85}
                                                        height={85}
                                                    />
                                                </div>
                                                <div className="mt-3 flex-1">
                                                    <h5 className="clamp one-line font-poppins text-sm font-semibold tracking-normal dark:text-white xl:text-xs">
                                                        Serverless Laravel
                                                    </h5>
                                                    <p className="clamp two-lines mt-1 text-[11px] dark:text-grey-100">
                                                        "Serverless" refers to a
                                                        cloud application
                                                        development model that
                                                        allows developers to
                                                        execute code without
                                                        managing the server
                                                        directly.In this series,
                                                        you'll learn how to
                                                        deploy Laravel
                                                        applications to AWS
                                                        Lambda (serverless)
                                                        through Laravel Vapor.
                                                        In the process, we'll
                                                        understand what it means
                                                        to run serverlessly.
                                                        We'll also look under
                                                        the hood and discuss how
                                                        AWS actually runs your
                                                        application.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-full w-full max-w-[200px] rounded-xl bg-black/10 px-4 py-1 text-center text-[11px] font-medium leading-loose text-grey-800 dark:bg-blue/10 dark:text-grey-600 2xl:text-[9px]">
                                                {' '}
                                                Laracasts Recommends This Series{' '}
                                            </div>
                                        </div>
                                    </a>
                                    <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl flex flex-1 items-center">
                                        <div className="carbon-ads" />
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: '#carbonads .carbon-img{width:130px;margin-bottom:2ex;border-radius:8px;overflow:hidden}#carbonads .carbon-wrap{flex-direction:column}#carbonads .carbon-text{margin:0}#carbonads .carbon-poweredby{text-align:center}@media only screen and (min-width: 320px) and (max-width: 759px){#carbonads{position:relative}#carbonads .carbon-wrap{flex-direction:row}#carbonads .carbon-img{margin:0}#carbonads .carbon-text{padding:0 1em 3ex;font-size:.875rem}#carbonads .carbon-poweredby{position:absolute;right:0;bottom:0;border-radius:0;border-top-left-radius:3px;text-align:center}}',
                                            }}
                                        />
                                        <div id="carbonads">
                                            <span>
                                                <span className="carbon-wrap">
                                                    <a
                                                        href="https://srv.carbonads.net/ads/click/x/GTND42JUCVYD42JUCKALYKQNCA7DV2JNCAADEZ3JCYSI423YCAAIEKQKC6YIE23LF67IK5QMCWYDK2QEFTYI6KQYHEYIK27JF6AI4KJECTNCYBZ52K?segment=placement:laracastscom;"
                                                        className="carbon-img"
                                                        target="_blank"
                                                        rel="noopener sponsored"
                                                    >
                                                        <img
                                                            src="https://cdn4.buysellads.net/uu/1/126868/1671461338-ads-for-BuySellAds_1_260_200.png"
                                                            alt="ads via Carbon"
                                                            height={100}
                                                            width={130}
                                                            style={{
                                                                maxWidth: 130,
                                                            }}
                                                        />
                                                    </a>
                                                    <a
                                                        href="https://srv.carbonads.net/ads/click/x/GTND42JUCVYD42JUCKALYKQNCA7DV2JNCAADEZ3JCYSI423YCAAIEKQKC6YIE23LF67IK5QMCWYDK2QEFTYI6KQYHEYIK27JF6AI4KJECTNCYBZ52K?segment=placement:laracastscom;"
                                                        className="carbon-text"
                                                        target="_blank"
                                                        rel="noopener sponsored"
                                                    >
                                                        Get access to the
                                                        world's fastest proxy
                                                        network with IPs in 195
                                                        countries. Start your
                                                        free trial.
                                                    </a>
                                                </span>
                                                <a
                                                    href="http://carbonads.net/?utm_source=laracastscom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon"
                                                    className="carbon-poweredby"
                                                    target="_blank"
                                                    rel="noopener sponsored"
                                                >
                                                    ads via Carbon
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

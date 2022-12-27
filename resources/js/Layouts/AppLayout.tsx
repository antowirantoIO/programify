import { Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

interface Props {
    title: string;
    renderHero?: boolean;
    isPlaying?: boolean;
    showMenu?: boolean;
    dataContextMenu?: any;
}

export default function AppLayout({
    title,
    children,
    renderHero = false,
    isPlaying = false,
    showMenu = true,
}: PropsWithChildren<Props>) {
    return (
        <div>
            <Head title={title} />

            {isPlaying ? (
                <div className="page page-dark">
                    <div className="xl:flex-1">{children}</div>
                </div>
            ) : (
                <div>
                    <div
                        className="announcement section h-[45px] max-w-none overflow-hidden bg-panel-800 py-0 text-center text-xs text-white lg:z-50"
                        data-js="announcement"
                    >
                        <div className="container flex h-full items-center justify-center max-w-[800px]">
                            <img
                                src="https://laracasts.com/images/sale/2022/banner-icon.svg"
                                alt=""
                                className="relative hidden md:inline-block w-[40px]"
                            />
                            <a
                                className="ml-2 font-medium hover:underline"
                                href="/signup?coupon=25off"
                            >
                                <span>
                                    Happy Holidays! All new subscriptions and
                                    gift certificates are 25% off.
                                </span>
                            </a>
                            <a
                                className="btn btn-dark-blue ml-4 hidden min-h-0 py-xs px-4 font-semibold normal-case md:inline"
                                href="/signup?coupon=25off"
                            >
                                Check it out &gt;
                            </a>
                        </div>
                    </div>
                    <div className="page page-dark">
                        <div className="xl:flex-1">
                            <main>
                                {renderHero ? (
                                    <div
                                        className="home-banner relative"
                                        style={{
                                            background:
                                                'rgba(0, 0, 0, 0) linear-gradient(rgb(40, 64, 103), rgb(21, 31, 50)) repeat scroll 0% 0%',
                                        }}
                                    >
                                        <div className="home-banner-inner flex flex-col">
                                            <Navbar menuShown={false} />

                                            {renderHero && <Hero />}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="header-wrap relative">
                                        <Navbar menuShown={showMenu} />
                                    </div>
                                )}
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

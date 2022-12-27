import React from 'react';
import CodeLink from "@/Components/CodeLink";

export default function Hero() {
    return (
        <div className="home-banner-main section flex w-full flex-1 flex-col overflow-hidden pt-10 pb-0 lg:mb-[-100px] lg:items-center" style={{maxWidth: '100vw'}}>
            <div className="relative mx-auto flex w-full flex-1 items-end" style={{maxWidth: '1700px'}}>
                <div>
                    <img id="home-banner-illustration" src="https://laracasts.com/images/home/home-banner-illustration.svg" alt="Lary the Laracasts robot and monster posing." aria-label="Screencasts for the modern developer" className="pointer-events-none absolute top-[-50px] left-[12vw] m-0 w-full scale-[1.5] mix-blend-luminosity lg:left-0 lg:top-0 lg:mt-[-231px] lg:ml-[-150px] lg:inline-block lg:w-auto lg:max-w-[1300px] lg:scale-100 xl:max-w-[1400px] widescreen:ml-0 widescreen:max-w-[1500px]" />
                </div>
                <div className="code-menu hide-scrollbar top-0 z-10 mt-[50vw] h-auto w-full overflow-auto rounded-xl bg-blue-900 px-3 py-6 font-bold text-white lg:absolute lg:right-0 lg:ml-auto lg:mt-[80px] lg:w-[285px] xl:right-[5%] 2xl:right-[10%] widescreen:right-[18%]">
                    <div className="font-bold">
                        <span className="font-bold text-[#ec454f]">"menu"</span> =&gt; [
                        <CodeLink title={'Series'} words={'deep dives'} slug={'browse'} url={'/series'} />
                        <CodeLink title={'Topics'} words={'pick a category'} slug={'find'} url={'/browse'} />
                        <CodeLink title={'Path'} words={'learn this next'} slug={'follow'} url={'/path'} />
                        <CodeLink title={'Forum'} words={'engage the community'} slug={'discuss'} url={'/forum'} />
                        <CodeLink title={'Commercial'} words={'watch our ad'} slug={'play'} url={'/play'} />
                        <CodeLink title={'Sign Up'} words={'you know what to do'} slug={'join'} url={'/blog'} />
                        <span className="font-bold">],</span>
                    </div>
                    <div className="mt-3 font-bold">
                        <span className="font-bold text-[#ec454f]">"stats"</span> =&gt; [
                        <CodeLink title={'176'} words={'multi-episode training'} slug={'series'} url={'/blog'} />
                        <CodeLink title={'2382'} words={'new ones every week'} slug={'lessons'} url={'/blog'} />
                        <CodeLink title={'403'} words={'hours and hours of content'} slug={'hours'} url={'/blog'} />
                        <span className="font-bold">]</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

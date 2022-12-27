import React from 'react';

export default function Subscriptions() {
    return (
        <section className="!max-w-none md:pt-[25px] md:pb-[35px]">
            <div className="container">
                <div className="dark">
                    <div className="mb-8 text-center mobile:flex-1 lg:mx-auto lg:w-3/4">
                        <h3 className="mb-2 text-4xl text-black dark:text-white">A plan for every personality type.</h3>
                        <p className="text-2lg text-grey-800 dark:text-white md:mx-auto md:w-4/5"> Joining takes less than a minute, and, if your peers are correct, is the best decision you'll make all day. If you're still on the fence, we have a plan called “monthly” - and it’s not like the gym. Seriously, you can cancel in five seconds. </p>
                    </div>
                    <div>
                        <div className="mx-auto" style={{maxWidth: '1500px'}}>
                            <div className="flex">
                                <div className="mb-8 text-center mobile:flex-1 md:mx-auto md:w-3/4">
                                    <div className="plans-toggle-wrap mx-auto">
                                        <div className="plans-toggle flex h-full space-x-4">
                                            <div className="plans-toggle-personal border-b-4 plans-toggle-is-active border-blue text-black dark:text-white"><button className="inherits-color block h-full w-full font-cabin text-xl font-bold"> Personal </button></div>
                                            <div className="plans-toggle-teams border-b-4 border-black/10 text-black/30 dark:text-grey-600/50"><button className="inherits-color block h-full w-full font-cabin text-xl font-bold"> Teams </button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="plans justify-center lg:flex lg:pb-6">
                                <div className="plan-wrap mx-auto flex-1 md:mx-1 lg:mx-0">
                                    <div className="relative border-grey-500 dark:border-none plan card relative z-10 mx-auto mb-5 flex h-full w-auto border bg-white px-6 pt-5 pb-6 text-center transition-colors hover:border-blue dark:bg-panel-600 dark:text-white dark:hover:bg-panel-500 lg:mx-3 lg:mb-0" data-js="plan-card-monthly-15" style={{maxWidth: '437px'}}>
                                        <div className="flex h-full w-full flex-col justify-around">
                                            <div className="mb-8 flex items-center">
                                                <h5 className="mr-auto text-base font-bold tracking-wide"><a className="inherits-color" href="/subscription?plan=monthly-15">Monthly</a><span className="block font-cabin text-xs font-bold tracking-tight text-blue">25% Off</span></h5>
                                                <div className="is-discounted plan-price relative text-5xl font-medium leading-none tracking-tight">
                                                    <div className="flex">
                                                        <div className="plan-slash relative mr-2 flex items-baseline self-center font-cabin text-xl font-medium text-grey-800 dark:text-blue/25"><span>$15</span></div>
                                                        <div className="relative flex items-baseline font-cabin text-blue"><span data-js="price">$11</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="flex justify-center" href="/subscription?plan=monthly-15"><img src="https://laracasts.com/images/plans/sub-monthly.svg?v=5" alt="Monthly Plan" className="relative scale-125" loading="lazy" style={{width: '165px', height: '120px', top: '-25px'}} /></a>
                                            <p className="mb-8 -mt-2 text-lg md:text-sm lg:text-base">Be in the know. Fetch an endless stream of input with our <strong>monthly</strong> plan.</p>
                                            <a data-js="join-button" className="group btn btn-dark-blue block flex w-full items-center border-transparent bg-grey-400 py-3 text-center text-sm font-semibold normal-case text-black hover:border-blue dark:bg-blue/10 dark:text-white dark:hover:border-blue/20 dark:hover:bg-blue mobile:mx-auto" href="/subscription?plan=monthly-15">
                                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" className="mr-3">
                                                    <g className="text-grey-800 group-hover:text-white dark:text-panel-800">
                                                        <circle cx={11} cy={11} r={11} className="fill-current" />
                                                        <path clipRule="evenodd" d="M5.273 5.272h11.454v11.455H5.273V5.272z" stroke="#000" strokeOpacity=".01" strokeWidth=".5" />
                                                        <path className="stroke-current text-grey-500 group-hover:text-blue dark:text-grey-800" d="m7.42 11.336 2.41 2.187L15.06 8.67" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                Select Plan
                                            </a>
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                <div className="plan-wrap mx-auto flex-1 md:mx-1 lg:mx-0">
                                    <div className="relative border-grey-500 dark:border-none plan card relative z-10 mx-auto mb-5 flex h-full w-auto border bg-white px-6 pt-5 pb-6 text-center transition-colors hover:border-blue dark:bg-panel-600 dark:text-white dark:hover:bg-panel-500 lg:mx-3 lg:mb-0" data-js="plan-card-yearly-99" style={{maxWidth: '437px'}}>
                                        <div className="flex h-full w-full flex-col justify-around">
                                            <div className="mb-8 flex items-center">
                                                <h5 className="mr-auto text-base font-bold tracking-wide"><a className="inherits-color" href="/subscription?plan=yearly-99">Yearly</a><span className="block font-cabin text-xs font-bold tracking-tight text-blue">25% Off</span></h5>
                                                <div className="is-discounted plan-price relative text-5xl font-medium leading-none tracking-tight">
                                                    <div className="flex">
                                                        <div className="plan-slash relative mr-2 flex items-baseline self-center font-cabin text-xl font-medium text-grey-800 dark:text-blue/25"><span>$99</span></div>
                                                        <div className="relative flex items-baseline font-cabin text-blue"><span data-js="price">$74</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="flex justify-center" href="/subscription?plan=yearly-99"><img src="https://laracasts.com/images/plans/sub-yearly.svg?v=5" alt="Yearly Plan" className="relative scale-125" loading="lazy" style={{width: '165px', height: '120px', top: '-25px'}} /></a>
                                            <p className="mb-8 -mt-2 text-lg md:text-sm lg:text-base">Set your ocular implants to binge-mode. Go all in with a discounted <strong>yearly</strong> plan.</p>
                                            <a data-js="join-button" className="group btn btn-dark-blue block flex w-full items-center border-transparent bg-grey-400 py-3 text-center text-sm font-semibold normal-case text-black hover:border-blue dark:bg-blue/10 dark:text-white dark:hover:border-blue/20 dark:hover:bg-blue mobile:mx-auto" href="/subscription?plan=yearly-99">
                                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" className="mr-3">
                                                    <g className="text-grey-800 group-hover:text-white dark:text-panel-800">
                                                        <circle cx={11} cy={11} r={11} className="fill-current" />
                                                        <path clipRule="evenodd" d="M5.273 5.272h11.454v11.455H5.273V5.272z" stroke="#000" strokeOpacity=".01" strokeWidth=".5" />
                                                        <path className="stroke-current text-grey-500 group-hover:text-blue dark:text-grey-800" d="m7.42 11.336 2.41 2.187L15.06 8.67" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                Select Plan
                                            </a>
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                <div className="plan-wrap mx-auto flex-1 md:mx-1 lg:mx-0">
                                    <div className="relative border-grey-500 dark:border-none plan card relative z-10 mx-auto mb-5 flex h-full w-auto border bg-white px-6 pt-5 pb-6 text-center transition-colors hover:border-blue dark:bg-panel-600 dark:text-white dark:hover:bg-panel-500 lg:mx-3 lg:mb-0" data-js="plan-card-forever" style={{maxWidth: '437px'}}>
                                        <div className="flex h-full w-full flex-col justify-around">
                                            <div className="mb-8 flex items-center">
                                                <h5 className="mr-auto text-base font-bold tracking-wide"><a className="inherits-color" href="/subscription?plan=forever">Forever</a><span className="block font-cabin text-xs font-bold tracking-tight text-blue">25% Off</span></h5>
                                                <div className="is-discounted plan-price relative text-5xl font-medium leading-none tracking-tight">
                                                    <div className="flex">
                                                        <div className="plan-slash relative mr-2 flex items-baseline self-center font-cabin text-xl font-medium text-grey-800 dark:text-blue/25"><span>$399</span></div>
                                                        <div className="relative flex items-baseline font-cabin text-blue"><span data-js="price">$299</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="flex justify-center" href="/subscription?plan=forever"><img src="https://laracasts.com/images/plans/sub-lifetime.svg?v=5" alt="Forever Plan" className="relative scale-125" loading="lazy" style={{width: '165px', height: '120px', top: '-25px'}} /></a>
                                            <p className="mb-8 -mt-2 text-lg md:text-sm lg:text-base">Permanently uplink to our mainframe. Pay once, and access Laracasts <strong>forever</strong>.</p>
                                            <a data-js="join-button" className="group btn btn-dark-blue block flex w-full items-center border-transparent bg-grey-400 py-3 text-center text-sm font-semibold normal-case text-black hover:border-blue dark:bg-blue/10 dark:text-white dark:hover:border-blue/20 dark:hover:bg-blue mobile:mx-auto" href="/subscription?plan=forever">
                                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" className="mr-3">
                                                    <g className="text-grey-800 group-hover:text-white dark:text-panel-800">
                                                        <circle cx={11} cy={11} r={11} className="fill-current" />
                                                        <path clipRule="evenodd" d="M5.273 5.272h11.454v11.455H5.273V5.272z" stroke="#000" strokeOpacity=".01" strokeWidth=".5" />
                                                        <path className="stroke-current text-grey-500 group-hover:text-blue dark:text-grey-800" d="m7.42 11.336 2.41 2.187L15.06 8.67" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                Select Plan
                                            </a>
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                {/**/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

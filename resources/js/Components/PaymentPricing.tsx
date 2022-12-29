import React from 'react';

interface Props {
    plan: any;
}

const PaymentPricing = ({ plan }: Props) => {
    return (
        <aside className="mx-auto mt-6 max-w-[500px] flex-shrink-0 lg:sticky lg:top-[40px] lg:mt-0 lg:w-[270px] lg:self-start xl:w-[450px]">
            <figure>
                <figcaption className="mt-4 px-8">
                    <h5 className="flex items-center gap-x-3 font-poppins font-semibold text-grey-600">
                        <span className="flex-shrink-0 text-xs">
                            {'Subscribe to ' + plan.name}
                        </span>
                        <span className="h-px w-full bg-grey-600" />
                    </h5>
                    <div className="flex mt-5">
                        <h3 className="font-poppins text-4xl xl:text-5xl font-semibold leading-none">
                            {plan.price.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </h3>
                        <span className="ml-2">
                            per <br /> {plan.interval}
                        </span>
                    </div>
                    <div className="mt-10 flex items-center gap-x-3">
                        <div
                            style={{
                                width: '100%',
                                height: '55%',
                            }}
                            className="experience-level-card group flex-shrink-0 cursor-pointer rounded-xl border border-blue bg-deep-black/10 p-5 text-white transition-all"
                        >
                            <div className="flex justify-between">
                                <span className="block text-sm font-medium">
                                    {plan.name}
                                </span>
                                <p>
                                    {plan.price.toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                    })}
                                </p>
                            </div>
                            <div className="-mt-1 text-sm text-grey-800">
                                Qty {plan.interval_count}, Billed{' '}
                                {plan.interval}ly
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 text-[13px] flex justify-between">
                        <div className="mt-2 text-md font-medium leading-tight">
                            Tax <br />
                            <p className="mt-1 text-2xs text-grey-600">
                                {' '}
                                *Pajak ini meruapakan admin pembayaran
                            </p>
                        </div>
                        <div className="mt-2 text-md font-medium leading-tight">
                            {plan.fee.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </div>
                    </div>
                    <div className="content text-[13px] flex justify-between">
                        <div className="mt-2 text-md font-medium leading-tight">
                            Sub Total
                        </div>
                        <div className="mt-2 text-md font-medium leading-tight">
                            {(plan.price + plan.fee).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </div>
                    </div>

                    <form
                        className="search-form mt-5 flex h-[40px] w-full rounded-full md:mt-0 bg-blue/13"
                        action="/discuss"
                        autoComplete="off"
                    >
                        <label htmlFor="q" className="flex px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-grey-800 dark:text-grey-600"
                                width={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <rect
                                    x={3}
                                    y={5}
                                    width={18}
                                    height={14}
                                    rx={3}
                                />
                                <path d="M7 16l3 -3l3 3" />
                                <path d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z" />
                            </svg>

                            <input
                                id="q"
                                name="q"
                                className="focus:outline-none ml-3 h-full w-full pt-0 text-xs dark:text-grey-600 dark:placeholder:text-grey-600"
                                placeholder="Add Promotion Code"
                            />
                        </label>
                    </form>

                    <div className="content mt-5 text-[13px] flex justify-between items-center">
                        <div className="mt-2 xl:text-md font-medium leading-tight">
                            Total due today
                        </div>
                        <div className="mt-2 text-md xl:text-xl font-semibold leading-tight">
                            {(plan.price + plan.fee).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </div>
                    </div>

                    <p className="mt-5">
                        <a
                            href="https://jessarcher.com"
                            className="btn btn-dark-blue w-full py-4 text-xs font-semibold normal-case"
                            target="_blank"
                        >
                            {' '}
                            Cancel Payment
                        </a>
                    </p>
                </figcaption>
            </figure>
        </aside>
    );
};

export default PaymentPricing;

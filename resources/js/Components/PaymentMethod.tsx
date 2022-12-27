import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    method: {
        title: string;
        vendor: {
            name: string;
            logo: string;
            paymentFee: string;
        }[];
    }[];
}

const PaymentMethod = ({ method }: Props) => {
    return (
        <>
            {method.map((method, index) => (
                <Disclosure
                    key={index}
                    as={'div'}
                    className={index > 2 ? 'mt-2' : ''}
                >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl relative flex w-full cursor-pointer items-center mt-4 mb-[10px] border-transparent bg-blue/7">
                                <h3 className="flex items-center divide-x-2 divide-white/10 text-lg font-bold md:text-xl">
                                    <span className="flex items-center pl-4 font-poppins font-semibold">
                                        {method.title}
                                    </span>
                                </h3>
                                <div className="opacity-100 -mr-2 h-10 w-10 bg-deep-black/10 flex-center absolute right-5 ml-auto self-center rounded-lg">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                    />
                                </div>
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                {method.vendor.map((ven, index) => (
                                    <Disclosure.Panel
                                        style={{
                                            height: '72px',
                                        }}
                                        className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 rounded-2xl episode-list-item flex cursor-pointer mb-[10px] !border-deep-black/4 py-4 px-8 is-tooling"
                                    >
                                        <div className="flex-center relative pr-0 font-bold mr-6">
                                            <div className="circle flex items-center">
                                                <div
                                                    className="flex items-center justify-center"
                                                    style={{
                                                        width: '4rem',
                                                        height: '3rem',
                                                    }}
                                                >
                                                    {typeof ven.logo ===
                                                    'string' ? (
                                                        <img
                                                            src={ven.logo}
                                                            alt=""
                                                            className="w-full h-full object-contain rounded-xl"
                                                        />
                                                    ) : (
                                                        ven.logo
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="episode-list-details flex flex-1 mobile:border-b-0">
                                            <div>
                                                <div className="items-center justify-between mb-3">
                                                    <h4 className="episode-list-title flex items-center link inherits-color text-xl font-bold md:text-lg lg:text-xl lg:leading-none">
                                                        <a
                                                            className="md:clamp one-line leading-normal inherits-color"
                                                            title="Why Neovim?"
                                                            href="/episodes/2617"
                                                        >
                                                            {ven.name}
                                                        </a>
                                                    </h4>
                                                    <p className="text-2xs font-semibold normal-case text-grey-600">
                                                        Fee : {ven.paymentFee}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                ))}
                            </Transition>
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    );
};

export default PaymentMethod;

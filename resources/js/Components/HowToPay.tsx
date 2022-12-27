import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface Props {
    paymentMethod: {
        title: string;
        paymentSteps: React.ReactNode[];
    }[];
}

const HowToPay = ({ paymentMethod }: Props) => {
    return (
        <>
            <div>
                {paymentMethod.map((method, index) => (
                    <Disclosure
                        key={index}
                        as="div"
                        className={index > 2 ? 'mt-2' : ''}
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                                    <span>{method.title}</span>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-slate-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <ol
                                        className="list-decimal"
                                        style={{
                                            paddingInlineStart: 18,
                                        }}
                                    >
                                        {method.paymentSteps.map(
                                            (step, index) => (
                                                <li key={index}>
                                                    <div>{step}</div>
                                                </li>
                                            ),
                                        )}
                                    </ol>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </>
    );
};

export default HowToPay;

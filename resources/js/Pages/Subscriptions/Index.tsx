import MascotText from '@/Components/Icons/MascotText';
import SOS from '@/Components/Icons/SOS';
import Time from '@/Components/Icons/Time';
import { PaymentCodeDetailed } from '@/Components/PaymentCodeDetailed';
import PaymentMethod from '@/Components/PaymentMethod';
import PaymentPricing from '@/Components/PaymentPricing';
import AppLayout from '@/Layouts/AppLayout';
import classNames from 'classnames';
import React, { useState } from 'react';
import Countdown from 'react-countdown';

interface Props {
    plan: object;
}

const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <span>You are good to go!</span>;
    } else {
        // Render a countdown
        return (
            <span>
                {hours} hr {minutes} m {seconds} s
            </span>
        );
    }
};

const Index = ({ plan }: Props) => {
    const [paymentSelected, setPaymentSelected] = useState({
        vendor: '',
        state: false,
    });

    const paymentMethod = [
        {
            title: 'Bank Transfer',
            vendor: [
                {
                    name: 'Bank BCA',
                    logo: '/images/payment/bca.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank Mandiri',
                    logo: '/images/payment/mandiri.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank BNI',
                    logo: '/images/payment/bni.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank Permata',
                    logo: '/images/payment/permata.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank BRI',
                    logo: '/images/payment/bri.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank JAGO',
                    logo: '/images/payment/jago.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Other Bank',
                    logo: '/images/payment/default.svg',
                    paymentFee: '0.00',
                },
            ],
        },
        {
            title: 'Ewallet and QRIS',
            vendor: [
                {
                    name: 'OVO',
                    logo: '/images/payment/ovo.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'DANA',
                    logo: '/images/payment/dana.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'LinkAja',
                    logo: '/images/payment/linkaja.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Shopeepay',
                    logo: '/images/payment/shopeepay.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'QRIS',
                    logo: '/images/payment/qris.svg',
                    paymentFee: '0.00',
                },
            ],
        },
        {
            title: 'Credit and Debit Card',
            vendor: [
                {
                    name: 'Visa',
                    logo: '/images/payment/visa.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Mastercard',
                    logo: '/images/payment/mastercard.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'American Express',
                    logo: '/images/payment/american-express.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'JCB',
                    logo: '/images/payment/jcb.svg',
                    paymentFee: '0.00',
                },
            ],
        },
    ];
    return (
        <>
            <section>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="flex flex-col-reverse gap-x-12 text-white lg:flex-row lg:justify-center xl:gap-x-20">
                        <PaymentPricing plan={plan} />
                        <div>
                            {paymentSelected.state && (
                                <div className="container flex items-center justify-center">
                                    <PaymentCodeDetailed
                                        paymentMethod={paymentSelected.vendor}
                                    />
                                </div>
                            )}
                            <div className="mt-8">
                                <div className="flex-1">
                                    <div
                                        className={
                                            'panel relative transition-colors duration-300 light text-black py-4 rounded-2xl bg-tooling mb-4 px-4 ' +
                                            classNames({
                                                hidden: !paymentSelected.state,
                                            })
                                        }
                                        id="series-details"
                                    >
                                        <div className="container">
                                            <div className="flex text-xs text-white">
                                                <div className="left flex flex-1">
                                                    <div className="flex items-center font-medium">
                                                        <Time
                                                            width={25}
                                                            className={'mr-2'}
                                                        />
                                                        <span className="text-xl font-semibold">
                                                            <Countdown
                                                                date={
                                                                    Date.now() +
                                                                    24 *
                                                                        60 *
                                                                        60 *
                                                                        1000
                                                                }
                                                                renderer={
                                                                    renderer
                                                                }
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <li className="right flex space-x-2">
                                                    <div className="flex hidden items-center font-medium leading-none xl:flex">
                                                        <a
                                                            href="#"
                                                            className="mr-2 inline-flex items-center rounded-md bg-white/10 py-2 px-25 text-md font-semibold transition-colors hover:bg-white/15"
                                                        >
                                                            <SOS
                                                                className="mr-1"
                                                                width={30}
                                                                height={30}
                                                            />
                                                            Help
                                                        </a>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <PaymentMethod
                                            method={paymentMethod}
                                            setPaymentSelected={
                                                setPaymentSelected
                                            }
                                        />
                                    </div>
                                    <section className="hidden md:block">
                                        <MascotText text="Series still in development. Check back often for updates" />
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <AppLayout title="Subscriptions">{page}</AppLayout>
);

export default Index;

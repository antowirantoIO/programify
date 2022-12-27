import HowToPay from '@/Components/HowToPay';
import IconButton from '@/Components/IconButton';
import ArrowRight from '@/Components/Icons/ArrowRight';
import Mark from '@/Components/Icons/Mark';
import MascotText from '@/Components/Icons/MascotText';
import { Play } from '@/Components/Icons/Play';
import SOS from '@/Components/Icons/SOS';
import Time from '@/Components/Icons/Time';
import { PaymentCodeDetailed } from '@/Components/PaymentCodeDetailed';
import PaymentMethod from '@/Components/PaymentMethod';
import PaymentPricing from '@/Components/PaymentPricing';
import AppLayout from '@/Layouts/AppLayout';
import React, { useState } from 'react';

const Index = () => {
    const [paymentSelected, setPaymentSelected] = useState(true);

    const paymentMethod = [
        {
            title: 'Bank Transfer',
            vendor: [
                {
                    name: 'Bank BCA',
                    logo: '/images/payment/bank/bca.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank Mandiri',
                    logo: '/images/payment/bank/mandiri.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank BNI',
                    logo: '/images/payment/bank/bni.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank Permata',
                    logo: '/images/payment/bank/permata.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank BRI',
                    logo: '/images/payment/bank/bri.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Bank JAGO',
                    logo: '/images/payment/bank/jago.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Other Bank',
                    logo: 'https://d2f3dnusg0rbp7.cloudfront.net/snap/assets/other-va-0ae529ff327082913f3ce3d25634f81b146cf3f40c9541365de11fdea57fc173.svg',
                    paymentFee: '0.00',
                },
            ],
        },
        {
            title: 'Ewallet and QRIS',
            vendor: [
                {
                    name: 'OVO',
                    logo: '/images/payment/ewallet/ovo.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'DANA',
                    logo: '/images/payment/ewallet/dana.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'LinkAja',
                    logo: '/images/payment/ewallet/linkaja.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Shopeepay',
                    logo: '/images/payment/ewallet/shopeepay.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'QRIS',
                    logo: '/images/payment/ewallet/qris.svg',
                    paymentFee: '0.00',
                },
            ],
        },
        {
            title: 'Credit and Debit Card',
            vendor: [
                {
                    name: 'Visa',
                    logo: '/images/payment/card/visa.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'Mastercard',
                    logo: '/images/payment/card/mastercard.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'American Express',
                    logo: '/images/payment/card/american-express.svg',
                    paymentFee: '0.00',
                },
                {
                    name: 'JCB',
                    logo: '/images/payment/card/jcb.svg',
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
                        <PaymentPricing />
                        <div>
                            {paymentSelected && (
                                <div className="container flex items-center justify-center">
                                    <PaymentCodeDetailed />
                                </div>
                            )}
                            <div className="mt-8">
                                <div className="flex-1">
                                    <div
                                        className="panel relative transition-colors duration-300 light text-black py-4 rounded-2xl bg-tooling mb-4 px-4"
                                        id="series-details"
                                    >
                                        <div className="container">
                                            <div className="flex text-xs text-white">
                                                <div className="left flex flex-1">
                                                    <div className="flex items-center font-medium">
                                                        <Time
                                                            width={25}
                                                            className="mr-2"
                                                        />
                                                        <span className="text-xl font-semibold">
                                                            24 Jam 15 Menit
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
                                        <PaymentMethod method={paymentMethod} />
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

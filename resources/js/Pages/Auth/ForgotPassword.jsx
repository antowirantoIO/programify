import AuthCard from '@/Components/AuthCard';
import InputGroup from '@/Components/InputGroup';
import Meta from '@/Components/Meta';
import ProgramifyLink from '@/Components/ProgramifyLink';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/inertia-react';
import { IconAt, IconLoader } from '@tabler/icons';
import React from 'react';

import InputLabel from '../../Components/InputLabel';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post('/forgot-password');
    };

    return (
        <>
            <Head title={`Programify Reset password`} />
            <Meta
                {...{
                    title: 'Programify: Reset password',
                    description:
                        'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.',
                }}
            />
            <>
                <AuthCard
                    header='Reset your password'
                    subheader={
                        "Enter the email address associated with your account and we'll send you a link to reset your password."
                    }>
                    {status && <div className='mb-4 text-sm font-medium text-emerald-600'>{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput='email'>Email</InputLabel>
                            <InputGroup
                                label={<IconAt />}
                                type='email'
                                name='email'
                                value={data.email}
                                autoComplete='username'
                                onChange={onHandleChange}
                                placeholder={'elon@tesla.com'}
                                required
                                error={errors.email}
                            />
                        </div>

                        <div className='mt-4 flex flex-col-reverse items-center justify-between gap-y-4 text-slate-600 dark:text-slate-200 sm:flex-row sm:gap-y-0'>
                            <span>
                                <ProgramifyLink href='/login'>Masuk</ProgramifyLink>
                            </span>
                            <PrimaryButton
                                className='flex w-full items-center justify-center gap-x-1.5 md:w-40'
                                processing={processing}>
                                {processing ? (
                                    <>
                                        <IconLoader className='h-5 w-5 shrink-0 animate-spin' />
                                        Continuing...
                                    </>
                                ) : (
                                    'Continue'
                                )}
                            </PrimaryButton>
                        </div>
                    </form>
                </AuthCard>
            </>
        </>
    );
}

ForgotPassword.layout = (page) => <GuestLayout {...{ children: page }} />;

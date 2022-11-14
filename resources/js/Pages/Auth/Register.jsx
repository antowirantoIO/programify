import AuthCard from '@/Components/AuthCard';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputGroup from '@/Components/InputGroup';
import Meta from '@/Components/Meta';
import ProgramifyLink from '@/Components/ProgramifyLink';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/inertia-react';
import { IconAt, IconLoader, IconPassword, IconSignature } from '@tabler/icons';
import React, { useEffect } from 'react';

import InputLabel from '../../Components/InputLabel';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        acceptance: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <>
            <Meta
                {...{
                    title: 'Parsinta: Register',
                    description:
                        'Dengan mendaftar di Parsinta, Anda akan lebih produktif. Karena Anda bisa melihat produktivitas Anda dalam mempelajari hal-hal yang baru ataupun pun yang Anda ingin pelajari saat ini.',
                }}
            />
            <>
                <AuthCard
                    header='Daftar'
                    subheader={
                        <>
                            Sudah Mendaftar ? <ProgramifyLink href='/login'>Masuk</ProgramifyLink>{' '}
                            Ke Akun Anda.
                        </>
                    }>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput='name'>Name</InputLabel>
                            <InputGroup
                                label={<IconSignature />}
                                type='text'
                                name='name'
                                value={data.name}
                                autoComplete='name'
                                isFocused
                                onChange={onHandleChange}
                                placeholder={'Jane Doe'}
                                required
                                error={errors.name}
                            />
                        </div>

                        <div className='mt-5'>
                            <InputLabel forInput='email'>Email</InputLabel>
                            <InputGroup
                                label={<IconAt />}
                                type='email'
                                name='email'
                                value={data.email}
                                autoComplete='username'
                                onChange={onHandleChange}
                                placeholder={'jane@domain.com'}
                                required
                                error={errors.email}
                            />
                        </div>

                        <div className='mt-5'>
                            <InputLabel forInput='password'>Kata Sandi</InputLabel>
                            <InputGroup
                                eye
                                type='password'
                                name='password'
                                label={<IconPassword />}
                                value={data.password}
                                autoComplete='new-password'
                                onChange={onHandleChange}
                                required
                                error={errors.password}
                            />
                        </div>

                        <div className='mt-5'>
                            <InputLabel forInput='password_confirmation'>Konfirmasi Kata Sandi</InputLabel>
                            <InputGroup
                                eye
                                label={<IconPassword />}
                                type='password'
                                name='password_confirmation'
                                value={data.password_confirmation}
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className='mt-5'>
                            <div className='flex cursor-pointer items-start sm:items-center'>
                                <Checkbox
                                    id='acceptance'
                                    name='acceptance'
                                    className={'mt-1 sm:mt-0'}
                                    required={true}
                                    value={data.acceptance}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            acceptance: e.target.checked,
                                        })
                                    }
                                />
                                <label
                                    htmlFor='acceptance'
                                    className='ml-2 select-none text-sm text-slate-600 dark:text-slate-200'>
                                    Saya Setuju Dengan{' '}
                                    <ProgramifyLink href='/terms'>Terms Of Service </ProgramifyLink>{' '}
                                    dan{' '}
                                    <ProgramifyLink href='/privacy'>Privacy Policy </ProgramifyLink>.
                                </label>
                            </div>
                            <InputError message={errors.acceptance} />
                        </div>

                        <div className='mt-5 flex flex-col justify-between sm:flex-row sm:items-center'>
                            <PrimaryButton
                                processing={processing}
                                type='submit'
                                className='mt-5 flex w-full items-center justify-center gap-x-1.5 md:w-40'>
                                {processing ? (
                                    <>
                                        <IconLoader className='h-5 w-5 shrink-0 animate-spin' /> Registering...
                                    </>
                                ) : (
                                    'Daftar'
                                )}
                            </PrimaryButton>
                        </div>
                    </form>
                </AuthCard>
            </>
        </>
    );
}

Register.layout = (page) => <GuestLayout {...{ children: page, title: 'Parsinta: Register' }} />;

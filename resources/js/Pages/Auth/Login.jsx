import AuthCard from '@/Components/AuthCard';
import Checkbox from '@/Components/Checkbox';
import InputGroup from '@/Components/InputGroup';
import Meta from '@/Components/Meta';
import ProgramifyLink from '@/Components/ProgramifyLink';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/inertia-react';
import { IconAt, IconLoader, IconPassword } from '@tabler/icons';
import React, { useEffect } from 'react';

import InputLabel from '../../Components/InputLabel';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Meta
                {...{
                    title: 'Programify: Sign in',
                    description: 'Login ke akun kamu sekarang untuk mendapatkan pengalaman yang lebih menyenangkan.',
                }}
            />
            <>
                <AuthCard
                    header='Masuk ke akun Anda'
                    subheader={
                        <>
                            Tidak punya akun ?{' '}
                            <ProgramifyLink href='/register'>Daftar</ProgramifyLink>.
                        </>
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

                        <div className='my-5 block'>
                            <label className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <Checkbox
                                        name='remember'
                                        value={data.remember}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                remember: e.target.checked,
                                            })
                                        }
                                    />

                                    <span className='ml-2 select-none text-sm tracking-tight text-slate-600 dark:text-slate-200'>
                                        Ingat Saya
                                    </span>
                                </div>

                                {canResetPassword && (
                                    <ProgramifyLink href='/forgot-password'>Lupa Password</ProgramifyLink>
                                )}
                            </label>
                        </div>

                        <PrimaryButton processing={processing} type='submit'>
                            {processing && <IconLoader className='h-5 w-5 shrink-0 animate-spin' />}
                            Masuk
                        </PrimaryButton>
                    </form>
                </AuthCard>
            </>
        </>
    );
}

Login.layout = (page) => <GuestLayout title='Programify: Log in'>{page}</GuestLayout>;

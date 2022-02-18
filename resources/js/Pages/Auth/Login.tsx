// @ts-ignore
import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import toast from 'react-hot-toast';
import InputError from '@/Components/InputError';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => {
        form.reset('password');
      },
    });
    toast.success('Welcome Back');
  }

  return (
    <AuthenticationCard>
      <Head title="login" />
      <h1 className="mb-6 font-medium text-gray-900 sm:text-lg">
        Signin Your Programify Account
      </h1>

      {/* <ValidationErrors className="mb-4" /> */}

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError>{form.errors.email}</InputError>
        </div>

        <div className="mt-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <div className="mt-4 flex justify-between">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={form.data.remember === 'on'}
              onChange={e =>
                form.setData('remember', e.currentTarget.checked ? 'on' : '')
              }
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          {canResetPassword && (
            <div>
              <InertiaLink
                href={route('password.request')}
                className="text-sm text-primary-500 hover:text-primary-600 shadow-primary-strike shadow-sm"
              >
                Forgot password?
              </InertiaLink>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end mt-4">
          <span className="text-sm leading-relaxed text-gray-600 mr-2 hidden sm:flex">
            Dont Have An Account
          </span>
          <div className="text-sm leading-relaxed text-gray-600">
            <InertiaLink
              href={route('register')}
              className="text-sm text-primary-500 hover:text-primary-600 shadow-primary-strike shadow-sm"
            >
              Register Here
            </InertiaLink>
          </div>
          <Button
            className={classNames('ml-4 ', {
              'opacity-25': form.processing,
            })}
            disabled={form.processing}
          >
            Log in
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  );
}

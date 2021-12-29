// @ts-ignore
import { useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@Components/AuthenticationCard';
import Button from '@Components/Button';
import Input from '@Components/Input';
import Label from '@Components/Label';
import InputError from '@/Components/InputError';

interface Props {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: Props) {
  const route = useRoute();
  const form = useForm({
    token,
    email,
    password: '',
    password_confirmation: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('password.update'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Reset Password" />

      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="block mt-1 w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError message={form.errors.email} className="py-2" />
        </div>

        <div className="mt-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            className="block mt-1 w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="new-password"
          />
          <InputError message={form.errors.password} className="py-2" />
        </div>

        <div className="mt-4">
          <Label htmlFor="password_confirmation">Confirm Password</Label>
          <Input
            id="password_confirmation"
            type="password"
            className="block mt-1 w-full"
            value={form.data.password_confirmation}
            onChange={e =>
              form.setData('password_confirmation', e.currentTarget.value)
            }
            required
            autoComplete="new-password"
          />
          <InputError
            message={form.errors.password_confirmation}
            className="py-2"
          />
        </div>

        <div className="flex justify-end items-center mt-4">
          <Button
            className={classNames({ 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Reset Password
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  );
}

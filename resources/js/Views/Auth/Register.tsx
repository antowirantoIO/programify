// @ts-ignore
import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@Components/AuthenticationCard';
import Button from '@Components/Button';
import Checkbox from '@Components/Checkbox';
import Input from '@Components/Input';
import Label from '@Components/Label';
import InputError from '@/Components/InputError';

export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Register" />

      <form noValidate onSubmit={onSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            className="block mt-1 w-full"
            value={form.data.name}
            onChange={e => form.setData('name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="name"
          />
          <InputError message={form.errors.name} className="pt-2" />
        </div>

        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="block mt-1 w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
          />
          <InputError message={form.errors.email} className="pt-2" />
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
          <InputError message={form.errors.password} className="pt-2" />
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
            className="pt-2"
          />
        </div>

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <Label htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                />

                <div className="ml-2">
                  I agree to the
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Label>
          </div>
        )}

        <div className="flex justify-end items-center mt-4">
          <InertiaLink
            href={route('login')}
            className="text-sm text-gray-600 underline hover:text-gray-900"
          >
            Already registered?
          </InertiaLink>

          <Button
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Register
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  );
}

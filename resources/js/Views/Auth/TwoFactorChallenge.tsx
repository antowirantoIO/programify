// @ts-ignore
import { useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@Components/AuthenticationCard';
import Button from '@Components/Button';
import Input from '@Components/Input';
import Label from '@Components/Label';
import ValidationErrors from '@Components/ValidationErrors';
import InputError from '@/Components/InputError';

export default function TwoFactorChallenge() {
  const route = useRoute();
  const [recovery, setRecovery] = useState(false);
  const form = useForm({
    code: '',
    recovery_code: '',
  });
  const recoveryCodeRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  function toggleRecovery(e: React.FormEvent) {
    e.preventDefault();
    setRecovery(true);

    setTimeout(() => {
      if (recovery) {
        recoveryCodeRef.current?.focus();
        form.setData('code', '');
      } else {
        codeRef.current?.focus();
        form.setData('recovery_code', '');
      }
    }, 100);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('two-factor.login'));
  }

  return (
    <AuthenticationCard>
      <Head title="Two-Factor Confirmation" />

      <div className="mb-4 text-sm text-gray-600">
        {recovery
          ? 'Please confirm access to your account by entering one of your emergency recovery codes.'
          : 'Please confirm access to your account by entering the authentication code provided by your authenticator application.'}
      </div>

      <form onSubmit={onSubmit}>
        {recovery ? (
          <div>
            <Label htmlFor="recovery_code">Recovery Code</Label>
            <Input
              id="recovery_code"
              type="text"
              className="block mt-1 w-full"
              value={form.data.recovery_code}
              onChange={e =>
                form.setData('recovery_code', e.currentTarget.value)
              }
              ref={recoveryCodeRef}
              autoComplete="one-time-code"
            />
            <InputError message={form.errors.recovery_code} className="py-2" />
          </div>
        ) : (
          <div>
            <Label htmlFor="code">Code</Label>
            <Input
              id="code"
              type="text"
              inputMode="numeric"
              className="block mt-1 w-full"
              value={form.data.code}
              onChange={e => form.setData('code', e.currentTarget.value)}
              autoFocus
              autoComplete="one-time-code"
              ref={codeRef}
            />
            <InputError message={form.errors.code} className="py-2" />
          </div>
        )}

        <div className="flex justify-end items-center mt-4">
          <button
            type="button"
            className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-900"
            onClick={toggleRecovery}
          >
            {recovery ? 'Use an authentication code' : 'Use a recovery code'}
          </button>

          <Button
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Log in
          </Button>
        </div>
      </form>
    </AuthenticationCard>
  );
}

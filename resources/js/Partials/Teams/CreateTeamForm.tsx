import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import FormSection from '@Components/FormSection';
import Input from '@Components/Input';
import InputError from '@Components/InputError';
import Label from '@Components/Label';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateTeamForm() {
  const route = useRoute();
  const page = useTypedPage();
  const form = useForm({
    name: '',
  });

  function createTeam() {
    form.post(route('teams.store'), {
      errorBag: 'createTeam',
      preserveScroll: true,
    });
  }

  return (
    <FormSection
      onSubmit={createTeam}
      title={'Team Details'}
      description={'Create a new team to collaborate with others on projects.'}
    >
      <div className="col-span-6">
        <Label value="Team Owner" />

        <div className="flex items-center mt-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={page.props.user.profile_photo_url}
            alt={page.props.user.name}
          />

          <div className="ml-4 leading-tight">
            <div>{page.props.user.name}</div>
            <div className="text-gray-700 text-sm">{page.props.user.email}</div>
          </div>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-4">
        <Label htmlFor="name" value="Team Name" />
        <Input
          id="name"
          type="text"
          className="mt-1 block w-full"
          value={form.data.name}
          onChange={e => form.setData('name', e.currentTarget.value)}
          autoFocus
        />
        <InputError message={form.errors.name} className="mt-2" />
      </div>
    </FormSection>
  );
}

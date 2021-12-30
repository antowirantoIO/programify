import useRoute from '@/Hooks/useRoute';
import Button from '@Components/Button';
import FormSection from '@Components/FormSection';
import Input from '@Components/Input';
import InputError from '@Components/InputError';
import Label from '@Components/Label';
import { JetstreamTeamPermissions, Team, User } from '@/types';
import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import toast from 'react-hot-toast';

interface Props {
  team: Team & { owner: User };
  permissions: JetstreamTeamPermissions;
}

export default function UpdateTeamNameForm({ team, permissions }: Props) {
  const route = useRoute();
  const form = useForm({
    name: team.name,
  });

  function updateTeamName() {
    form.put(route('teams.update', [team]), {
      errorBag: 'updateTeamName',
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Teams Updated');
      },
    });
  }

  return (
    <FormSection
      onSubmit={updateTeamName}
      title={'Team Name'}
      description={`The team's name and owner information.`}
      renderActions={
        permissions.canUpdateTeam
          ? () => (
              <>
                <Button
                  className={classNames({ 'opacity-25': form.processing })}
                  disabled={form.processing}
                >
                  Save
                </Button>
              </>
            )
          : undefined
      }
    >
      {/* <!-- Team Owner Information --> */}
      <div className="col-span-6">
        <Label value="Team Owner" />

        <div className="flex items-center mt-2">
          <img
            className="object-cover w-12 h-12 rounded-full"
            src={team.owner.profile_photo_url}
            alt={team.owner.name}
          />

          <div className="ml-4 leading-tight">
            <div>{team.owner.name}</div>
            <div className="text-sm text-gray-700">{team.owner.email}</div>
          </div>
        </div>
      </div>

      {/* <!-- Team Name --> */}
      <div className="col-span-6 sm:col-span-4">
        <Label htmlFor="name" value="Team Name" />

        <Input
          id="name"
          type="text"
          className="block mt-1 w-full"
          value={form.data.name}
          onChange={e => form.setData('name', e.currentTarget.value)}
          disabled={!permissions.canUpdateTeam}
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div>
    </FormSection>
  );
}

import DeleteTeamForm from '@/Partials/Teams/DeleteTeamForm';
import TeamMemberManager from '@/Partials/Teams/TeamMemberManager';
import UpdateTeamNameForm from '@/Partials/Teams/UpdateTeamNameForm';
import SectionBorder from '@Components/SectionBorder';
import AppLayout from '@/Layouts/AppLayout';
import {
  JetstreamTeamPermissions,
  Role,
  Team,
  TeamInvitation,
  User,
} from '@/types';
import React from 'react';

interface UserMembership extends User {
  membership: {
    role: string;
  };
}

interface Props {
  team: Team & {
    owner: User;
    team_invitations: TeamInvitation[];
    users: UserMembership[];
  };
  availableRoles: Role[];
  permissions: JetstreamTeamPermissions;
}

export default function Show({ team, availableRoles, permissions }: Props) {
  return (
    <div>
      <div className="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <UpdateTeamNameForm team={team} permissions={permissions} />

        <div className="mt-10 sm:mt-0">
          <TeamMemberManager
            team={team}
            availableRoles={availableRoles}
            userPermissions={permissions}
          />
        </div>

        {permissions.canDeleteTeam && !team.personal_team ? (
          <>
            <SectionBorder />

            <div className="mt-10 sm:mt-0">
              <DeleteTeamForm team={team} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

Show.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title="Team Settings"
    renderHeader={() => (
      <h2 className="text-xl font-semibold leading-tight text-gray-800">
        Team Settings
      </h2>
    )}
  />
);

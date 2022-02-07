import DeleteTeamForm from '@/Partials/Teams/DeleteTeamForm';
import TeamMemberManager from '@/Partials/Teams/TeamMemberManager';
import UpdateTeamNameForm from '@/Partials/Teams/UpdateTeamNameForm';
import SectionBorder from '@/Components/SectionBorder';
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
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
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
      <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
      <div className="flex items-center gap-x-2">
        <a className="flex items-center" href="/antowiranto">
          <img
            className="w-7 h-7 rounded-full sm:mr-2"
            src={page.props.user.profile_photo_url}
            alt="Anto Wiranto"
          />
          <span className="hidden sm:inline">{page.props.user.name}</span>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Teams
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-400 capitalize">Teams Setting</span>
      </div>
    </div>
    )}
  />
);

import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Team } from '@/types';
import { Inertia } from '@inertiajs/inertia';
import React from 'react';
import Dropdown from './Dropdown';
import DropdownLink from './DropdownLink';

export default function DropdownMenu() {
  const page = useTypedPage();
  const route = useRoute();

  function switchToTeam(e: React.FormEvent, team: Team) {
    e.preventDefault();
    Inertia.put(
      route('current-team.update'),
      {
        team_id: team.id,
      },
      {
        preserveState: false,
      },
    );
  }

  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }
  return (
    <div>
      <Dropdown
        align="right"
        renderTrigger={() => (
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
            >
              {page.props.user.name}

              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        )}
      >
        {/* <!-- Account Management --> */}
        <div className="block px-4 py-2 text-xs text-gray-400">
          Manage Account
        </div>

        <DropdownLink
          href={'#'}
        >
          View Profile
        </DropdownLink>

        <DropdownLink
          href={route('profile.show')}
          active={route().current('profile.show')}
        >
          Update Profile
        </DropdownLink>

        {page.props.jetstream.hasApiFeatures ? (
          <DropdownLink
            href={route('api-tokens.index')}
            active={route().current('api-tokens.index')}
          >
            API Tokens
          </DropdownLink>
        ) : null}

        <div className="border-t border-gray-100"></div>

        <div>
          {/* <!-- Team Management --> */}
          {page.props.jetstream.hasTeamFeatures ? (
            <>
              <div className="block px-4 py-2 text-xs text-gray-400">
                Manage Team
              </div>

              {/* <!-- Team Settings --> */}
              <DropdownLink
                href={route('teams.show', [page.props.user.current_team!])}
                active={route().current('teams.show')}
              >
                Team Settings
              </DropdownLink>

              {page.props.jetstream.canCreateTeams ? (
                <DropdownLink
                  href={route('teams.create')}
                  active={route().current('teams.create')}
                >
                  Create New Team
                </DropdownLink>
              ) : null}

              <div className="border-t border-gray-100"></div>

              {/* <!-- Team Switcher --> */}
              <div className="block px-4 py-2 text-xs text-gray-400">
                Switch Teams
              </div>

              {page.props.user.all_teams?.map(team => (
                <form onSubmit={e => switchToTeam(e, team)} key={team.id}>
                  <DropdownLink as="button">
                    <div className="flex items-center">
                      {team.id == page.props.user.current_team_id && (
                        <svg
                          className="mr-2 h-5 w-5 text-green-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      )}
                      <div>{team.name}</div>
                    </div>
                  </DropdownLink>
                </form>
              ))}
            </>
          ) : null}
        </div>

        <div className="border-t border-gray-100"></div>

        {/* <!-- Authentication --> */}
        <form onSubmit={logout}>
          <DropdownLink as="button">Log Out</DropdownLink>
        </form>
      </Dropdown>
    </div>
  );
}

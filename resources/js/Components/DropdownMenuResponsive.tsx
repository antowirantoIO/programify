import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Team } from '@/types';
import { Inertia } from '@inertiajs/inertia';
import React from 'react';
import Dropdown from './Dropdown';
import DropdownLink from './DropdownLink';

export default function DropdownMenuResponsive() {
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
    <div className="relative sm:hidden pl-2">
      <Dropdown
        align="right"
        renderTrigger={() => (
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex items-center text-sm leading-4 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 30 30"
              >
                <path d="M15 4a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm0 8a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3zm0 8a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"></path>
              </svg>
            </button>
          </span>
        )}
      >
        <DropdownLink href={'#'}>Home</DropdownLink>
        <DropdownLink href={'#'}>Series</DropdownLink>
        <DropdownLink href={'#'}>Topics</DropdownLink>
        <DropdownLink href={'#'}>Articles</DropdownLink>
        <DropdownLink href={'#'}>Forum</DropdownLink>
        <DropdownLink href={'#'}>Premiun</DropdownLink>

        {page.props.user ? (
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
              {page.props.jetstream.managesProfilePhotos ? (
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={page.props.user.profile_photo_url}
                    alt={page.props.user.name}
                  />
                </div>
              ) : null}

              <div>
                <div className="font-medium text-base text-gray-800">
                  {page.props.user.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {page.props.user.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <DropdownLink
                href={route('profile.show')}
                active={route().current('profile.show')}
              >
                Profile
              </DropdownLink>

              {page.props.jetstream.hasApiFeatures ? (
                <DropdownLink
                  href={route('api-tokens.index')}
                  active={route().current('api-tokens.index')}
                >
                  API Tokens
                </DropdownLink>
              ) : null}

              {/* <!-- Team Management --> */}
              {page.props.jetstream.hasTeamFeatures ? (
                <>
                  <div className="border-t border-gray-200"></div>

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

                  <div className="border-t border-gray-200"></div>

                  {/* <!-- Team Switcher --> */}
                  <div className="block px-4 py-2 text-xs text-gray-400">
                    Switch Teams
                  </div>
                  {page.props.user?.all_teams?.map(team => (
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
            <form method="POST" onSubmit={logout}>
              <DropdownLink as="button">Log Out</DropdownLink>
            </form>
          </div>
        ) : (
          <>
            <div className="border-t border-gray-100"></div>
            <DropdownLink
              href={route('login')}
              active={route().current('login')}
            >
              Login
            </DropdownLink>
            <DropdownLink
              href={route('register')}
              active={route().current('register')}
            >
              Register
            </DropdownLink>
          </>
        )}
      </Dropdown>
    </div>
  );
}

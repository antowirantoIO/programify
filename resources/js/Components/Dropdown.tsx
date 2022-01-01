import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Team } from '@/types';
import { Menu, Transition } from '@headlessui/react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

export default function Dropdown() {
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
    <div className="flex items-center ml-6">
      <div className="relative ml-3">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full">
              {page.props.user ? (
                <>
                  {page.props.jetstream.managesProfilePhotos ? (
                    <button className="flex text-sm rounded-full border-2 border-transparent transition focus:outline-none focus:border-gray-300">
                      <img
                        className="object-cover w-8 h-8 rounded-full"
                        src={page.props.user.profile_photo_url}
                        alt={page.props.user.name}
                      />
                    </button>
                  ) : (
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 bg-white rounded-md border border-transparent transition hover:text-gray-700 focus:outline-none"
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
                </>
              ) : (
                'svg'
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {page.props.user ? (
                <>
                  <div className="px-1 py-1 ">
                    <div className="block px-2 py-1 text-xs text-gray-400">
                      Profile Setting
                    </div>
                    <Menu.Item>
                      {({ active }) => (
                        <InertiaLink
                          href={route('profile.show')}
                          className={`${
                            active
                              ? 'bg-primary-400 text-white'
                              : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Profile
                        </InertiaLink>
                      )}
                    </Menu.Item>
                    {page.props.jetstream.hasApiFeatures ? (
                      <Menu.Item>
                        {({ active }) => (
                          <InertiaLink
                            href={route('api-tokens.index')}
                            className={`${
                              active
                                ? 'bg-primary-400 text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            API Token
                          </InertiaLink>
                        )}
                      </Menu.Item>
                    ) : null}
                  </div>
                  {page.props.jetstream.hasTeamFeatures ? (
                    <>
                      <div className="px-1 py-1 ">
                        <div className="block px-2 py-1 text-xs text-gray-400">
                          Manage Teams
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <InertiaLink
                              href={route('teams.show', [
                                page.props.user.current_team!,
                              ])}
                              className={`${
                                active
                                  ? 'bg-primary-400 text-white'
                                  : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Team Settings
                            </InertiaLink>
                          )}
                        </Menu.Item>
                        {page.props.jetstream.canCreateTeams ? (
                          <Menu.Item>
                            {({ active }) => (
                              <InertiaLink
                                href={route('teams.create')}
                                className={`${
                                  active
                                    ? 'bg-primary-400 text-white'
                                    : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                Create New Team
                              </InertiaLink>
                            )}
                          </Menu.Item>
                        ) : null}
                      </div>
                      <div className="px-1 py-1 ">
                        <div className="block px-2 py-1 text-xs text-gray-400">
                          Switch Team
                        </div>
                        {page.props.user.all_teams?.map(team => (
                          <form
                            onSubmit={e => switchToTeam(e, team)}
                            key={team.id}
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={`${
                                    active
                                      ? 'bg-primary-400 text-white'
                                      : 'text-gray-900'
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <div className="flex items-center">
                                    {team.id ==
                                      page.props.user.current_team_id && (
                                      <svg
                                        className="mr-2 w-5 h-5 text-green-400"
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
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        ))}
                      </div>
                    </>
                  ) : null}

                  <div className="px-1 py-1">
                    <form onSubmit={logout}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={`${
                              active
                                ? 'bg-primary-400 text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </>
              ) : null}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

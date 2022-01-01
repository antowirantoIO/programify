import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Team } from '@/types';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';
import NavLink from './NavLink';

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
      <div className="flex items-center">
        <div className="flex flex-col md:flex-row md:items-center">
          <button className="flex items-center gap-4 px-3 py-2 border border-gray-500 bg-gray-800 rounded-xl">
            <svg
              className="text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M238.7 220.73a110.36 110.36 0 1 1 110.36-110.37A110.49 110.49 0 0 1 238.7 220.73Zm0-216.94a106.57 106.57 0 1 0 106.57 106.57A106.69 106.69 0 0 0 238.7 3.79Z"
                className="fill-current text-primary-300"
              />
              <circle
                cx="238.7"
                cy="110.37"
                r="57.53"
                className="fill-current text-primary-400"
              />
              <path
                d="M444.4 302.82a29.41 29.41 0 0 0-58.82 0v-22.55a29.41 29.41 0 0 0-58.82 0V267a29.41 29.41 0 0 0-58.82 0V119.93a29.41 29.41 0 1 0-58.82 0v205.88c0 16.24-14.4 35.63-29.41 29.41-20.38-8.44-62.39-62.39-62.39-62.39a29.41 29.41 0 0 0-41.59 0c-11.49 11.49-10.1 28.87 0 41.59C112 380.22 187.57 475 249.05 498.95c48.28 18.78 124.6 21.54 163.28-20.51 27.17-29.54 31.32-62.84 32-120.93 0-32.5.12-54.69.12-54.69Z"
                className="text-gray-300 fill-current"
              />
            </svg>
          </button>
        </div>
        <div className="w-px ml-3 mr-3 h-7 bg-gray-50" />
      </div>
      <div className="relative">
        {page.props.user ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full">
                {page.props.jetstream.managesProfilePhotos ? (
                  <button className="flex text-sm rounded-full border-2 border-transparent transition focus:outline-none focus:border-gray-300">
                    <img
                      className="object-cover w-9 h-9 rounded-full"
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
                <div className="px-1 py-1 sm:hidden">
                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Home
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Series
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Topics
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Discussion
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Premium
                      </InertiaLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <div className="block px-2 py-1 text-xs text-gray-400">
                    Profile Setting
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href={route('profile.show')}
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
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
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <Menu as="div" className="relative inline-block sm:hidden text-left">
            <div>
              <Menu.Button className="inline-flex  justify-center w-full">
                <div className="text-white">
                  {/* prettier-ignore */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
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
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Home
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Series
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Topics
                      </InertiaLink>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Discussion
                      </InertiaLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 px-1">
                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Login
                      </InertiaLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <InertiaLink
                        href="#"
                        className={`${
                          active ? 'bg-primary-400 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Register
                      </InertiaLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
    </div>
  );
}

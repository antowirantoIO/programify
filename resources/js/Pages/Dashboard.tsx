import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Tab } from '@headlessui/react';

interface Props {
  userData: any;
}

export default function Dashboard({ userData }: Props) {
  return (
    <div>
      <div className="bg-banner md:rounded-b-[3rem] print:hidden">
        <div className="z-20 pb-10 mb-5 text-gray-200 shadow selection:bg-gray-700 selection:text-white">
          <div className="max-w-screen-lg px-4 mx-auto lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
            <div className="flex flex-col gap-4 py-4 sm:py-4 md:py-16 md:px-10 lg:px-0 lg:py-20 md:flex-row md:gap-8 xl:gap-16">
              <div className="w-full">
                <div className="flex flex-col justify-center w-full gap-8 md:flex-row">
                  <div className="w-full lg:w-3/5">
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start gap-x-6 lg:text-left">
                      <div className="flex-shrink-0">
                        <img
                          src={userData.profile_photo_url}
                          alt="antowiranto"
                          className="rounded-xl h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] mb-4"
                        />
                      </div>
                      <div>
                        <h1 className="flex items-center justify-center mt-2 font-semibold text-white sm:text-lg lg:text-2xl lg:justify-start lg:mt-0">
                          {userData.name}
                        </h1>
                        <p className="text-sm text-gray-400 sm:text-base lg:text-lg lg:mb-2">
                          {userData.username}
                        </p>
                        <div className="my-1 text-xs text-gray-200 md:text-sm">
                          <div className="text-center lg:text-left">
                            Joined{' '}
                            {new Date(userData.created_at).toDateString()}
                          </div>
                        </div>
                        <div className="text-xs leading-relaxed text-white md:text-base md:leading-6 md:pt-2">
                          <span>
                            {!userData.bio
                              ? `We don't know much about them, but we're sure ${userData.name} is great someone.`
                              : userData.bio}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5">
                    <div className="flex flex-row items-center gap-2 md:flex-col lg:flex-row md:gap-4">
                      <div className="flex items-center justify-center w-1/3 h-40 text-center bg-gray-500 rounded-lg bg-opacity-10 md:w-1/2 lg:w-1/3 lg:h-56">
                        <div className="flex flex-col justify-between py-10 lg:h-full">
                          <div className="flex items-center justify-center w-full">
                            <img
                              src="https://laracasts.com/images/profiles/xp-level.svg?id=2"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="font-bold text-white text-md lg:text-2xl">
                              200
                            </div>
                            <div className="text-gray-300 text-xxs lg:text-sm">
                              Total Experience
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-1/3 h-40 text-center bg-gray-500 rounded-lg bg-opacity-10 md:w-1/2 lg:w-1/3 lg:h-56">
                        <div className="flex flex-col justify-between py-10 lg:h-full">
                          <div className="flex items-center justify-center w-full">
                            <img
                              src="https://laracasts.com/images/profiles/xp-lesson.svg?id=2"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="font-bold text-white text-md lg:text-2xl">
                              56
                            </div>
                            <div className="text-gray-300 text-xxs lg:text-sm">
                              Lessons Completed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-1/3 h-40 text-center bg-gray-500 rounded-lg bg-opacity-10 md:w-1/2 lg:w-1/3 lg:h-56">
                        <div className="flex flex-col justify-between py-10 lg:h-full">
                          <div className="flex items-center justify-center w-full">
                            <img
                              src="https://laracasts.com/images/profiles/xp-stars.svg?id=2"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="font-bold text-white text-md lg:text-2xl">
                              3
                            </div>
                            <div className="text-gray-300 text-xxs lg:text-sm">
                              Best Quiz Awards
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tab.Group as={'div'}>
          <Tab.List className="flex justify-center mb-4 -mt-[4rem] font-poppins">
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'pb-1 mx-4 mb-1 lg:px-4 after:h-1 after:w-full after:block after:rounded-full after:bg-blue transition-colors duration-100'
                  : 'pb-1 mx-4 mb-1 lg:px-4 after:h-1 after:w-full after:block after:rounded-full after:bg-transparent transition-colors duration-100'
              }
            >
              <button
                className="focus:outline-none font-medium text-white h-full pb-[12px]"
                role="tab"
                aria-selected="false"
              >
                My Activity
              </button>
            </Tab>
            <Tab
              as="div"
              className={({ selected }) =>
                selected
                  ? 'pb-1 mx-4 mb-1 lg:px-4 after:h-1 after:w-full after:block after:rounded-full after:bg-blue transition-colors duration-100'
                  : 'pb-1 mx-4 mb-1 lg:px-4 after:h-1 after:w-full after:block after:rounded-full after:bg-transparent transition-colors duration-100'
              }
            >
              <button
                className="focus:outline-none font-medium text-white h-full pb-[12px]"
                role="tab"
                aria-selected="true"
              >
                My Experience
              </button>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="container">
                <div className="lg:w-2/3 lg:mx-auto">
                  <div className="py-6 text-center">
                    <h2 className="mb-8 text-4xl font-medium text-gray-800 font-poppins">
                      <a className="inherits-color" href="/discuss">
                        Start your first discussion
                      </a>
                    </h2>
                    <a href="/discuss">
                      <img
                        className="mx-auto"
                        src="https://laracasts.com/images/profiles/start-first-discussion@2x.png"
                        alt="Start Your First Discussion"
                        width={529}
                        height={272}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="container">
                <div className="lg:w-2/3 lg:mx-auto">
                  <div className="py-6 text-center">
                    <h2 className="mb-8 text-4xl font-medium text-gray-800 font-poppins">
                      <a className="inherits-color" href="/discuss">
                        No Activity Yet
                      </a>
                    </h2>
                    <a href="/discuss">
                      <img
                        className="mx-auto"
                        src="https://laracasts.com/images/profiles/start-first-discussion@2x.png"
                        alt="Start Your First Discussion"
                        width={529}
                        height={272}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

Dashboard.layout = (page: JSX.Element) => (
  <AppLayout children={page} title="Dashboard" />
);

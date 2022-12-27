import FrontLayout from '@/Layouts/AppLayout';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Play = () => {
    return (
        <>
            <div>
                <aside
                    id="video-episode-list"
                    className="js-video-episode-list hide-scrollbar z-10 flex max-h-screen min-h-screen flex-shrink-0 flex-col overflow-y-auto overflow-x-hidden border-r border-blue/10 bg-blue-900 px-4 lg:px-2 is-open fixed"
                >
                    <div
                        className="flex flex-shrink-0 items-center justify-between border-b-2 border-[#0b1018] py-1 px-2 text-white"
                        style={{ height: '60px' }}
                    >
                        <a
                            aria-label="Series Overview"
                            className="inherits-color inline-flex items-center text-xs font-medium hover:text-blue"
                            href="/series/neovim-as-a-php-ide"
                        >
                            <svg viewBox="0.75 0.75 32.5 32.5" width={30}>
                                <g fill="none" fillRule="evenodd">
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        stroke="#000"
                                                        strokeOpacity=".012"
                                                        strokeWidth=".5"
                                                        d="M0 0L32 0 32 32 0 32z"
                                                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                    />
                                                    <path
                                                        className="fill-current"
                                                        d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>Series Overview</span>
                        </a>
                        <button className="inherits-color flex hover:text-blue lg:hidden">
                            <svg
                                width={15}
                                viewBox="0 0 25 25"
                                className="fill-current"
                            >
                                <path
                                    d="M22.222 0 25 2.778l-9.723 9.721L25 22.222 22.222 25 12.5 15.277 2.778 25 0 22.222 9.722 12.5 0 2.778 2.778 0 12.5 9.722 22.222 0z"
                                    className="fill-current"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                        <a
                            aria-label="View All Series"
                            title="View All Series"
                            className="hidden lg:inline-flex"
                            href="/series"
                        >
                            <img
                                src="https://laracasts.com/images/logo/logo-white-arrow.svg"
                                width={21}
                                alt="Laracasts Arrow Logo"
                                className="mr-2"
                            />
                        </a>
                    </div>
                    <header
                        className="relative sticky top-0 z-10 -mx-2 mb-2 cursor-pointer border-b-2 border-[#0b1018] px-2"
                        style={{ background: 'inherit' }}
                    >
                        <a
                            className="flex items-center space-x-3 py-2 text-white"
                            href="/series/neovim-as-a-php-ide"
                        >
                            <div
                                className="radial-progress-container"
                                style={{ height: '73px', width: '73px' }}
                            >
                                <div
                                    className="radial-progress-inner"
                                    style={{ width: '65px' }}
                                >
                                    <img
                                        loading="lazy"
                                        className="lazy lazyloaded"
                                        src="https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png?tr=w-116"
                                        alt="Neovim as a PHP and JavaScript IDE thumbnail"
                                        width={58}
                                        height={58}
                                    />
                                    {/**/}
                                </div>
                                <svg
                                    className="radial-progress-bar"
                                    width={73}
                                    height={73}
                                    version="1.1"
                                >
                                    <defs>
                                        <radialGradient
                                            id="radial-gradient17417.4417071719"
                                            fx={1}
                                            fy="0.5"
                                            cx="0.5"
                                            cy="0.5"
                                            r="0.65"
                                        >
                                            <stop
                                                offset="30%"
                                                stopColor="#328af1"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#328af1"
                                            />
                                        </radialGradient>
                                    </defs>
                                    <circle
                                        r="32.5"
                                        cx="36.5"
                                        cy="36.5"
                                        fill="transparent"
                                        stroke="rgba(0, 0, 0, 0.2)"
                                        strokeDasharray="204.20352248333654"
                                        strokeDashoffset={0}
                                        strokeLinecap="round"
                                        style={{
                                            height: '73px',
                                            width: '73px',
                                            strokeWidth: '4px',
                                        }}
                                    />
                                    <circle
                                        transform="rotate(270, 36.5,36.5)"
                                        r="32.5"
                                        cx="36.5"
                                        cy="36.5"
                                        fill="transparent"
                                        stroke="url(#radial-gradient17417.4417071719)"
                                        strokeDasharray="204.20352248333654"
                                        strokeDashoffset="204.20352248333654"
                                        strokeLinecap="round"
                                        style={{
                                            height: '73px',
                                            width: '73px',
                                            strokeWidth: '4px',
                                            strokeDashoffset: '204.204',
                                            transition:
                                                'stroke-dashoffset 1000ms linear 0s',
                                        }}
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 className="mb-2 pr-2 font-bold leading-tight transition-all">
                                    Neovim as a PHP and JavaScript IDE
                                </h2>
                                <div className="flex items-center text-3xs font-normal text-grey-800">
                                    <div className="mr-3 inline-flex items-center">
                                        <svg
                                            width={9}
                                            viewBox="0 0 9 12"
                                            className="mr-1"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <g className="fill-current">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M2.858 5.15v4.415c0 .197-.11.371-.273.436-.231.092-.51.14-.808.14-.855 0-1.775-.396-1.775-1.266v-5.65c-.02-.389.1-1.074.676-1.445C.945 1.607 2.348.589 3.052.074c.125-.092.286-.098.417-.018.132.081.214.237.214.406v.669c0 .255-.183.462-.41.462-.175 0-.325-.125-.383-.302-.636.462-1.574 1.14-1.806 1.29-.21.136-.255.385-.264.52 0 .151.029.27.081.335.145.18.63.068 1.157-.29C2.566 2.802 5.067.92 5.092.902c.126-.095.287-.104.42-.023.133.08.216.237.216.408v.052c0 .155-.068.299-.182.385 0 0-1.736 1.31-1.89 1.42-.589.428-.798.953-.798 2.005zM9 2.92v5.998c0 .158-.072.306-.191.39 0 0-2.385 2.092-2.869 2.425-.254.175-.578.267-.936.267-.85 0-1.73-.52-1.73-1.389V4.878l.001-.006c.008-.338.078-.82.635-1.285.334-.278 2.321-1.809 2.406-1.873.125-.097.288-.107.421-.027.134.08.218.237.218.408v.67c0 .254-.183.461-.409.461-.169 0-.314-.115-.376-.28-.635.49-1.566 1.212-1.775 1.385-.263.22-.298.365-.303.551.001.138.034.243.101.313.209.216.77.125 1.324-.25.41-.278 2.176-1.819 2.822-2.389.124-.108.29-.128.431-.05.14.077.23.237.23.414zm-.818 2.059L6.137 6.77v.924l2.045-1.792v-.924z"
                                                                    transform="translate(-890.000000, -316.000000) translate(774.000000, 311.000000) translate(116.000000, 4.000000) translate(0.000000, 1.000000)"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <strong>10 Lessons</strong>
                                    </div>
                                    <div className="inline-flex items-center">
                                        <svg
                                            width={10}
                                            viewBox="0 0 10 10"
                                            className="mr-1"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    className="fill-current"
                                                                    d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                                                                    transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <strong>1h 35m</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </header>
                    <div className="hide-scrollbar flex-1">
                        <div
                            className="episode-list is-condensed hide-scrollbar overflow-auto"
                            style={{
                                maxHeight:
                                    'calc((var(--vh, 1vh) * 100) - 155px)',
                            }}
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 relative flex w-full cursor-pointer items-center mb-2 h-[40px] rounded-xl px-4 py-1">
                                            <h3
                                                className="flex items-center divide-x-2 divide-white/10 text-xs font-medium lg:max-w-2xs"
                                                title="Introduction"
                                            >
                                                <span className="flex-shrink-0 pr-4">
                                                    {' '}
                                                    Section 1
                                                </span>
                                                <span
                                                    className="inline-block overflow-hidden whitespace-nowrap pl-4 text-sm font-normal lg:max-w-2/3"
                                                    style={{
                                                        textOverflow:
                                                            'ellipsis',
                                                    }}
                                                >
                                                    Introduction
                                                </span>
                                            </h3>

                                            <div className="opacity-100 -mr-2 h-10 w-10 bg-deep-black/10 flex-center absolute right-5 ml-auto self-center rounded-lg">
                                                <ChevronUpIcon
                                                    className={`${
                                                        open
                                                            ? 'rotate-180 transform'
                                                            : ''
                                                    } h-5 w-5`}
                                                />
                                            </div>
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="panel relative transition-colors duration-300 dark text-white bg-transparent episode-list-item flex cursor-pointer content-item-condensed my-2 items-center rounded-xl border border-transparent py-0 px-0 pr-[5px] text-white hover:bg-blue/7 is-tooling justify-center bg-blue/7">
                                                <div className="flex-center relative pr-0 font-bold mr-2 scale-[.60]">
                                                    <div className="circle flex items-center">
                                                        <a className="inherits-color cursor-pointer">
                                                            <div className="flex items-center justify-center rounded-full">
                                                                <div
                                                                    className="radial-progress-container rounded-full"
                                                                    style={{
                                                                        height: '62px',
                                                                        width: '62px',
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="radial-progress-inner"
                                                                        style={{
                                                                            width: '58px',
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="flex-center h-full w-full rounded-full text-white bg-tooling"
                                                                            style={{
                                                                                width: '62px',
                                                                                height: '62px',
                                                                                transform:
                                                                                    'scale(0.8)',
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={
                                                                                    25
                                                                                }
                                                                                viewBox="0 0 17 19"
                                                                                aria-hidden="true"
                                                                                className="inline-block"
                                                                                style={{
                                                                                    marginLeft:
                                                                                        '7px',
                                                                                }}
                                                                            >
                                                                                <g
                                                                                    className="fill-current"
                                                                                    fillRule="evenodd"
                                                                                >
                                                                                    <path
                                                                                        fill="none"
                                                                                        d="M-7-4h27v27H-7z"
                                                                                    />
                                                                                    <path d="M16.043 10.283L1.873 18.38h-.001a.924.924 0 0 1-.915 0 .905.905 0 0 1-.457-.784V1.405C.5 1.08.675.783.957.62a.924.924 0 0 1 .915 0l14.17 8.096h.001c.282.161.457.46.457.783a.905.905 0 0 1-.457.783z" />
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <svg
                                                                        className="radial-progress-bar"
                                                                        width={
                                                                            62
                                                                        }
                                                                        height={
                                                                            62
                                                                        }
                                                                        version="1.1"
                                                                    >
                                                                        <defs>
                                                                            <radialGradient
                                                                                id="radial-gradient86053.43308939647"
                                                                                fx="0.7213791155194508"
                                                                                fy="0.948320518392618"
                                                                                cx="0.5"
                                                                                cy="0.5"
                                                                                r="0.65"
                                                                            >
                                                                                <stop
                                                                                    offset="30%"
                                                                                    stopColor="#8B60ED"
                                                                                />
                                                                                <stop
                                                                                    offset="100%"
                                                                                    stopColor="#8B60ED"
                                                                                />
                                                                            </radialGradient>
                                                                        </defs>
                                                                        <circle
                                                                            r={
                                                                                29
                                                                            }
                                                                            cx={
                                                                                31
                                                                            }
                                                                            cy={
                                                                                31
                                                                            }
                                                                            fill="transparent"
                                                                            stroke="rgba(0,0,0,.50)"
                                                                            strokeDasharray="182.212373908208"
                                                                            strokeDashoffset={
                                                                                0
                                                                            }
                                                                            strokeLinecap="round"
                                                                            style={{
                                                                                height: '62px',
                                                                                width: '62px',
                                                                                strokeWidth:
                                                                                    '2px',
                                                                            }}
                                                                        />
                                                                        <circle
                                                                            transform="rotate(270, 31,31)"
                                                                            r={
                                                                                29
                                                                            }
                                                                            cx={
                                                                                31
                                                                            }
                                                                            cy={
                                                                                31
                                                                            }
                                                                            fill="transparent"
                                                                            stroke="url(#radial-gradient86053.43308939647)"
                                                                            strokeDasharray="182.212373908208"
                                                                            strokeDashoffset="182.212373908208"
                                                                            strokeLinecap="round"
                                                                            style={{
                                                                                height: '62px',
                                                                                width: '62px',
                                                                                strokeWidth:
                                                                                    '2px',
                                                                                strokeDashoffset:
                                                                                    '149.414',
                                                                                transition:
                                                                                    'stroke-dashoffset 1000ms linear 0s',
                                                                            }}
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="episode-list-details flex flex-1 mobile:border-b-0">
                                                    <div>
                                                        <div className="items-center justify-between">
                                                            <h4 className="episode-list-title flex items-center font-medium text-white md:text-sm">
                                                                <a
                                                                    className="md:clamp one-line leading-normal font-poppins text-[11px] font-semibold tracking-normal text-blue hover:text-blue"
                                                                    title="Why Neovim?"
                                                                    href="/episodes/2617"
                                                                >
                                                                    Why Neovim?
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    {/**/}
                                                    <div className="mt-auto w-full flex items-center lg:mt-px">
                                                        <span className="text-3xs text-grey-600/75 mr-2 font-semibold">
                                                            {' '}
                                                            Episode 1
                                                        </span>
                                                        <span className="mr-3 inline-flex items-center">
                                                            <svg
                                                                width={8}
                                                                viewBox="0 0 10 10"
                                                                className="text-grey-600/75"
                                                            >
                                                                <g
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <g>
                                                                                    <path
                                                                                        className="fill-current"
                                                                                        d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                                                                                        transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                                                                                    />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="ml-1 text-3xs text-grey-600/75 text-3xs font-semibold">
                                                                12:12{' '}
                                                            </span>
                                                        </span>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                    <div className="-mx-2 mt-6 hidden bg-blue bg-opacity-[.04] lg:block">
                        <div className="control label flex items-center justify-between px-5 py-4 text-xs font-medium font-bold text-white">
                            <span className="mr-4 dark:text-grey-600">
                                Toggle Transcript
                            </span>
                            <label
                                className="switch"
                                htmlFor="episode_list_toggle_transcript"
                            >
                                <input
                                    id="episode_list_toggle_transcript"
                                    type="checkbox"
                                />
                                <span className="slider round bg-blue/15" />
                            </label>
                            {/**/}
                        </div>
                    </div>
                </aside>
                <main>
                    <section
                        id="laracasts-video-wrap"
                        className="max-w-none bg-deep-black p-0 flex-1"
                    >
                        <div
                            className="video-main relative mx-auto flex justify-center"
                            style={{ maxWidth: '150vh' }}
                        >
                            <div className="flex-1 overflow-hidden">
                                <div
                                    className="mb-2 flex h-10 justify-between"
                                    style={{ display: 'none' }}
                                >
                                    <div
                                        className="mr-3 ml-auto flex flex-1 items-center rounded-full px-4 text-white bg-gradient-left-tooling"
                                        style={{ maxWidth: '500px' }}
                                    >
                                        <img
                                            src="https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png"
                                            alt=""
                                            width={25}
                                            height={25}
                                            className="mr-2"
                                        />
                                        <h4 className="flex-1">
                                            <button className="flex w-full items-center justify-between text-xs font-semibold text-white">
                                                <span>Why Neovim?</span>
                                                <span className="flex items-center text-2xs">
                                                    <svg
                                                        width={9}
                                                        viewBox="0 0 9 12"
                                                        className="mr-1"
                                                    >
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g className="fill-current">
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M2.858 5.15v4.415c0 .197-.11.371-.273.436-.231.092-.51.14-.808.14-.855 0-1.775-.396-1.775-1.266v-5.65c-.02-.389.1-1.074.676-1.445C.945 1.607 2.348.589 3.052.074c.125-.092.286-.098.417-.018.132.081.214.237.214.406v.669c0 .255-.183.462-.41.462-.175 0-.325-.125-.383-.302-.636.462-1.574 1.14-1.806 1.29-.21.136-.255.385-.264.52 0 .151.029.27.081.335.145.18.63.068 1.157-.29C2.566 2.802 5.067.92 5.092.902c.126-.095.287-.104.42-.023.133.08.216.237.216.408v.052c0 .155-.068.299-.182.385 0 0-1.736 1.31-1.89 1.42-.589.428-.798.953-.798 2.005zM9 2.92v5.998c0 .158-.072.306-.191.39 0 0-2.385 2.092-2.869 2.425-.254.175-.578.267-.936.267-.85 0-1.73-.52-1.73-1.389V4.878l.001-.006c.008-.338.078-.82.635-1.285.334-.278 2.321-1.809 2.406-1.873.125-.097.288-.107.421-.027.134.08.218.237.218.408v.67c0 .254-.183.461-.409.461-.169 0-.314-.115-.376-.28-.635.49-1.566 1.212-1.775 1.385-.263.22-.298.365-.303.551.001.138.034.243.101.313.209.216.77.125 1.324-.25.41-.278 2.176-1.819 2.822-2.389.124-.108.29-.128.431-.05.14.077.23.237.23.414zm-.818 2.059L6.137 6.77v.924l2.045-1.792v-.924z"
                                                                                transform="translate(-890.000000, -316.000000) translate(774.000000, 311.000000) translate(116.000000, 4.000000) translate(0.000000, 1.000000)"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>{' '}
                                                    Episode 1
                                                </span>
                                            </button>
                                        </h4>
                                    </div>
                                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-grey-800 text-white transition-all hover:bg-blue">
                                        <svg
                                            width={20}
                                            viewBox="0 0 25 25"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M22.222 0 25 2.778l-9.723 9.721L25 22.222 22.222 25 12.5 15.277 2.778 25 0 22.222 9.722 12.5 0 2.778 2.778 0 12.5 9.722 22.222 0z"
                                                className="fill-current"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <div
                                        id="laracasts-video"
                                        style={{}}
                                        data-vimeo-initialized="true"
                                    >
                                        <div
                                            style={{
                                                padding: '56.25% 0 0 0',
                                                position: 'relative',
                                            }}
                                        >
                                            <iframe
                                                src="https://www.youtube.com/embed/Kmz5oyaIEMI"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                title="01-intro.mp4"
                                                data-ready="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pt-4">
                        <div
                            className="container"
                            style={{ maxWidth: '1166px' }}
                        >
                            <div className="panel relative transition-colors duration-300 light text-black bg-white rounded-2xl video-sponsor mb-4 cursor-pointer px-0 py-0">
                                <div>
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html: '#carbonads .carbon-img{width:130px;margin-bottom:2ex;border-radius:8px;overflow:hidden}#carbonads .carbon-wrap{flex-direction:column}#carbonads .carbon-text{margin:0}#carbonads .carbon-poweredby{text-align:center}@media only screen and (min-width: 320px) and (max-width: 759px){#carbonads{position:relative}#carbonads .carbon-wrap{flex-direction:row}#carbonads .carbon-img{margin:0}#carbonads .carbon-text{padding:0 1em 3ex;font-size:.875rem}#carbonads .carbon-poweredby{position:absolute;right:0;bottom:0;border-radius:0;border-top-left-radius:3px;text-align:center}}',
                                        }}
                                    />
                                    <div id="carbonads">
                                        <span>
                                            <span className="carbon-wrap">
                                                <a
                                                    href="https://srv.carbonads.net/ads/click/x/GTND42JUC6AIP53ICKALYKQNCA7DVKJYCASDPZ3JCYSI423WCV7IP53KC6YIE23LF67IK5QMCWYDK2QECASDLK3EHEYIK27JF6ADVK3ECTNCYBZ52K?segment=placement:laracastscom;"
                                                    className="carbon-img"
                                                    target="_blank"
                                                    rel="noopener sponsored"
                                                >
                                                    <img
                                                        src="https://cdn4.buysellads.net/uu/1/122891/1664548579-FreeAcct-Black-Ad2.png"
                                                        alt="ads via Carbon"
                                                        height={100}
                                                        width={130}
                                                        style={{
                                                            maxWidth: '130px',
                                                        }}
                                                    />
                                                </a>
                                                <a
                                                    href="https://srv.carbonads.net/ads/click/x/GTND42JUC6AIP53ICKALYKQNCA7DVKJYCASDPZ3JCYSI423WCV7IP53KC6YIE23LF67IK5QMCWYDK2QECASDLK3EHEYIK27JF6ADVK3ECTNCYBZ52K?segment=placement:laracastscom;"
                                                    className="carbon-text"
                                                    target="_blank"
                                                    rel="noopener sponsored"
                                                >
                                                    Start building apps today
                                                    with 55+ free services and a
                                                    $200 credit.
                                                </a>
                                            </span>
                                            <a
                                                href="http://carbonads.net/?utm_source=laracastscom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon"
                                                className="carbon-poweredby"
                                                target="_blank"
                                                rel="noopener sponsored"
                                            >
                                                ads via Carbon
                                            </a>
                                            <img
                                                src="https://ad.doubleclick.net/ddm/trackimp/N572608.452584BUYSELLADS.COM/B28037489.338824937;dc_trk_aid=531165071;dc_trk_cid=173899710;ord=167198698;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=?"
                                                height={1}
                                                width={1}
                                                alt="ads via Carbon"
                                                style={{ display: 'none' }}
                                            />
                                            <img
                                                src="https://pixel.adsafeprotected.com/rfw/st/1075138/64001070/skeleton.gif?gdpr=$&gdpr_consent=$&gdpr_pd=$&network=BUYSELLADS"
                                                height={1}
                                                width={1}
                                                alt="ads via Carbon"
                                                style={{ display: 'none' }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/**/}
                            <div className="video-details">
                                <button
                                    type="button"
                                    className="flex-center relative mb-5 w-full rounded-xl bg-blue/10 px-4 py-5 text-center text-xs font-bold text-white lg:hidden"
                                >
                                    <img
                                        src="https://laracasts.com/images/toggle-episodes-icon.svg?v=2"
                                        alt=""
                                        className="absolute left-[20px]"
                                    />{' '}
                                    Toggle Episode List{' '}
                                </button>
                                <button
                                    type="button"
                                    className="flex-center relative mb-5 w-full rounded-xl bg-blue/10 px-4 py-5 text-center text-xs font-bold text-white lg:hidden"
                                >
                                    <svg
                                        className="absolute left-[20px]"
                                        width={33}
                                        height={17}
                                    >
                                        <text
                                            className="fill-current text-grey-800"
                                            transform="translate(-44 -413)"
                                            fillRule="evenodd"
                                            fontFamily="Poppins-ExtraBold, Poppins"
                                            fontSize="21.6"
                                            fontWeight={700}
                                        >
                                            <tspan x="44.127" y={429}>
                                                CC
                                            </tspan>
                                        </text>
                                    </svg>{' '}
                                    Toggle Transcript{' '}
                                </button>
                                <div className="mx-auto">
                                    <div>
                                        {/**/}
                                        <div className="mx-auto mb-8 flex w-full flex-wrap lg:flex-nowrap">
                                            <div className="relative mx-auto basis-full items-center justify-between rounded-xl p-6 font-bold text-white md:flex lg:flex-1 lg:basis-0 bg-gradient-left-tooling">
                                                <div
                                                    className="pointer-events-none absolute top-0 bottom-0 right-0 left-0 left-1/2 hidden -translate-x-1/2 transform opacity-10 md:block"
                                                    style={{
                                                        background:
                                                            'url("https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png") 50% -1% / 350px no-repeat',
                                                    }}
                                                />
                                                <a
                                                    className="video-card-prev-button hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/25 md:flex md:flex-none cursor-not-allowed"
                                                    data-js="previous-episode-button"
                                                    href="#"
                                                >
                                                    <svg
                                                        viewBox="0.75 0.75 32.5 32.5"
                                                        width={40}
                                                        className="text-white/10"
                                                    >
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                stroke="#000"
                                                                                strokeOpacity=".012"
                                                                                strokeWidth=".5"
                                                                                d="M0 0L32 0 32 32 0 32z"
                                                                                transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                            />
                                                                            <path
                                                                                className="fill-current"
                                                                                d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                                                                transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                                <div className="flex-1 md:mx-[2.5rem] md:flex md:space-x-6">
                                                    <div className="px-4 md:flex-1 md:px-0">
                                                        <header className="mb-8">
                                                            <div className="flex items-center">
                                                                <button
                                                                    title="Want to favorite this lesson for future reference?"
                                                                    className="hidden rounded-full px-1 md:flex md:items-center md:justify-center bg-white/10 mr-4"
                                                                    style={{
                                                                        width: '39px',
                                                                        height: '39px',
                                                                    }}
                                                                >
                                                                    <svg
                                                                        viewBox="0 0 32 32"
                                                                        width={
                                                                            45
                                                                        }
                                                                        height={
                                                                            45
                                                                        }
                                                                        className="flex-shrink-0 text-white"
                                                                    >
                                                                        <g
                                                                            stroke="none"
                                                                            strokeWidth="1.2"
                                                                            className="fill-current"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <path
                                                                                className="fill-current"
                                                                                d="M13.6196,11.2 C11.6246857,11.2 10.4,12.85425 10.4,14.2106375 C10.4,17.143925 13.9170286,19.8671 16.4,21.6 C18.8829714,19.86645 22.4,17.143925 22.4,14.2106375 C22.4,12.8541363 21.1758971,11.2 19.1804,11.2 C18.0661143,11.2 17.1138286,12.042335 16.4,12.8420625 C15.6854857,12.0422538 14.73392,11.2 13.6196,11.2 Z"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </button>
                                                                <div>
                                                                    <h4 className="text-xs font-bold uppercase text-white text-opacity-75 lg:hidden">
                                                                        <a
                                                                            className="inherits-color link"
                                                                            href="/series/neovim-as-a-php-ide"
                                                                        >
                                                                            Neovim
                                                                            as a
                                                                            PHP
                                                                            and
                                                                            JavaScript
                                                                            IDE
                                                                        </a>
                                                                        <span className="md:hidden">
                                                                            — Ep
                                                                            1
                                                                        </span>
                                                                    </h4>
                                                                    <h1 className="text-2xl font-bold leading-tight widescreen:text-3xl">
                                                                        Why
                                                                        Neovim?
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </header>
                                                        <div>
                                                            <dl className="flex divide-x divide-solid divide-white/15 md:ml-1">
                                                                <div className="pr-5">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Episode
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        01
                                                                    </dd>
                                                                </div>
                                                                <div className="px-5">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Run Time
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        12:12
                                                                    </dd>
                                                                </div>
                                                                <div className="px-5 md:hidden xl:block">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Published
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        Nov
                                                                        29th,
                                                                        2022
                                                                    </dd>
                                                                </div>
                                                                <div className="hidden px-5 xl:block">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Topic
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        <a
                                                                            className="link text-white"
                                                                            href="https://laracasts.com/topics/vim"
                                                                        >
                                                                            Vim
                                                                        </a>
                                                                    </dd>
                                                                </div>
                                                                <div className="hidden px-5 lg:block">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Series
                                                                        Progress
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        0%
                                                                    </dd>
                                                                </div>
                                                                <div className="hidden px-5 lg:block">
                                                                    <dt className="mb-2 font-cabin text-2xs font-medium text-white/75">
                                                                        Version
                                                                    </dt>
                                                                    <dd className="text-sm font-semibold text-white">
                                                                        Neovim
                                                                        0.8
                                                                    </dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className="mx-auto mt-8 flex flex-wrap items-center gap-4 md:mt-0 md:max-w-2xs md:gap-0 lg:mx-0 xl:max-w-[200px]">
                                                        <div
                                                            className="flex-1"
                                                            style={{
                                                                flexBasis:
                                                                    '150px',
                                                            }}
                                                        >
                                                            <button className="btn btn-white flex-center bg-white/15 hover:bg-white/25 text-white hover:text-white w-full">
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                                <span className="text-wrap inline-block flex-shrink-0">
                                                                    <svg
                                                                        width={
                                                                            15
                                                                        }
                                                                        viewBox="0 0 6 5"
                                                                        height={
                                                                            15
                                                                        }
                                                                        className="mr-2 inline-block"
                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <g className="fill-current">
                                                                                <g>
                                                                                    <g>
                                                                                        <g>
                                                                                            <path
                                                                                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                                                                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                                                                                            />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    Complete
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="flex-1"
                                                            style={{
                                                                flexBasis:
                                                                    '150px',
                                                            }}
                                                        >
                                                            <button className="btn btn-white flex-center bg-white/15 hover:bg-white/25 text-white hover:text-white flex-1 w-full">
                                                                <svg
                                                                    width={12}
                                                                    viewBox="0 0 8 10"
                                                                    className="fill-current mr-2 inline-block scale-75"
                                                                >
                                                                    <path
                                                                        fillRule="nonzero"
                                                                        d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                                                                    />
                                                                </svg>
                                                                {/**/}
                                                                {/**/}
                                                                <span className="text-wrap inline-block flex-shrink-0">
                                                                    Add to
                                                                    Watchlist
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    className="video-card-next-button hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/25 md:flex md:flex-none"
                                                    title="Next Episode: Modal Editing and Moving Around"
                                                    data-js="next-episode-button"
                                                    href="/episodes/2618?autoplay=true"
                                                >
                                                    <svg
                                                        viewBox="0.75 0.75 32.5 32.5"
                                                        width={40}
                                                        className="text-white"
                                                    >
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                stroke="#000"
                                                                                strokeOpacity=".012"
                                                                                strokeWidth=".5"
                                                                                d="M0 0L32 0 32 32 0 32z"
                                                                                transform="translate(-1339.000000, -1039.000000) translate(965.000000, 1038.000000) translate(391.000000, 18.000000) rotate(-180.000000) translate(-391.000000, -18.000000) translate(375.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                            />
                                                                            <path
                                                                                className="fill-current"
                                                                                d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                                                                transform="translate(-1339.000000, -1039.000000) translate(965.000000, 1038.000000) translate(391.000000, 18.000000) rotate(-180.000000) translate(-391.000000, -18.000000) translate(375.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mb-8 -mt-4 flex space-x-4 lg:hidden">
                                            <a
                                                className="video-card-prev-button flex flex-1 flex-shrink-0 items-center justify-center rounded-xl bg-blue/10 py-2 active:bg-blue/25 cursor-not-allowed opacity-50"
                                                href="#"
                                            >
                                                <svg
                                                    viewBox="0.75 0.75 32.5 32.5"
                                                    width={40}
                                                    className="text-grey-800"
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            stroke="#000"
                                                                            strokeOpacity=".012"
                                                                            strokeWidth=".5"
                                                                            d="M0 0L32 0 32 32 0 32z"
                                                                            transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                        />
                                                                        <path
                                                                            className="fill-current"
                                                                            d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                                                            transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                            <a
                                                className="video-card-next-button flex flex-1 flex-shrink-0 items-center justify-center rounded-xl bg-blue/10 py-2 active:bg-blue/25"
                                                title="Next Episode: Modal Editing and Moving Around"
                                                href="/episodes/2618?autoplay=true"
                                            >
                                                <svg
                                                    viewBox="0.75 0.75 32.5 32.5"
                                                    width={40}
                                                    className="text-grey-800"
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            stroke="#000"
                                                                            strokeOpacity=".012"
                                                                            strokeWidth=".5"
                                                                            d="M0 0L32 0 32 32 0 32z"
                                                                            transform="translate(-1339.000000, -1039.000000) translate(965.000000, 1038.000000) translate(391.000000, 18.000000) rotate(-180.000000) translate(-391.000000, -18.000000) translate(375.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                        />
                                                                        <path
                                                                            className="fill-current"
                                                                            d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                                                            transform="translate(-1339.000000, -1039.000000) translate(965.000000, 1038.000000) translate(391.000000, 18.000000) rotate(-180.000000) translate(-391.000000, -18.000000) translate(375.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            className="mx-auto flex"
                                            style={{ maxWidth: '860px' }}
                                        >
                                            <div className="flex-1">
                                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
                                                    {/**/}
                                                    <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl col-span-6 py-6">
                                                        <div className="flex items-start justify-between">
                                                            <h2 className="mb-4 text-lg font-semibold">
                                                                <span className="uppercase">
                                                                    Your Teacher
                                                                </span>
                                                                <span className="px-2 font-light">
                                                                    |
                                                                </span>
                                                                <strong className="font-normal">
                                                                    Jess Archer
                                                                </strong>
                                                            </h2>
                                                            <div className="hidden items-center lg:flex">
                                                                <a
                                                                    href="https://twitter.com/jessarchercodes"
                                                                    target="_blank"
                                                                >
                                                                    <svg
                                                                        width={
                                                                            20
                                                                        }
                                                                        height={
                                                                            32
                                                                        }
                                                                        viewBox="0 0 36 36"
                                                                        className="mr-3 text-grey-700 transition-all hover:text-blue"
                                                                    >
                                                                        <path
                                                                            className="fill-current"
                                                                            fillRule="evenodd"
                                                                            d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm8.03 13.88c.008.179.012.358.012.538 0 5.475-4.166 11.786-11.788 11.786-2.34 0-4.518-.684-6.351-1.86.324.039.654.058.988.058 1.942 0 3.728-.663 5.146-1.773-1.813-.034-3.343-1.231-3.87-2.878.252.048.512.075.778.075.378 0 .745-.05 1.092-.145-1.895-.38-3.323-2.054-3.323-4.062l.001-.052c.558.31 1.197.496 1.876.517-1.111-.741-1.843-2.01-1.843-3.447 0-.76.204-1.472.56-2.084 2.043 2.507 5.097 4.156 8.54 4.33-.071-.304-.107-.62-.107-.945 0-2.287 1.855-4.143 4.142-4.143 1.192 0 2.268.504 3.025 1.308.944-.185 1.829-.529 2.631-1.005-.311.968-.966 1.779-1.824 2.292.84-.1 1.64-.322 2.38-.652-.553.83-1.255 1.56-2.065 2.142z"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                                <a
                                                                    href="https://github.com/jessarcher"
                                                                    target="_blank"
                                                                >
                                                                    <svg
                                                                        width={
                                                                            20
                                                                        }
                                                                        height={
                                                                            29
                                                                        }
                                                                        viewBox="0 0 30 29"
                                                                        className="mr-3 text-grey-700 transition-all hover:text-blue"
                                                                    >
                                                                        <path
                                                                            className="fill-current"
                                                                            fillRule="nonzero"
                                                                            d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                                <a
                                                                    href="https://jessarcher.com"
                                                                    className="btn border-none py-2 px-5 text-2xs font-semibold btn-dark-blue"
                                                                    target="_blank"
                                                                >
                                                                    {' '}
                                                                    Visit
                                                                    Website{' '}
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="flex lg:mx-4 lg:items-center">
                                                            <img
                                                                loading="lazy"
                                                                className="lazy mr-5 h-20 w-20 flex-none rounded-full border-4 border-solid border-tooling-light lazyloaded"
                                                                src="//unavatar.io/github/jessarcher"
                                                                alt="Jess Archer's avatar"
                                                            />
                                                            <div className="generic-content max-w-md text-sm font-medium">
                                                                <div>
                                                                    Hi there,
                                                                    I'm Jess
                                                                    Archer, a
                                                                    full-stack
                                                                    web
                                                                    application
                                                                    developer
                                                                    and
                                                                    consultant
                                                                    from
                                                                    Brisbane,
                                                                    Australia,
                                                                    with over 15
                                                                    years of
                                                                    professional
                                                                    experience.
                                                                    I work for
                                                                    Laravel, as
                                                                    part of the
                                                                    core team.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl col-span-6 py-6 lg:col-span-2">
                                                        <h2 className="mb-4 text-lg font-semibold">
                                                            Things You'll Learn
                                                        </h2>
                                                        <ul className="space-y-2">
                                                            <li className="flex items-center text-sm font-semibold">
                                                                <div className="mr-2 inline-block rounded-full p-1 relative top-px bg-gradient-tooling">
                                                                    <svg
                                                                        width={
                                                                            10
                                                                        }
                                                                        viewBox="0 0 6 5"
                                                                        height={
                                                                            10
                                                                        }
                                                                        className="text-white"
                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <g className="fill-current">
                                                                                <g>
                                                                                    <g>
                                                                                        <g>
                                                                                            <path
                                                                                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                                                                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                                                                                            />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div className="font-medium">
                                                                    Common Tasks
                                                                </div>
                                                            </li>
                                                            <li className="flex items-center text-sm font-semibold">
                                                                <div className="mr-2 inline-block rounded-full p-1 relative top-px bg-gradient-tooling">
                                                                    <svg
                                                                        width={
                                                                            10
                                                                        }
                                                                        viewBox="0 0 6 5"
                                                                        height={
                                                                            10
                                                                        }
                                                                        className="text-white"
                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <g className="fill-current">
                                                                                <g>
                                                                                    <g>
                                                                                        <g>
                                                                                            <path
                                                                                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                                                                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                                                                                            />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div className="font-medium">
                                                                    Tmux
                                                                </div>
                                                            </li>
                                                            <li className="flex items-center text-sm font-semibold">
                                                                <div className="mr-2 inline-block rounded-full p-1 relative top-px bg-gradient-tooling">
                                                                    <svg
                                                                        width={
                                                                            10
                                                                        }
                                                                        viewBox="0 0 6 5"
                                                                        height={
                                                                            10
                                                                        }
                                                                        className="text-white"
                                                                    >
                                                                        <g
                                                                            fill="none"
                                                                            fillRule="evenodd"
                                                                        >
                                                                            <g className="fill-current">
                                                                                <g>
                                                                                    <g>
                                                                                        <g>
                                                                                            <path
                                                                                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                                                                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                                                                                            />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div className="font-medium">
                                                                    Neovim vs.
                                                                    Vim
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-span-6 lg:col-span-4">
                                                        <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl py-6">
                                                            <div className="flex justify-between">
                                                                <h2 className="mb-4 text-lg font-semibold">
                                                                    About This
                                                                    Episode
                                                                </h2>
                                                                <strong className="font-cabin text-2xs font-bold text-grey-600/40">
                                                                    {' '}
                                                                    Published on
                                                                    Nov 29th,
                                                                    2022
                                                                </strong>
                                                            </div>
                                                            <div className="content user-content text-sm">
                                                                <p>
                                                                    Before we
                                                                    begin from
                                                                    scratch,
                                                                    let's kick
                                                                    things off
                                                                    with a
                                                                    demonstration
                                                                    of my
                                                                    fully-configured
                                                                    setup. I'll
                                                                    show you why
                                                                    I love Vim
                                                                    and Neovim,
                                                                    and what
                                                                    you'll
                                                                    achieve from
                                                                    this course.
                                                                    I'll also
                                                                    explain why
                                                                    I chose
                                                                    Neovim over
                                                                    Vim.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/**/}
                                                    </div>
                                                    {/**/}
                                                    <div
                                                        className="col-span-6 grid gap-4"
                                                        style={{
                                                            gridTemplateColumns:
                                                                'repeat(auto-fit, minmax(calc(33.33% - 1rem), 1fr))',
                                                        }}
                                                    >
                                                        {/**/}
                                                        <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl py-6 py-8 text-center">
                                                            <button
                                                                type="button"
                                                                className="block w-full"
                                                            >
                                                                <img
                                                                    src="https://laracasts.com/images/download-episode-icon.svg?v=2"
                                                                    alt=""
                                                                    className="mb-2"
                                                                />
                                                                <h5 className="font-poppins text-sm font-medium">
                                                                    Download
                                                                    this video.
                                                                </h5>
                                                            </button>
                                                        </div>
                                                        <div className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 rounded-2xl hidden py-6 py-8 text-center md:block">
                                                            <button className="block w-full">
                                                                <img
                                                                    src="https://laracasts.com/images/download-wallpaper-icon.svg?v=3"
                                                                    alt=""
                                                                    className="mb-2"
                                                                />
                                                                <h5 className="font-poppins text-sm font-medium">
                                                                    Download
                                                                    series
                                                                    wallpaper.
                                                                </h5>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-6 mt-6 w-full text-center">
                                                        <a
                                                            href="https://laracasts.com/contact"
                                                            className="mx-auto block cursor-pointer outline-none"
                                                            target="_blank"
                                                            style={{
                                                                maxWidth:
                                                                    '370px',
                                                            }}
                                                        >
                                                            <img
                                                                src="https://laracasts.com/images/call-to-action/laracasts-cta-placeholder.png"
                                                                alt=""
                                                                width={370}
                                                                height={140}
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="fixed bottom-0 left-0 z-50 mb-6 ml-6 flex h-16 w-16 items-center justify-center rounded-full text-center shadow-lg lg:hidden"
                                href="/series/neovim-as-a-php-ide"
                            >
                                <img
                                    src="https://laracasts.com/images/mobile-back-button.svg?v=2"
                                    alt="Back to Series Button"
                                    className="rounded-full bg-white"
                                />
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

Play.layout = (page: React.ReactNode) => (
    <FrontLayout title="Playing Series Episode" isPlaying={true}>
        {page}
    </FrontLayout>
);

export default Play;

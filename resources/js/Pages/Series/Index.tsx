import ContextMenuPanel from '@/Components/ContextMenuPanel';
import DashboardMain from '@/Components/DashboardMain';
import DashboardLayout from '@/Layouts/DashboardLayout';
import React, { useState } from 'react';

const Index = () => {
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0,
    };
    const [contextMenu, setcontextMenu] = useState(initialContextMenu);
    const hanleContextMenu = (
        e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault();

        const { pageX, pageY } = e;
        setcontextMenu({
            show: true,
            x: pageX,
            y: pageY,
        });
    };
    const contextMenuClose = () => setcontextMenu(initialContextMenu);
    return (
        <>
            {contextMenu.show && (
                <ContextMenuPanel
                    x={contextMenu.x}
                    y={contextMenu.y}
                    closeContextMenu={contextMenuClose}
                />
            )}

            <DashboardMain>
                <div className="dark:text-white">
                    <div className="mb-6 flex flex-wrap justify-center gap-x-4 md:mb-8 md:justify-between">
                        <div className="flex flex-1 gap-x-4">
                            <button
                                className="btn flex-center btn-blue w-full py-3 px-4"
                                style={{ width: '8rem' }}
                            >
                                <span className="text-wrap inline-block flex-shrink-0">
                                    {' '}
                                    New Series{' '}
                                </span>
                            </button>
                            <div className="sm:hidden lg:block">
                                <div className="select-wrap">
                                    <select className="focus:outline-none flex cursor-pointer items-center rounded-full bg-grey-400 px-5 py-3 text-xs leading-none text-grey-800 dark:bg-blue/13 dark:text-grey-600 appearance-none w-[154px]">
                                        <option className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600">
                                            Latest
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="/channels"
                                        >
                                            Discussion Channels
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?trending=1"
                                        >
                                            Popular This Week
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?popular=1"
                                        >
                                            Popular All Time
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?answered=1"
                                        >
                                            Solved
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?answered=0"
                                        >
                                            Unsolved
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?fresh=1"
                                        >
                                            No Replies Yet
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="/feed"
                                        >
                                            Social Feed
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?me"
                                        >
                                            My Questions
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?filter_by=contributed_to"
                                        >
                                            My Participation
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?filter_by=best_answers"
                                        >
                                            My Best Answers
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="?favorites=1"
                                        >
                                            Following
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="/leaderboard"
                                        >
                                            Leaderboard
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="select-wrap">
                                    <select className="focus:outline-none cursor-pointer rounded-full bg-grey-400 px-5 text-xs text-grey-800 dark:bg-blue/13 dark:text-grey-600">
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="all"
                                        >
                                            All
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="code-review"
                                        >
                                            Code Review
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="design"
                                        >
                                            Design
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="eloquent"
                                        >
                                            Eloquent
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="envoyer"
                                        >
                                            Envoyer
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="site-improvements"
                                        >
                                            Feedback
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="forge"
                                        >
                                            Forge
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="general-discussion"
                                        >
                                            General
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="guides"
                                        >
                                            Guides
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="inertia"
                                        >
                                            Inertia
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="javascript"
                                        >
                                            JavaScript
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="laravel"
                                        >
                                            Laravel
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="livewire"
                                        >
                                            Livewire
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="lumen"
                                        >
                                            Lumen
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="elixir"
                                        >
                                            Mix
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="nova"
                                        >
                                            Nova
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="react"
                                        >
                                            React
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="requests"
                                        >
                                            Requests
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="servers"
                                        >
                                            Servers
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="spark"
                                        >
                                            Spark
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="testing"
                                        >
                                            Testing
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="tips"
                                        >
                                            Tips
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="vapor"
                                        >
                                            Vapor
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="vite"
                                        >
                                            Vite
                                        </option>
                                        <option
                                            className="bg-grey-400 text-grey-800 dark:bg-blue-1000 dark:text-grey-600"
                                            value="vue"
                                        >
                                            Vue
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-x-3 md:flex-none">
                            <button
                                className="relative flex h-full w-full items-center rounded-full bg-grey-400 transition-all duration-500 dark:bg-blue/13 md:h-[30px] md:w-[52px]"
                                role="switch"
                                title="Switch to Light Mode?"
                                style={{ maxWidth: '65px' }}
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="absolute translate-x-1 transition-all dark:translate-x-[150%] dark:md:translate-x-full"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx={12}
                                        cy={12}
                                        r={12}
                                        className="fill-current text-black/50 dark:text-blue/15"
                                    />
                                    <path
                                        className="fill-current text-grey-300 dark:text-grey-600"
                                        d="M10.71 21h-.076a7.332 7.332 0 0 1-2.996-.67 7.755 7.755 0 0 1-2.519-1.855c-1.327-1.515-2.082-3.5-2.118-5.573-.036-2.072.65-4.086 1.923-5.652a7.617 7.617 0 0 1 3.005-2.197.707.707 0 0 1 .423-.036.738.738 0 0 1 .374.213.818.818 0 0 1 .194.374.853.853 0 0 1-.014.428 7.162 7.162 0 0 0-.235 3.758 6.876 6.876 0 0 0 1.693 3.305 6.257 6.257 0 0 0 3.107 1.801 5.986 5.986 0 0 0 3.528-.246c.135-.05.28-.059.419-.025a.74.74 0 0 1 .366.219c.1.109.17.245.2.394.03.149.019.304-.03.446a8.223 8.223 0 0 1-1.759 2.91 7.709 7.709 0 0 1-2.518 1.787A7.306 7.306 0 0 1 10.71 21z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden gap-x-3 md:flex md:items-center">
                            <button className="forum-excerpt-toggle bg-grey-400 dark:bg-blue/4">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    className="mx-2"
                                >
                                    <g
                                        className="forum-excerpt-toggle-lines fill-current text-black/50 dark:text-grey-600"
                                        fillRule="evenodd"
                                    >
                                        <rect
                                            className="forum-excerpt-toggle-line"
                                            width={15}
                                            height={6}
                                            rx={2}
                                        />
                                        <rect
                                            className="forum-excerpt-toggle-line"
                                            width={15}
                                            height={6}
                                            y={9}
                                            rx={2}
                                        />
                                    </g>
                                </svg>
                            </button>
                            <button
                                className="forum-excerpt-toggle hover:bg-grey-400 dark:hover:bg-blue/10 is-active bg-grey-400 dark:bg-blue/10"
                                disabled
                            >
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    className="mx-2"
                                >
                                    <g
                                        className="forum-excerpt-toggle-lines fill-current text-black/50 dark:text-grey-600"
                                        fillRule="evenodd"
                                    >
                                        <rect
                                            className="forum-excerpt-toggle-line"
                                            width={15}
                                            height={4}
                                            rx={2}
                                        />
                                        <rect
                                            className="forum-excerpt-toggle-line"
                                            width={8}
                                            height={4}
                                            y={11}
                                            rx={2}
                                        />
                                        <rect
                                            className="forum-excerpt-toggle-line"
                                            width={15}
                                            height={4}
                                            y="5.5"
                                            rx={2}
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <form
                            className="search-form mt-5 flex h-[40px] w-full rounded-full md:mt-0 md:w-52 bg-blue/13"
                            action="/discuss"
                            autoComplete="off"
                        >
                            <label htmlFor="q" className="flex px-4">
                                <svg
                                    width={16}
                                    viewBox="0 0 15 15"
                                    className="text-grey-800 dark:text-grey-600"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-2-2h20v20H-2z" />
                                        <path
                                            className="fill-current"
                                            d="M10.443 9.232h-.638l-.226-.218A5.223 5.223 0 0 0 10.846 5.6 5.247 5.247 0 1 0 5.6 10.846c1.3 0 2.494-.476 3.414-1.267l.218.226v.638l4.036 4.028 1.203-1.203-4.028-4.036zm-4.843 0A3.627 3.627 0 0 1 1.967 5.6 3.627 3.627 0 0 1 5.6 1.967 3.627 3.627 0 0 1 9.232 5.6 3.627 3.627 0 0 1 5.6 9.232z"
                                        />
                                    </g>
                                </svg>
                                <input
                                    id="q"
                                    name="q"
                                    className="ml-3 h-full w-full pt-0 text-xs focus:outline-none dark:text-grey-600 dark:placeholder:text-grey-600"
                                    placeholder="Begin your search..."
                                />
                            </label>
                        </form>
                    </div>
                    <div className="conversation-list">
                        <div
                            className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl conversation-list-item mb-3 flex cursor-pointer flex-col md:flex-row"
                            onContextMenu={hanleContextMenu}
                        >
                            <div className="conversation-list-avatar mb-4 flex w-full items-center self-start md:mr-5 md:mb-0 md:block md:w-auto">
                                <div className="flex items-center">
                                    <a
                                        className="relative flex items-start mr-3 brightness-90 md:mr-0 md:mb-2"
                                        href="/@kaizen"
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            padding: '2px',
                                        }}
                                    >
                                        {/**/}
                                        <img
                                            loading="lazy"
                                            className="lazy relative lazyloaded"
                                            src="https://ik.imagekit.io/laracasts/series/thumbnails/react-beyond-the-basics.png?tr=w-420"
                                            alt="kaizen's avatar"
                                            width={56}
                                            height={56}
                                            style={{
                                                width: '100%',
                                                borderRadius: '9px',
                                            }}
                                        />
                                    </a>
                                    {/* <strong className="uppercase md:hidden">
                                        kaizen
                                    </strong> */}
                                </div>
                                <div className="ml-auto flex items-center justify-center rounded-xl bg-grey-400 py-2 dark:bg-blue/10 md:hidden">
                                    <div className="flex items-center px-3">
                                        <svg
                                            width="13"
                                            viewBox="0 0 9 12"
                                            className="mr-3 relative text-grey-700 dark:text-grey-600"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <g className="fill-current">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M2.858 5.15v4.415c0 .197-.11.371-.273.436-.231.092-.51.14-.808.14-.855 0-1.775-.396-1.775-1.266v-5.65c-.02-.389.1-1.074.676-1.445C.945 1.607 2.348.589 3.052.074c.125-.092.286-.098.417-.018.132.081.214.237.214.406v.669c0 .255-.183.462-.41.462-.175 0-.325-.125-.383-.302-.636.462-1.574 1.14-1.806 1.29-.21.136-.255.385-.264.52 0 .151.029.27.081.335.145.18.63.068 1.157-.29C2.566 2.802 5.067.92 5.092.902c.126-.095.287-.104.42-.023.133.08.216.237.216.408v.052c0 .155-.068.299-.182.385 0 0-1.736 1.31-1.89 1.42-.589.428-.798.953-.798 2.005zM9 2.92v5.998c0 .158-.072.306-.191.39 0 0-2.385 2.092-2.869 2.425-.254.175-.578.267-.936.267-.85 0-1.73-.52-1.73-1.389V4.878l.001-.006c.008-.338.078-.82.635-1.285.334-.278 2.321-1.809 2.406-1.873.125-.097.288-.107.421-.027.134.08.218.237.218.408v.67c0 .254-.183.461-.409.461-.169 0-.314-.115-.376-.28-.635.49-1.566 1.212-1.775 1.385-.263.22-.298.365-.303.551.001.138.034.243.101.313.209.216.77.125 1.324-.25.41-.278 2.176-1.819 2.822-2.389.124-.108.29-.128.431-.05.14.077.23.237.23.414zm-.818 2.059L6.137 6.77v.924l2.045-1.792v-.924z"
                                                                    transform="translate(-890.000000, -316.000000) translate(774.000000, 311.000000) translate(116.000000, 4.000000) translate(0.000000, 1.000000)"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="text-xs font-semibold leading-none text-grey-800">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:mb-0 lg:mt-1">
                                <div className="conversation-list-title flex h-full flex-col justify-between">
                                    <div className="-mt-1 md:flex md:items-start">
                                        <h4
                                            className="lg:clamp one-line mb-4 tracking-normal md:pr-6 lg:mb-0"
                                            style={{
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            <a
                                                className="conversation-list-link link inherits-color text-xl font-semibold dark:text-white/90"
                                                title="Envoyer timing out, but not actually."
                                                href="https://laracasts.com/discuss/channels/envoyer/envoyer-timing-out-but-not-actually"
                                            >
                                                React - Beyond the Basics
                                            </a>
                                        </h4>
                                        <div className="relative hidden text-center md:ml-auto md:flex md:flex-row-reverse md:items-center">
                                            <a
                                                className="btn btn-channel ml-5 block w-28 py-2 px-0 text-center text-2xs is-envoyer"
                                                href="/discuss/channels/envoyer"
                                                style={{
                                                    '--channel-color':
                                                        '#F56857',
                                                }}
                                            >
                                                Framework
                                            </a>
                                            <div className="ml-4 flex items-center justify-center">
                                                <div
                                                    style={{
                                                        marginRight: '5px',
                                                    }}
                                                >
                                                    <svg
                                                        width="13"
                                                        viewBox="0 0 9 12"
                                                        className="relative text-grey-700 dark:text-grey-600"
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
                                                                            ></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="relative text-left text-xs font-medium leading-none text-grey-800 dark:text-grey-600">
                                                    1
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div
                                                    style={{
                                                        marginRight: '5px',
                                                    }}
                                                >
                                                    <svg
                                                        width="13"
                                                        viewBox="0 0 10 10"
                                                        className="text-grey-700 dark:text-grey-600"
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
                                                                            ></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="text-left text-xs font-medium leading-none text-grey-800 dark:text-grey-600">
                                                    2 Hr 12 Min
                                                </span>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <div className="difficulty-meter mr-2 flex space-x-1 is-intermediate">
                                                    <span
                                                        className="block rounded bg-grey-700"
                                                        style={{
                                                            width: 5,
                                                            height: 11,
                                                        }}
                                                    />
                                                    <span
                                                        className="block rounded bg-grey-700"
                                                        style={{
                                                            width: 5,
                                                            height: 11,
                                                        }}
                                                    />
                                                    <span
                                                        className="block rounded bg-grey-800"
                                                        style={{
                                                            width: 5,
                                                            height: 11,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-left text-xs font-medium leading-none text-grey-800 dark:text-grey-600">
                                                    Intermediate
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="conversation-list-excerpt lg:clamp two-lines mb-6 break-words text-[13px] leading-normal text-black/90 dark:font-medium dark:text-grey-100 lg:mb-0 lg:pr-8">
                                        So you've learned the basics of building
                                        apps with React but want to learn more?
                                        Fortunately, React has a massive
                                        ecosystem with tools and libraries that
                                        can help make building apps with React
                                        even easier. In this series, we'll take
                                        a look at some of these tools and
                                        techniques including performance options
                                        with memoization, testing tools in
                                        React, TypeScript
                                    </div>
                                    <div className="text-2xs font-semibold leading-none tracking-tight text-grey-800 dark:text-grey-100">
                                        <a
                                            className="link hover:text-blue"
                                            href="/@consil"
                                        >
                                            Andre Madarang
                                        </a>{' '}
                                        last upload{' '}
                                        <a
                                            className="inherits-color link"
                                            href="https://laracasts.com/discuss/replies/856363"
                                        >
                                            <time className="font-semibold">
                                                1 week ago
                                            </time>
                                        </a>
                                        {/**/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex flex-wrap justify-center gap-x-2">
                            <a
                                className="leading-4 flex-center h-8 w-24 rounded-full border border-transparent p-4 text-2xs font-semibold bg-blue/7 cursor-not-allowed text-grey-800"
                                href=""
                            >
                                <span>Previous</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-blue/75 hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=1"
                                style={{ minWidth: 40 }}
                            >
                                <span>1</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=2"
                                style={{ minWidth: 40 }}
                            >
                                <span>2</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=3"
                                style={{ minWidth: 40 }}
                            >
                                <span>3</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=4"
                                style={{ minWidth: 40 }}
                            >
                                <span>4</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=5"
                                style={{ minWidth: 40 }}
                            >
                                <span>5</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=6"
                                style={{ minWidth: 40 }}
                            >
                                <span>6</span>
                            </a>
                            <a
                                className="leading-4 flex h-8 items-center justify-center rounded-xl border p-4 text-2xs font-semibold text-white md:p-2 bg-blue/7 border-transparent hidden md:flex hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=7"
                                style={{ minWidth: 40 }}
                            >
                                <span>7</span>
                            </a>
                            <a
                                className="leading-4 flex-center h-8 w-24 rounded-full border border-transparent p-4 text-2xs font-semibold bg-blue/7 text-grey-600 hover:border-blue focus:border-blue focus:text-blue"
                                href="https://laracasts.com/discuss?trending=1&page=2"
                            >
                                <span>Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </>
    );
};

Index.layout = (page: React.ReactNode) => (
    <DashboardLayout title={'Series Dashboard'}>{page}</DashboardLayout>
);

export default Index;

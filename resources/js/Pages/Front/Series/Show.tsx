import FrontLayout from '@/Layouts/AppLayout';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Show = () => {
    return (
        <>
            <img
                loading="lazy"
                className="lazy pointer-events-none absolute top-0 hidden mix-blend-luminosity md:inline-block lazyloaded"
                src="https://ik.imagekit.io/laracasts/instructors/backdrops/128223.png"
                width={700}
                alt=""
                style={{ left: 'calc(50% - 600px)' }}
            />
            <section>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="flex flex-col-reverse gap-x-12 text-white lg:flex-row lg:justify-center xl:gap-x-20">
                        <aside className="mx-auto mt-6 max-w-[500px] flex-shrink-0 lg:sticky lg:top-[40px] lg:mt-0 lg:w-[270px] lg:self-start xl:w-[315px]">
                            <figure>
                                <div
                                    className="relative overflow-hidden rounded-xl"
                                    style={{ width: '100%', height: '445px' }}
                                >
                                    <img
                                        loading="lazy"
                                        className="lazy h-full w-full object-cover lazyloaded"
                                        src="https://ik.imagekit.io/laracasts/instructors/128223.jpeg?tr=w-630"
                                        alt="Photo of Jess Archer"
                                        style={{
                                            WebkitMaskImage:
                                                '-webkit-radial-gradient(center center, white, black)',
                                        }}
                                    />
                                    {/**/}
                                </div>
                                <figcaption className="mt-4 px-8">
                                    <h5 className="flex items-center gap-x-3 font-poppins font-semibold text-grey-600">
                                        <span className="flex-shrink-0 text-xs">
                                            Your Instructor Today
                                        </span>
                                        <span className="h-px w-full bg-grey-600" />
                                    </h5>
                                    <h4 className="mt-2 font-poppins text-3xl font-light leading-none">
                                        Jess Archer
                                    </h4>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <a
                                            href="https://twitter.com/jessarchercodes"
                                            target="_blank"
                                        >
                                            <svg
                                                width={20}
                                                height={32}
                                                viewBox="0 0 36 36"
                                                className="text-grey-600 transition-all hover:text-blue"
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
                                                width={20}
                                                height={29}
                                                viewBox="0 0 30 29"
                                                className="mr-3 text-grey-600 transition-all hover:text-blue"
                                            >
                                                <path
                                                    className="fill-current"
                                                    fillRule="nonzero"
                                                    d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="content mt-3 text-[13px] lg:pr-8" />
                                    <div>
                                        Hi there, I'm Jess Archer, a full-stack
                                        web application developer and consultant
                                        from Brisbane, Australia, with over 15
                                        years of professional experience. I work
                                        for Laravel, as part of the core team.
                                    </div>
                                    <p />
                                    <p className="mt-5">
                                        <a
                                            href="https://jessarcher.com"
                                            className="btn btn-dark-blue w-full py-4 text-xs font-semibold normal-case"
                                            target="_blank"
                                        >
                                            {' '}
                                            Visit Website{' '}
                                        </a>
                                    </p>
                                </figcaption>
                            </figure>
                        </aside>
                        <div>
                            <div className="mx-auto rounded-2xl">
                                <div>
                                    <div className="container flex items-center">
                                        <header className="primary relative flex-1 text-center text-white md:text-left lg:mt-3">
                                            <div className="md:flex">
                                                <div className="flex-1">
                                                    <div className="md:hidden">
                                                        <div
                                                            className="radial-progress-container mx-auto mb-6"
                                                            style={{
                                                                height: '249px',
                                                                width: '249px',
                                                            }}
                                                        >
                                                            <div
                                                                className="radial-progress-inner"
                                                                style={{
                                                                    width: '235px',
                                                                }}
                                                            >
                                                                <img
                                                                    loading="lazy"
                                                                    className="lazy lazyloaded"
                                                                    src="https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png?tr=w-420"
                                                                    alt="Neovim as a PHP and JavaScript IDE thumbnail"
                                                                    width={210}
                                                                    height={210}
                                                                />
                                                                {/**/}
                                                            </div>
                                                            <svg
                                                                className="radial-progress-bar"
                                                                width={249}
                                                                height={249}
                                                                version="1.1"
                                                            >
                                                                <defs>
                                                                    <radialGradient
                                                                        id="radial-gradient9433.688842102272"
                                                                        fx={1}
                                                                        fy="0.5"
                                                                        cx="0.5"
                                                                        cy="0.5"
                                                                        r="0.65"
                                                                    >
                                                                        <stop
                                                                            offset="30%"
                                                                            stopColor="currentColor"
                                                                        />
                                                                        <stop
                                                                            offset="100%"
                                                                            stopColor="currentColor"
                                                                        />
                                                                    </radialGradient>
                                                                </defs>
                                                                <circle
                                                                    r="117.5"
                                                                    cx="124.5"
                                                                    cy="124.5"
                                                                    fill="transparent"
                                                                    stroke="rgba(0, 0, 0, 0.2)"
                                                                    strokeDasharray="738.2742735936014"
                                                                    strokeDashoffset={
                                                                        0
                                                                    }
                                                                    strokeLinecap="round"
                                                                    style={{
                                                                        height: '249px',
                                                                        width: '249px',
                                                                        strokeWidth:
                                                                            '7px',
                                                                    }}
                                                                />
                                                                <circle
                                                                    transform="rotate(270, 124.5,124.5)"
                                                                    r="117.5"
                                                                    cx="124.5"
                                                                    cy="124.5"
                                                                    fill="transparent"
                                                                    stroke="url(#radial-gradient9433.688842102272)"
                                                                    strokeDasharray="738.2742735936014"
                                                                    strokeDashoffset="738.2742735936014"
                                                                    strokeLinecap="round"
                                                                    style={{
                                                                        height: '249px',
                                                                        width: '249px',
                                                                        strokeWidth:
                                                                            '7px',
                                                                        strokeDashoffset:
                                                                            '738.274',
                                                                        transition:
                                                                            'stroke-dashoffset 1000ms linear 0s',
                                                                    }}
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <a
                                                        className="btn btn-dark-blue py-px px-4 font-semibold normal-case"
                                                        href="https://laracasts.com/series"
                                                    >
                                                        <svg
                                                            viewBox="0.75 0.75 32.5 32.5"
                                                            width={20}
                                                            className="-ml-2"
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
                                                        </svg>{' '}
                                                        back{' '}
                                                    </a>
                                                    <h1 className="text-4xl font-medium leading-tight">
                                                        Neovim as a PHP and
                                                        JavaScript IDE
                                                    </h1>
                                                    {/**/}
                                                    <div className="mt-3 flex items-center justify-center gap-x-4 md:justify-start">
                                                        <a
                                                            className="btn btn-dark-blue py-2 px-4 font-semibold normal-case"
                                                            href="https://laracasts.com/browse/tooling"
                                                        >
                                                            Tooling Category{' '}
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-2xs font-semibold normal-case text-grey-600"
                                                        >
                                                            {' '}
                                                            Version: Neovim 0.8
                                                        </a>
                                                    </div>
                                                    <div className="generic-content mx-auto mt-6 max-w-md text-sm leading-normal md:mx-0 md:pr-10">
                                                        <div>
                                                            <p>
                                                                <a
                                                                    href="https://neovim.io"
                                                                    target="_blank"
                                                                    className="link"
                                                                >
                                                                    Neovim
                                                                </a>{' '}
                                                                is a modern fork
                                                                of Vim, an
                                                                incredibly
                                                                popular modal
                                                                text editor.
                                                                Modal editing
                                                                unlocks more
                                                                efficient ways
                                                                of moving around
                                                                and editing text
                                                                and is
                                                                especially
                                                                suited to code.
                                                            </p>
                                                            <p>
                                                                Neovim is a
                                                                general-purpose
                                                                text editor out
                                                                of the box, but
                                                                in this course
                                                                we'll learn how
                                                                to harness the
                                                                best of both
                                                                worlds and turn
                                                                it into a
                                                                powerful PHP and
                                                                JavaScript IDE.
                                                            </p>
                                                        </div>
                                                        {/**/}
                                                    </div>
                                                </div>
                                                <div className="relative flex hidden flex-col items-center md:top-10 md:block text-tooling">
                                                    <div
                                                        className="radial-progress-container"
                                                        style={{
                                                            height: '249px',
                                                            width: '249px',
                                                        }}
                                                    >
                                                        <div
                                                            className="radial-progress-inner"
                                                            style={{
                                                                width: '235px',
                                                            }}
                                                        >
                                                            <img
                                                                loading="lazy"
                                                                className="lazy lazyloaded"
                                                                src="https://ik.imagekit.io/laracasts/series/thumbnails/neovim-as-a-php-and-javascript-ide.png?tr=w-420"
                                                                alt="Neovim as a PHP and JavaScript IDE thumbnail"
                                                                width={210}
                                                                height={210}
                                                            />
                                                            {/**/}
                                                        </div>
                                                        <svg
                                                            className="radial-progress-bar"
                                                            width={249}
                                                            height={249}
                                                            version="1.1"
                                                        >
                                                            <defs>
                                                                <radialGradient
                                                                    id="radial-gradient13243.908105956141"
                                                                    fx={1}
                                                                    fy="0.5"
                                                                    cx="0.5"
                                                                    cy="0.5"
                                                                    r="0.65"
                                                                >
                                                                    <stop
                                                                        offset="30%"
                                                                        stopColor="currentColor"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stopColor="currentColor"
                                                                    />
                                                                </radialGradient>
                                                            </defs>
                                                            <circle
                                                                r="117.5"
                                                                cx="124.5"
                                                                cy="124.5"
                                                                fill="transparent"
                                                                stroke="rgba(0, 0, 0, 0.2)"
                                                                strokeDasharray="738.2742735936014"
                                                                strokeDashoffset={
                                                                    0
                                                                }
                                                                strokeLinecap="round"
                                                                style={{
                                                                    height: '249px',
                                                                    width: '249px',
                                                                    strokeWidth:
                                                                        '7px',
                                                                }}
                                                            />
                                                            <circle
                                                                transform="rotate(270, 124.5,124.5)"
                                                                r="117.5"
                                                                cx="124.5"
                                                                cy="124.5"
                                                                fill="transparent"
                                                                stroke="url(#radial-gradient13243.908105956141)"
                                                                strokeDasharray="738.2742735936014"
                                                                strokeDashoffset="738.2742735936014"
                                                                strokeLinecap="round"
                                                                style={{
                                                                    height: '249px',
                                                                    width: '249px',
                                                                    strokeWidth:
                                                                        '7px',
                                                                    strokeDashoffset:
                                                                        '738.274',
                                                                    transition:
                                                                        'stroke-dashoffset 1000ms linear 0s',
                                                                }}
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="series-buttons mt-9 flex w-full flex-wrap justify-start gap-4">
                                                <div className="basis-full md:basis-auto">
                                                    <a
                                                        className="btn btn-white flex-center w-full mx-auto"
                                                        href="/series/neovim-as-a-php-ide/episodes/1"
                                                    >
                                                        <svg
                                                            width={15}
                                                            height={15}
                                                            viewBox="0 0 15 15"
                                                            className="mr-2"
                                                        >
                                                            <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                            >
                                                                <path d="M-1-1h18v18H-1z" />
                                                                <path
                                                                    className="fill-current"
                                                                    d="M6 10.875L10.5 7.5 6 4.125v6.75zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z"
                                                                />
                                                            </g>
                                                        </svg>
                                                        {/**/}
                                                        {/**/}
                                                        <span className="text-wrap inline-block flex-shrink-0">
                                                            Begin Series
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="basis-full md:basis-auto">
                                                    <button className="btn flex-center btn-dark-blue flex-1">
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
                                                            Add to Watchlist
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="basis-full md:basis-auto">
                                                    {/**/}
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex-1">
                                    <div
                                        className="panel relative transition-colors duration-300 light text-black py-4 rounded-2xl bg-tooling mb-4 px-4"
                                        id="series-details"
                                    >
                                        <div className="container">
                                            <div className="flex text-xs text-white">
                                                <div className="left flex flex-1">
                                                    <div className="flex items-center text-xs font-medium">
                                                        <svg
                                                            width={13}
                                                            viewBox="0 0 9 12"
                                                            className="mr-2"
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
                                                        10 episodes
                                                    </div>
                                                    <div className="flex items-center font-medium">
                                                        <svg
                                                            width={13}
                                                            viewBox="0 0 10 10"
                                                            className="mr-2"
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
                                                        <span className="text-xs">
                                                            1h 35m
                                                        </span>
                                                    </div>
                                                    <div className="hidden font-medium lg:flex">
                                                        {/**/}
                                                        {/**/}
                                                        <div className="flex items-center">
                                                            <div className="difficulty-meter mr-2 flex space-x-1 is-intermediate">
                                                                <span
                                                                    className="block rounded bg-white"
                                                                    style={{
                                                                        width: '5px',
                                                                        height: '11px',
                                                                    }}
                                                                />
                                                                <span
                                                                    className="block rounded bg-white"
                                                                    style={{
                                                                        width: '5px',
                                                                        height: '11px',
                                                                    }}
                                                                />
                                                                <span
                                                                    className="block rounded bg-white/25"
                                                                    style={{
                                                                        width: '5px',
                                                                        height: '11px',
                                                                    }}
                                                                />
                                                            </div>
                                                            <span className="text-xs font-medium mobile:text-left">
                                                                Intermediate
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-js="series-completion-percentage"
                                                        className="flex items-center font-medium"
                                                    >
                                                        0% Complete{' '}
                                                    </div>
                                                </div>
                                                <li className="right flex space-x-2">
                                                    <div className="flex hidden items-center font-medium leading-none xl:flex">
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            href="https://www.facebook.com/sharer.php?u=https://laracasts.com//series/neovim-as-a-php-ide&title=Neovim as a PHP and JavaScript IDE"
                                                            className="mr-2 inline-flex items-center rounded-xl bg-white/10 py-2 px-25 text-2xs font-semibold transition-colors hover:bg-white/15"
                                                            title="Share this series on Facebook"
                                                            aria-label="Share this series on Facebook"
                                                        >
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 25 25"
                                                            >
                                                                <g
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <path
                                                                        stroke="#000"
                                                                        strokeOpacity=".008"
                                                                        strokeWidth={
                                                                            0
                                                                        }
                                                                        d="M0 0h25v25H0z"
                                                                    />
                                                                    <path
                                                                        className="fill-current"
                                                                        d="M12.5 0C5.608 0 0 5.608 0 12.5S5.608 25 12.5 25 25 19.392 25 12.5 19.393 0 12.5 0zm3.109 12.94h-2.034v7.249h-3.013V12.94H9.129v-2.562h1.433V8.721c0-1.187.563-3.041 3.04-3.041l2.234.009v2.486h-1.621c-.264 0-.639.132-.639.698v1.506h2.296l-.263 2.561z"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <a
                                                            target="_blank"
                                                            href="https://twitter.com/intent/tweet?text=I%27m+watching+%22Neovim+as+a+PHP+and+JavaScript+IDE%22+at+Laracasts%21+https%3A%2F%2Flaracasts.com%2Fseries%2Fneovim-as-a-php-ide"
                                                            className="inline-flex items-center rounded-xl bg-white/10 py-2 px-25 text-2xs font-semibold transition-colors hover:bg-white/15"
                                                            title="Share this series on Twitter"
                                                            aria-label="Share this series on Twitter"
                                                        >
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 36 36"
                                                            >
                                                                <path
                                                                    className="fill-current"
                                                                    fillRule="evenodd"
                                                                    d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm8.03 13.88c.008.179.012.358.012.538 0 5.475-4.166 11.786-11.788 11.786-2.34 0-4.518-.684-6.351-1.86.324.039.654.058.988.058 1.942 0 3.728-.663 5.146-1.773-1.813-.034-3.343-1.231-3.87-2.878.252.048.512.075.778.075.378 0 .745-.05 1.092-.145-1.895-.38-3.323-2.054-3.323-4.062l.001-.052c.558.31 1.197.496 1.876.517-1.111-.741-1.843-2.01-1.843-3.447 0-.76.204-1.472.56-2.084 2.043 2.507 5.097 4.156 8.54 4.33-.071-.304-.107-.62-.107-.945 0-2.287 1.855-4.143 4.142-4.143 1.192 0 2.268.504 3.025 1.308.944-.185 1.829-.529 2.631-1.005-.311.968-.966 1.779-1.824 2.292.84-.1 1.64-.322 2.38-.652-.553.83-1.255 1.56-2.065 2.142z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="hidden space-x-2 font-medium leading-none md:flex md:items-center">
                                                        {/**/}
                                                        <form data-js="series-complete-all-button">
                                                            <button
                                                                type="submit"
                                                                className="inline-flex items-center rounded-xl bg-white/10 py-2 px-25 text-2xs font-semibold transition-colors hover:bg-white/20"
                                                                title="Mark this series as completed?"
                                                                aria-label="Mark this series as completed?"
                                                            >
                                                                <svg
                                                                    width={20}
                                                                    height={20}
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    aria-hidden
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                                                                        fill="#fff"
                                                                    />
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M10 13c2.761 0 5-1.343 5-3s-2.239-3-5-3-5 1.343-5 3 2.239 3 5 3zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                                                        fill="#fff"
                                                                    />
                                                                </svg>
                                                                <span className="ml-2 hidden 2xl:inline">
                                                                    Complete
                                                                    Series
                                                                </span>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="episode-list">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl relative flex w-full cursor-pointer items-center mt-4 mb-[10px] border-transparent bg-blue/7">
                                                        <h3 className="flex items-center divide-x-2 divide-white/10 text-lg font-bold md:text-xl">
                                                            <span className="flex-shrink-0 pr-4 uppercase md:text-base">
                                                                {' '}
                                                                Section 1
                                                            </span>
                                                            <span className="flex items-center pl-4 font-poppins font-semibold">
                                                                <span
                                                                    className="circle mr-3 flex h-6 w-6 flex-shrink-0 items-center bg-tooling text-tooling"
                                                                    style={{
                                                                        display:
                                                                            'none',
                                                                    }}
                                                                >
                                                                    <span className="position flex h-full w-full items-center justify-center text-white hover:text-black md:text-lg">
                                                                        <svg
                                                                            width="40%"
                                                                            height="100%"
                                                                            viewBox="0 0 21 16"
                                                                            className="relative inline-block"
                                                                            style={{
                                                                                top: '0.7px',
                                                                            }}
                                                                        >
                                                                            <g
                                                                                fill="#FFF"
                                                                                fill-rule="evenodd"
                                                                            >
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M-3-5h27v27H-3z"
                                                                                ></path>
                                                                                <path d="M7.439 12.152l-5.037-5.36c-.447-.477-1.119-.477-1.566 0a1.204 1.204 0 0 0 0 1.667l6.603 7.03L20.086 2.025a1.204 1.204 0 0 0 0-1.668c-.447-.476-1.12-.476-1.567 0L7.44 12.152z"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </span>{' '}
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
                                                        <Disclosure.Panel
                                                            style={{
                                                                height: '145px',
                                                            }}
                                                            className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 rounded-2xl episode-list-item flex cursor-pointer mb-[10px] !border-deep-black/4 py-4 px-8 is-tooling"
                                                        >
                                                            <div className="flex-center relative pr-0 font-bold mr-6">
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
                                                                                        className="flex-center h-full w-full rounded-full"
                                                                                        style={{
                                                                                            width: '62px',
                                                                                            height: '62px',
                                                                                            transform:
                                                                                                'scale(1)',
                                                                                        }}
                                                                                    >
                                                                                        <span className="text-2xl">
                                                                                            01
                                                                                        </span>
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
                                                                                            id="radial-gradient62617.416442488095"
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
                                                                                        stroke="url(#radial-gradient62617.416442488095)"
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
                                                                    <div className="items-center justify-between mb-3">
                                                                        <h4 className="episode-list-title flex items-center link inherits-color text-xl font-bold md:text-lg lg:text-xl lg:leading-none">
                                                                            <a
                                                                                className="md:clamp one-line leading-normal inherits-color"
                                                                                title="Why Neovim?"
                                                                                href="/episodes/2617"
                                                                            >
                                                                                Why
                                                                                Neovim?
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="episode-list-excerpt generic-content text-sm lg:block">
                                                                    <p className="clamp two-lines font-normal">
                                                                        Before
                                                                        we begin
                                                                        from
                                                                        scratch,
                                                                        let's
                                                                        kick
                                                                        things
                                                                        off with
                                                                        a
                                                                        demonstration
                                                                        of my
                                                                        fully-configured
                                                                        setup.
                                                                        I'll
                                                                        show you
                                                                        why I
                                                                        love Vim
                                                                        and
                                                                        Neovim,
                                                                        and what
                                                                        you'll
                                                                        achieve
                                                                        from
                                                                        this
                                                                        course.
                                                                        I'll
                                                                        also
                                                                        explain
                                                                        why I
                                                                        chose
                                                                        Neovim
                                                                        over
                                                                        Vim.
                                                                    </p>
                                                                </div>
                                                                <div className="mt-auto w-full hidden md:flex md:items-center">
                                                                    <span className="text-3xs text-grey-600/75 mr-4 font-medium uppercase">
                                                                        {' '}
                                                                        Episode
                                                                        1
                                                                    </span>
                                                                    <span className="mr-3 inline-flex items-center">
                                                                        <svg
                                                                            width={
                                                                                10
                                                                            }
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
                                                                        <span className="ml-1 text-3xs text-grey-600/75 text-xs font-medium lg:text-2xs">
                                                                            12:12
                                                                            minutes
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
                                        <Disclosure as="div" className="mt-2">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                        <span>
                                                            Do you offer
                                                            technical support?
                                                        </span>
                                                        <ChevronUpIcon
                                                            className={`${
                                                                open
                                                                    ? 'rotate-180 transform'
                                                                    : ''
                                                            } h-5 w-5 text-purple-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        No.
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                    <section className="hidden md:block">
                                        <div
                                            className="container"
                                            style={{ maxWidth: '1166px' }}
                                        >
                                            <div className="text-center">
                                                <img
                                                    loading="lazy"
                                                    className="lazy relative mx-auto mb-4 lazyloaded"
                                                    src="https://laracasts.com/images/series/series-in-progress-robot.png"
                                                    width={210}
                                                    alt="Lary the robot behind a computer, holding a microphone"
                                                    style={{ left: '12px' }}
                                                />
                                                <div>
                                                    <button
                                                        className="btn flex-center btn-dark-blue flex-1 mx-auto"
                                                        style={{
                                                            minWidth: '150px',
                                                        }}
                                                    >
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
                                                            Add to Watchlist
                                                        </span>
                                                    </button>
                                                </div>
                                                <p className="mt-5 text-center text-2xs text-grey-600">
                                                    {' '}
                                                    *Series still in
                                                    development. Check back
                                                    often for updates.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Show.layout = (page: React.ReactNode) => (
    <FrontLayout title="Laravel 8 From Scratch">{page}</FrontLayout>
);

export default Show;

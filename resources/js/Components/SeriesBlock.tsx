import React from 'react';

interface Props {
    series: {
        title: string;
        thumbnail: string;
        instructor: {
            name: string;
            avatar: string;
        };
        isCreatorSeries: boolean;
        url: string;
        description: any;
        lessons: number;
        duration: string;
        difficulty: string;
    };
    className?: string;
}

const beginnerDifficulty = () => (
    <>
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
        <span
            className={
                'inline-block h-4 w-2 flex-1 rounded ' + 'bg-deep-black/25'
            }
        />
        <span
            className={
                'inline-block h-4 w-2 flex-1 rounded ' + 'bg-deep-black/25'
            }
        />
    </>
);

const intermediateDifficulty = () => (
    <>
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
        <span
            className={
                'inline-block h-4 w-2 flex-1 rounded ' + 'bg-deep-black/25'
            }
        />
    </>
);

const advancedDifficulty = () => (
    <>
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
        <span className={'inline-block h-4 w-2 flex-1 rounded ' + 'bg-white'} />
    </>
);

function SeriesBlock({ series, className }: Props) {
    return (
        <div
            className={
                'featured-collection card group one-column container relative h-auto w-full overflow-hidden overflow-hidden rounded-xl border-none py-6 px-6 text-white md:flex md:h-[420px] md:py-8 md:px-8 xl:py-7 xl:pr-5 bg-panel-800 ' +
                className
            }
            style={{
                maxWidth: '1166px',
                maskImage: '-webkit-radial-gradient(white, black)',
            }}
        >
            <div className="text-center">
                <div
                    className="absolute top-0 left-0 h-full opacity-25 lg:-translate-x-52 lg:opacity-100"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgb(0, 145, 255) 0%, transparent)',
                        width: '450px',
                    }}
                />
                <img
                    className="thumbnail pointer-events-none relative left-0 mt-[-200px] mb-8 rounded-lg md:absolute md:top-0 md:my-0 md:translate-x-[-45%]"
                    src={series.thumbnail}
                    alt={series.title}
                    width={420}
                />
            </div>
            <div className="body relative flex h-full flex-col items-center justify-between md:ml-[250px] md:w-full lg:items-stretch xl:mr-auto xl:pr-8 md:ml-[250px]">
                <div className="mb-4 text-center md:text-left xl:max-w-[490px]">
                    <div className="mb-5 flex flex-col items-center md:items-start">
                        {series.isCreatorSeries && (
                            <div
                                className="flex items-center text-3xs font-semibold uppercase leading-loose mb-1"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                <img
                                    src="https://laracasts.com/images/series/creator-series/laracasts-creator-series-logo-arrow.svg"
                                    alt="CreatorSeries prism triangle"
                                    className="mr-1"
                                    width={15}
                                />
                                <span className="text-white">Creator</span>
                                &nbsp;
                                <span className="text-blue">Series</span>
                            </div>
                        )}
                        <h3 className="text-2xl font-medium leading-none lg:text-[30px]">
                            <a
                                className="inherits-color link"
                                href={series.url}
                            >
                                {series.title}
                            </a>
                        </h3>
                    </div>
                    <div className="content hide-scrollbar mb-2 text-sm leading-loose text-white xl:max-h-[220px] xl:overflow-auto">
                        {series.description}
                    </div>
                </div>
                <div className="mt-6 h-full w-full md:mt-0 md:h-auto">
                    <div className="mb-5 flex flex-wrap justify-center gap-4 text-2xs font-semibold md:justify-start">
                        <div className="flex items-center text-2xs font-semibold">
                            <svg width={12} viewBox="0 0 9 12" className="mr-2">
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
                            <a
                                className="link inherits-color no-transition"
                                href="/series/learn-statamic-with-jack"
                            >
                                {series.lessons} Lessons{' '}
                            </a>
                        </div>
                        <div className="flex items-center text-2xs font-semibold">
                            <svg
                                width={13}
                                viewBox="0 0 10 10"
                                className="mr-2"
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
                            <span>{series.duration}</span>
                        </div>
                        <div className="flex items-center">
                            {/**/}
                            {/**/}
                            <div className="flex items-center">
                                <div className="difficulty-meter mr-2 flex space-x-1 is-intermediate">
                                    {series.difficulty === 'Beginner' &&
                                        beginnerDifficulty()}
                                    {series.difficulty === 'Intermediate' &&
                                        intermediateDifficulty()}
                                    {series.difficulty === 'Advanced' &&
                                        advancedDifficulty()}
                                </div>
                                <strong>{series.difficulty}</strong>
                            </div>
                        </div>
                        {/**/}
                    </div>
                    <div className="mx-auto flex max-w-[420px] flex-col gap-4 md:mx-0 md:flex-row">
                        <div className="md:flex-1">
                            <a
                                className="btn flex-center btn-dark-blue"
                                href={series.url}
                            >
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    className="mr-2"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-1-1h18v18H-4z" />
                                        <path
                                            className="fill-current"
                                            d="M6 10.875L10.5 7.5 6 4.125v6.75zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z"
                                        />
                                    </g>
                                </svg>
                                {/**/}
                                {/**/}
                                <span className="text-wrap inline-block flex-shrink-0">
                                    Start Series
                                </span>
                            </a>
                        </div>
                        <div className="md:flex-1">
                            <button className="btn flex-center btn-dark-blue flex-1 h-full w-full">
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
                                <span className="text-wrap inline-block flex-shrink-0">
                                    Add to Watchlist
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden flex-shrink-0 lg:-my-3 lg:w-[280px] xl:block">
                <div className="absolute h-full w-full -translate-x-[5.5rem] scale-75 rounded-2xl bg-panel-600 opacity-15" />
                <div className="absolute h-full w-full -translate-x-[3.5rem] scale-[85%] rounded-2xl bg-panel-600 opacity-25" />
                <div className="absolute h-full w-full -translate-x-6 scale-95 rounded-2xl bg-panel-600 opacity-50" />
                <a
                    className="relative flex h-full w-full rounded-2xl"
                    href={series.url}
                >
                    <figure className="w-full">
                        <img
                            loading="lazy"
                            className="lazy h-full w-full rounded-2xl object-cover object-top lazyloaded"
                            src={series.instructor.avatar}
                            alt={'Photo of ' + series.instructor.name}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-deep-black/90" />
                        <figcaption className="absolute bottom-0 left-0 w-full p-4">
                            <p className="font-light">
                                {series.instructor.name}
                            </p>
                            <p className="flex items-center gap-x-3 font-poppins font-semibold text-grey-800">
                                <span className="flex-shrink-0 text-xs">
                                    Your Instructor Today
                                </span>
                                <span
                                    className="h-px bg-grey-800"
                                    style={{ width: '80px' }}
                                />
                            </p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    );
}

export default SeriesBlock;

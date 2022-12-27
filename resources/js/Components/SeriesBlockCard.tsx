import React from "react";
import {toLower} from "lodash";
import classNames from 'classnames/bind';

interface Props {
    series: {
        title: string;
        url: string;
        thumbnail: string;
        description: string;
        gradient: string;
        difficulty: string;
        lessons: number;
        duration: string;
    }
}

const beginnerDifficulty = () => (
    <>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-deep-black/25'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-deep-black/25'}/>
    </>
);

const intermediateDifficulty = () => (
    <>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-deep-black/25'}/>
    </>
);

const advancedDifficulty = () => (
    <>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
        <span className={'inline-block h-1 w-2 flex-1 rounded ' + 'bg-white'}/>
    </>
);

export default function SeriesBlockCard({series}: Props) {

    return (
        <div className="group relative flex-1">
            <div
                className={
                    "card is-incomplete flex h-[309px] w-full border-none pr-4 text-white xl:w-[370px] " +
                    series.gradient
                }
                style={{ maskImage: "-webkit-radial-gradient(white, black)" }}
            >
                <div className="mr-4 flex flex-shrink-0 flex-col items-center justify-between rounded-xl px-4 pt-5 pb-6 lg:mr-0">
                    <a
                        className="card-thumbnail absolute relative left-0 my-4 flex translate-x-[-75%] scale-[2.5] items-center md:my-0"
                        style={{ top: "16%", width: "96px" }}
                        href={series.url}
                    >
                        <img
                            loading="lazy"
                            src={series.thumbnail}
                            alt={series.title + " thumbnail"}
                            width={235}
                        />
                    </a>
                    <div className="w-full text-center">
                        <div className="mb-2 text-2xs font-semibold text-white">
                            {series.difficulty}
                            <br />
                            Difficulty
                        </div>
                        <div
                            className={
                                "difficulty-meter mx-4 flex justify-center space-x-1 is-" +
                                toLower(series.difficulty)
                            }
                        >
                            {series.difficulty === "Beginner" && beginnerDifficulty()}
                            {series.difficulty === "Intermediate" && intermediateDifficulty()}
                            {series.difficulty === "Advanced" && advancedDifficulty()}
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full flex-col justify-around pt-8 pb-6 pr-4 md:pt-5">
                    <h3 className="link inline-flex items-start text-[22px] font-semibold leading-tight text-white lg:mt-3 lg:h-12 lg:items-center">
                        <a
                            className="lg:clamp lg:two-lines inherits-color"
                            title={series.title}
                            href={series.url}
                        >
                            {series.title}
                        </a>
                    </h3>
                    <div className="generic-content mt-8 mb-auto text-sm md:text-xs">
                        <p className="clamp five-lines">{series.description}</p>
                    </div>
                    <div className="series-card-meta flex items-end gap-x-4 text-2xs lg:mt-auto">
                        <div className="flex items-center font-semibold lg:group-hover:invisible">
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
                            <span className="no-transition">{series.lessons} Lessons</span>
                        </div>
                        <div className="font-semibold lg:group-hover:invisible flex items-center">
                            <svg width={13} viewBox="0 0 10 10" className="mr-2">
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
                        <div className="ml-auto lg:group-hover:invisible">{/**/}</div>
                    </div>
                    <div className="hidden lg:block">
                        <a
                            className="btn btn-white flex-center card-play-button absolute mb-1 w-full max-w-xs text-sm font-bold group-hover:translate-y-0"
                            style={{ bottom: "18px" }}
                            href={series.url}
                        >
                            <svg width={15} height={15} viewBox="0 0 15 15" className="mr-2">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M-1-1h18v18H-1z" />
                                    <path
                                        className="fill-current"
                                        d="M6 10.875L10.5 7.5 6 4.125v6.75zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z"
                                    />
                                </g>
                            </svg>
                            <span className="text-wrap inline-block flex-shrink-0"> Play </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
);
}

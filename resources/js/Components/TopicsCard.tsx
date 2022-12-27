import React from 'react';

interface Props {
    topics: {
        name: string,
        url: string,
        icon: string,
        series: number,
        videos: number
    }[]
}

export default function TopicsCard({ topics }: Props) {
    return (
        <div className="md:max-h-none container mx-auto mb-3 mt-8 flex max-h-[500px] flex-wrap justify-center gap-x-5 gap-y-6 overflow-auto md:mt-[65px]" style={{maxWidth: '1350px'}}>
            {topics.map((topic, index) => (
                <div key={index} className="flex flex-1 justify-center text-center md:max-w-[225px]">
                    <a className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 flex h-full w-full flex-shrink-0 flex-col justify-between rounded-2xl px-3 py-1 bg-blue/7 hover:bg-blue/13"
                       style={{height: '84px', minWidth: '192px'}}
                       href={topic.url}>
                        <div className="flex flex-1 items-center">
                            <div className="mr-4 flex flex-shrink-0 justify-center"><img
                                src={topic.icon}
                                alt="alpine-logo.svg topic icon" className="h-full" loading="lazy" width={50}
                                height={50}/></div>
                            <div className="w-full lg:w-auto flex justify-between md:block">
                                <h2 className="text-left text-base font-semibold leading-tight">{topic.name}</h2>
                                <div
                                    className="hidden text-left md:block text-sm md:text-3xs text-white md:text-grey-600/50">
                                    {topic.series} Series <span className="relative inline-block px-1 text-xs" style={{top: '1px'}}> • </span> {topic.videos} Videos
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

import { Tooltip } from '@material-tailwind/react';
import React from 'react';
import Tooltips from './Tooltips';

interface Props {
    instructors: {
        name: string,
        job_title: string,
        gradient: string,
        greeting: string,
        images: string,
        twitter: string,
        github: string,
        series: {
            title: string,
            url: string,
            thumbnail: string,
        }[]
    }[]
}

export default function InstructorsCard({ instructors }: Props) {
    return (
        <div>
            {instructors.map((instructor, index) => (
                <div
                    className="panel relative transition-colors duration-300 dark text-white bg-panel-800 hover:bg-panel-700 px-5 py-4 rounded-2xl group lg:h-[242px]" key={index}>
                    <div className="flex gap-10">
                        <aside className="w-32" style={{flex: '0 1 0%'}}>
                            <div className={'absolute top-0 left-0 left-0 rounded-full ' + instructor.gradient}
                                 style={{width: '115px', height: '115px', top: '-17px'}}/>
                            <div style={{width: '105px', height: '164px', marginTop: '-15px', marginLeft: '-5px'}}
                                 className="relative"><img loading="lazy"
                                                           className="h-full w-full border-6 border-blue-darkest object-cover"
                                                           src={instructor.images}
                                                           alt={'Photo of ' + instructor.name} style={{
                                borderRadius: '66px',
                                marginTop: '-6px',
                                boxShadow: 'rgba(120, 144, 156, 0.07) 0px 0px 0px 1px'
                            }} width={105} height={164}/></div>
                            <div className="flex-center mt-1 gap-2">
                                <a href={instructor.twitter}
                                   className="flex-center h-8 w-8 rounded-md bg-panel-700 group-hover:bg-panel-600 group-hover:hover:bg-blue/15">
                                    <svg width={20} height={32} viewBox="0 0 36 36" className="text-grey-600">
                                        <path className="fill-current" fillRule="evenodd"
                                              d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm8.03 13.88c.008.179.012.358.012.538 0 5.475-4.166 11.786-11.788 11.786-2.34 0-4.518-.684-6.351-1.86.324.039.654.058.988.058 1.942 0 3.728-.663 5.146-1.773-1.813-.034-3.343-1.231-3.87-2.878.252.048.512.075.778.075.378 0 .745-.05 1.092-.145-1.895-.38-3.323-2.054-3.323-4.062l.001-.052c.558.31 1.197.496 1.876.517-1.111-.741-1.843-2.01-1.843-3.447 0-.76.204-1.472.56-2.084 2.043 2.507 5.097 4.156 8.54 4.33-.071-.304-.107-.62-.107-.945 0-2.287 1.855-4.143 4.142-4.143 1.192 0 2.268.504 3.025 1.308.944-.185 1.829-.529 2.631-1.005-.311.968-.966 1.779-1.824 2.292.84-.1 1.64-.322 2.38-.652-.553.83-1.255 1.56-2.065 2.142z"/>
                                    </svg>
                                </a>
                                <a href={instructor.github}
                                   className="flex-center h-8 w-8 rounded-md bg-panel-700 group-hover:bg-panel-600 group-hover:hover:bg-blue/15">
                                    <svg width={20} height={29} viewBox="0 0 30 29" className="text-grey-600">
                                        <path className="fill-current" fillRule="nonzero"
                                              d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"/>
                                    </svg>
                                </a>
                            </div>
                        </aside>
                        <div className="pb-6">
                            <a href="#">
                                <h4 className="text-2xl font-medium leading-tight">{instructor.name}</h4>
                            </a>
                            <p className="mt-1 text-xs text-grey-600">{instructor.job_title}</p>
                            <p className="clamp mt-4 pr-8 text-xs text-grey-100" style={{WebkitLineClamp: 6}}>{instructor.greeting}</p>
                            <div className="absolute -bottom-6 flex items-start gap-3 md:-bottom-8">
                                {instructor.series.map((serie, index) => (
                                    <Tooltips
                                        content={serie.title}
                                        key={index}
                                    >
                                        <a
                                            href={serie.url}><img
                                            loading="lazy"
                                            className="h-10 w-10 mix-blend-luminosity transition-all hover:mix-blend-normal md:h-[54px] md:w-[54px]"
                                            src={serie.thumbnail}
                                            alt={serie.title}/>
                                        </a>
                                    </Tooltips>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

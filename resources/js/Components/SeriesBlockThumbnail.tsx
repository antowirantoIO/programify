import React from "react";
import Tooltips from "@/Components/Tooltips";

interface Props {
    series: {
        title: string;
        url: string;
        thumbnail: string;
        class_category: string;
    }
}

export default function SeriesBlockThumbnail({series}: Props){
    return (
        <Tooltips content={series.title}>
            <a data-tooltip={series.title} className={'card series-thumbnail-card relative z-10 flex h-[144px] rounded-xl border-none text-white mobile:mx-auto lg:min-w-[164px] w-auto items-center justify-center flex-1 ' + series.class_category} href={series.url}>
                <div className="flex flex-shrink-0 items-center flex-center h-full w-full"><img loading="lazy" src={series.thumbnail} alt={series.title} width={116} height={116} /></div>
            </a>
        </Tooltips>
    );
}

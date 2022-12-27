import React from 'react';

interface Props {
    title: string;
    words: string;
    slug: string;
    url: string;
}

export default function CodeLink({ title, words, slug, url }: Props) {
    return (
        <a className="code-link relative my-2 block rounded border-none pl-4 text-left text-blue hover:bg-blue hover:text-white" style={{marginLeft: '10px', width: 'calc(100% - 10px)'}} href={url}>
            <div className="text-[.7rem] font-normal text-white/50">// {words}</div>
            <span className="font-bold text-white">"{slug}"&nbsp;=&gt;&nbsp;</span><span className="font-bold">"{title}"</span><span className="text-white">,</span>
        </a>
    );
}

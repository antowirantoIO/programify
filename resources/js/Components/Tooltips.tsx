import React from 'react';
import { Tooltip } from "@material-tailwind/react";

interface Props {
    content: React.ReactNode;
    children: React.ReactNode;
}

export default function Tooltips({content, children}: Props){
    return (
        <Tooltip
            content={
                <>
                    {content}
                </>
            }
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
            offset={8}
            className="tippy-box ml-4 hidden min-h-0 py-2 px-6 font-semibold normal-case md:inline z-40"
        >
            {children}
        </Tooltip>
    );
}

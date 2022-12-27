import React from 'react';

interface Props {
    href?: string;
    text: string;
    className?: string;
    children: React.ReactNode;
}

const IconButton = ({ href = '#', children, text, className }: Props) => {
    return (
        <div className="basis-full md:basis-auto">
            <a className={className} href={href}>
                {children}
                <span className="text-wrap inline-block flex-shrink-0">
                    {text}
                </span>
            </a>
        </div>
    );
};

export default IconButton;

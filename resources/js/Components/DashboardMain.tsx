import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function DashboardMain({ children }: Props) {
    return (
        <div
            id="forum-main"
            className="forum-main mx-auto w-full md:flex-1 xl:max-w-[950px]"
        >
            {children}
        </div>
    );
}

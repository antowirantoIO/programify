import { useOnClickOutside } from '@/Hooks/useOnclickOutside';
import React, { FC, useRef } from 'react';

interface ContextMenuPanelProps {
    x: number;
    y: number;
    closeContextMenu: () => void;
}

const ContextMenuPanel: FC<ContextMenuPanelProps> = ({
    x,
    y,
    closeContextMenu,
}) => {
    const contextMenuRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(contextMenuRef, closeContextMenu);
    return (
        <div
            ref={contextMenuRef}
            className="absolute z-50 rounded-lg shadow-lg text-sm text-white/85 py-3 px-2"
            style={{
                top: `${y - 100}px`,
                left: `${x}px`,
                background: '#0f172a',
            }}
        >
            <ul
                className="hide-scrollbar flex flex-col gap-y-2 lg:overflow-y-auto text-white"
                style={{ width: '150px' }}
            >
                <li className="list-none">
                    <a
                        className="group block flex items-center rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-grey-400 dark:hover:bg-panel-800 dark:hover:text-blue dark:text-white/85"
                        href="/discuss"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 w-4 h-4"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={4} y1={7} x2={20} y2={7} />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <span
                            aria-hidden="true"
                            className="inline-block h-4 rounded-xl group-hover:scale-y-125 group-hover:bg-blue bg-grey-700 dark:bg-blue/10"
                        />{' '}
                        Delete
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContextMenuPanel;

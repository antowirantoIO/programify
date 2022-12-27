import classNames from 'classnames';
import React from 'react';

interface Props {
    menus: {
        name: string;
        url: string;
        active: boolean;
    }[];
}

export default function TopicsMenu({ menus }: Props) {
    return (
        <nav className="container" aria-label="Topics Menu">
            <ul
                className="hide-scrollbar mr-[-20px] flex min-h-[40px] items-center gap-x-4 overflow-x-auto overflow-y-hidden from-transparent via-[rgba(50,138,241,0.15)] to-transparent pr-[20px] text-center leading-loose after:absolute after:bottom-[-20px] after:hidden after:h-px after:w-full after:flex-shrink-0 after:bg-gradient-to-r md:mx-auto md:mx-auto md:min-h-0 md:justify-center md:gap-x-8 md:overflow-x-visible md:overflow-y-visible md:pr-0 after:md:block lg:gap-x-12"
                style={{ maxWidth: '800px' }}
            >
                {menus.map((menu, index) => (
                    <li
                        key={index}
                        className="relative inline-block flex-shrink-0"
                    >
                        <a
                            className={
                                'taxonomy-nav-link rounded-full px-4 py-2 text-2lg font-medium hover:text-white md:px-0 md:py-0 md:text-lg text-white md:bg-transparent ' +
                                classNames({
                                    'is-active bg-blue': menu.active,
                                    'bg-blue-1000 md:text-grey-600/30':
                                        !menu.active,
                                })
                            }
                            href={menu.url}
                        >
                            {' '}
                            {menu.name}{' '}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

import styles from '@/styles';
import { Menu, Transition } from '@headlessui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { IconChevronDown } from '@tabler/icons';
import clsx from 'clsx';
import React, { Fragment } from 'react';

function DropdownMenu({
    cheveronDownIcon = true,
    children,
    trigger,
    className,
    containerClassname = null,
    buttonClassName = null,
    startsWith = null,
}) {
    const usePageClone = usePage().url;
    return (
        <Menu className={clsx('relative', className)} as={'div'}>
            {({ open }) => (
                <>
                    <Menu.Button
                        className={clsx(
                            buttonClassName,
                            styles.inlineFlexCenter,
                            styles.lightAndDarkBorderBackgroundHover,
                            'py-2 gap-x-2 px-4 border rounded-lg font-medium',
                            usePageClone.startsWith(startsWith) && '!border-primary-500 !text-white'
                        )}>
                        {trigger}
                        {/* prettier-ignore */}
                        {cheveronDownIcon && (
                            <IconChevronDown
                                className={clsx(open && 'rotate-180', 'h-3.5 w-3.5 transition-transform duration-300')}
                            />
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Menu.Items
                            as='div'
                            className={clsx(
                                containerClassname,
                                'absolute top-full right-0 z-50 mt-1 lg:mt-2 w-64 overflow-hidden rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-sm dark:shadow-md focus:outline-none dark:border-slate-800 dark:bg-slate-900'
                            )}>
                            {children}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}

function Divider() {
    return <div className='my-2 h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800' />;
}

function Link({ className = '', isActive = false, isAnchor = false, href, value, children, ...props }) {
    const linkClasses = (onActive) => {
        return clsx(
            className,
            onActive && 'text-primary-600 dark:hover:text-white',
            isActive && 'font-medium text-primary-600 dark:!text-white',
            'group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight text-slate-600 transition dark:text-slate-300',
            '[&>svg]:stroke-[1.25] [&>svg]:w-4 [&>svg]:h-4'
        );
    };
    return (
        <Menu.Item>
            {({ active }) => {
                return isAnchor ? (
                    <a {...props} className={linkClasses(active)} href={href}>
                        {value ? value : children}
                    </a>
                ) : (
                    <InertiaLink {...props} className={linkClasses(active)} href={href}>
                        {value ? value : children}
                    </InertiaLink>
                );
            }}
        </Menu.Item>
    );
}

function Anchor({ href, value, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <a
                    {...props}
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(
                        active && 'text-primary-600 dark:!text-white',
                        'group flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight text-slate-600 dark:text-slate-300'
                    )}
                    href={href}>
                    {value ? value : children}
                </a>
            )}
        </Menu.Item>
    );
}

DropdownMenu.Anchor = Anchor;
DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
export default DropdownMenu;

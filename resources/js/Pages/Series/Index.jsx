import BackgroundForGrid from '@/Components/BackgroundForGrid';
import Breadcrumb from '@/Components/Breadcrumb';
import Case from '@/Components/Case';
import CourseBlock from '@/Components/CourseBlock';
import DefaultButton from '@/Components/DefaultButton';
import Header from '@/Components/Header';
import Meta from '@/Components/Meta';
import Pagination from '@/Components/Pagination';
import App from '@/Layouts/App';
import { capitalize } from '@/Libs/helper';
import { __ } from '@/Libs/lang';
import styles from '@/styles';
import { Menu } from '@headlessui/react';
import { Link } from '@inertiajs/inertia-react';
import { IconChevronDown } from '@tabler/icons';
import clsx from 'clsx';

const filters = [
    {
        name: 'latest',
        url: '/series',
    },
    {
        name: 'recent',
        url: '/series/is/recent',
    },
    {
        name: 'trending',
        url: '/series/is/trending',
    },
    {
        name: 'popular',
        url: '/series/is/popular',
    },
    {
        name: 'Pro series',
        url: '/series/is/pro',
    },
];
export default function Index({ is, ...props }) {
    const { data: series, meta, links } = props.series;
    return (
        <>
            <Meta
                {...{
                    title: `${is ? __(capitalize(is) + ' series') : __('Screencast')} / Parsinta`,
                    description: `${__('There are')} ${meta.total} ${
                        is ? __(capitalize(is) + ' series') : __('Series')
                    } ${__('Ready to learn')}.`,
                    image: 'https://parsinta.com/og-image.png',
                }}
            />
            <div className='dark:bg-grid-emerald-900/40 relative bg-grid-emerald-100 dark:bg-slate-1000 border-t dark:border-slate-800/50 bg-white py-8 lg:py-32'>
                <div className='bg-gradient-to-r dark:from-slate-1000 dark:via-slate-1000 dark:to-emerald-900/10 from-white via-white to-emerald-400/10 inset-0 absolute' />
                <div className='bg-gradient-to-b dark:from-slate-1000 dark:via-slate-1000 dark:to-transparent from-white via-white to-transparent inset-0 absolute' />
                <Case>
                    <div className='flex relative'>
                        <div className='w-full lg:w-2/3'>
                            <div className='flex flex-col h-full'>
                                <div className='flex-1'>
                                    <div>
                                        <Header.Title>
                                            {is ? __(capitalize(is) + ' series') : __('Screencast')}
                                        </Header.Title>
                                        <Header.Subtitle>
                                            <span className=''>
                                                {is
                                                    ? __('Here are :number series that are :hype.', {
                                                          number: meta.total,
                                                          hype: __(is),
                                                      })
                                                    : __('Practical screencasts for developers.')}
                                            </span>
                                        </Header.Subtitle>
                                    </div>
                                    <Header.Body>
                                        {__(
                                            "Learn everything from scratch! Don't wait too long, learn everything you need to learn today, because all the series here don't just teach you the fundamentals"
                                        )}
                                        .
                                    </Header.Body>
                                </div>
                                <div className='flex gap-x-2 mt-4 lg:mt-10'>
                                    <DefaultButton primary href='/series/is/pro'>
                                        {__('The pro series')}
                                    </DefaultButton>
                                    <DefaultButton emerald href='/topics/laravel'>
                                        {__('Pick a topic')}
                                    </DefaultButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Case>
            </div>
            <Breadcrumb>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-x-2'>
                        <Breadcrumb.Link href='/series' value={__('Screencast')} />
                        <Breadcrumb.Current
                            value={__(
                                is === null ? (
                                    <span className='capitalize'>{__('latest')}</span>
                                ) : is === 'pro' ? (
                                    <span>{__('Pro series')}</span>
                                ) : (
                                    <span className='capitalize'>{__(is)}</span>
                                )
                            )}
                        />
                    </div>
                    <div className='relative'>
                        <Menu>
                            {({ open }) => (
                                <>
                                    <Menu.Button
                                        className={clsx(
                                            'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-50 rounded-lg items-center gap-x-1 shadow flex px-3 py-1 focus:outline-none font-medium text-sm'
                                        )}>
                                        Filter
                                        <IconChevronDown
                                            stroke={3}
                                            className={clsx(open && 'rotate-180', styles.transitionDefault, 'w-3 h-3')}
                                        />
                                    </Menu.Button>
                                    <Menu.Items className='p-2 top-0 mt-9 z-50 rounded-lg shadow border dark:border-slate-700 absolute w-40 bg-slate-50 dark:bg-slate-800 right-0'>
                                        {filters.map((filter, i) => (
                                            <FilterItem
                                                key={i}
                                                className={clsx(
                                                    is === filter.name &&
                                                        'bg-primary-600 dark:bg-primary-800 hover:!bg-primary-600 !text-white font-medium'
                                                )}
                                                href={filter.url}>
                                                {__(filter.name)}
                                            </FilterItem>
                                        ))}
                                    </Menu.Items>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </Breadcrumb>
            <BackgroundForGrid>
                <Case>
                    <div>
                        <section>
                            <CourseBlock is={is} lightAndDark {...{ series: series }} />
                        </section>
                    </div>
                    {meta.has_pages ? (
                        <>
                            <div className='mt-10 md:mt-12'></div>
                            <div className='flex relative justify-center'>
                                <Pagination lightAndDark {...{ meta, links }} />
                            </div>
                        </>
                    ) : null}
                </Case>
            </BackgroundForGrid>
        </>
    );
}

function FilterItem({ href, className, children }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    className={clsx(
                        className,
                        active
                            ? 'dark:bg-slate-700 dark:text-white text-slate-800 bg-slate-200'
                            : 'text-slate-600 dark:text-slate-400',
                        'px-2 py-0.5 rounded text-[13px] block capitalize my-px'
                    )}
                    href={href}>
                    {children}
                </Link>
            )}
        </Menu.Item>
    );
}

Index.layout = (page) => <App>{page}</App>;

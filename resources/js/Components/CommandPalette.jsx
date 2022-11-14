import { useDebounce } from '@/Hooks/useDebounce';
import { __ } from '@/Libs/lang';
import results from '@/results.json';
import styles from '@/styles';
import { Combobox, Dialog } from '@headlessui/react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { IconArrowBack, IconArrowsUpDown, IconSearch, IconSearchOff } from '@tabler/icons';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';

const hardFilter = (query) => {
    return query
        ? results.filter((result) => {
              return (
                  result.title.toLowerCase().includes(query.toLowerCase()) ||
                  result.description.toLowerCase().includes(query.toLowerCase())
              );
          })
        : [];
};

function CommandPalette({ isOpen, setIsOpen }) {
    const { ziggy } = usePage().props;
    const [query, setQuery] = useState('');
    const debounceQuery = useDebounce(query, 300);
    const [loading, setLoading] = useState(false);
    const filteredResults = useMemo(() => hardFilter(debounceQuery), [debounceQuery]);
    useEffect(() => {
        setLoading(false);
    }, [debounceQuery]);
    useEffect(() => {
        function onKeydown(e) {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                setIsOpen((isOpen) => !isOpen);
            }
        }

        window.addEventListener('keydown', onKeydown);
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [isOpen]);
    useEffect(() => setQuery(''), [ziggy.location]);
    const onQueryChange = (e) => {
        setLoading(true);
        setQuery(e.target.value);
    };
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className='z-50 fixed top-4 lg:top-10 left-0 px-4 right-0'>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.3 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.2 },
                        }}
                        className='fixed inset-0 bg-slate-900/60 backdrop-blur-sm'
                    />
                    <Dialog.Panel>
                        <motion.div
                            className='overflow-hidden relative dark:bg-slate-800 dark:border-slate-700 border bg-white rounded-lg max-w-2xl mx-auto'
                            initial={{ scale: 0.95, opacity: 0, transition: { duration: 0.3 } }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
                            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}>
                            <Combobox
                                className={'divide-y dark:divide-slate-700'}
                                as='div'
                                onChange={(result) => {
                                    setIsOpen(false);
                                    Inertia.get(result.url);
                                }}>
                                <div className='flex items-center px-4'>
                                    <IconSearch className={'h-5 w-5 dark:text-slate-200'} />
                                    <Combobox.Input
                                        value={query}
                                        onChange={onQueryChange}
                                        className={
                                            'w-full border-0 bg-transparent dark:text-slate-100 focus:ring-0 text-sm placeholder-slate-400 text-slate-600 h-12'
                                        }
                                        placeholder={__('Quick search...')}
                                    />
                                </div>
                                {filteredResults.length > 0 && (
                                    <Combobox.Options className={'py-1 text-sm max-h-96 overflow-y-auto'} static>
                                        {filteredResults.map((result, i) => (
                                            <Combobox.Option key={i} value={result}>
                                                {({ active }) => (
                                                    <div
                                                        className={clsx(
                                                            active
                                                                ? 'bg-primary-100 text-primary-600 dark:bg-slate-600 dark:text-white'
                                                                : 'text-slate-700 dark:text-slate-100',
                                                            'px-4 py-2 cursor-pointer group font-medium flex items-center justify-between'
                                                        )}>
                                                        {result.title}
                                                        <span
                                                            className={clsx(
                                                                active
                                                                    ? 'hidden lg:block text-primary-600 dark:text-slate-300'
                                                                    : 'hidden'
                                                            )}>
                                                            {result.type}
                                                        </span>
                                                    </div>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}

                                {query && filteredResults.length === 0 && !loading && (
                                    <div className={clsx('p-8', styles.flexCenter)}>
                                        <div className={clsx(styles.flexCenter, 'flex-col gap-y-4')}>
                                            <IconSearchOff className='text-muted w-10 h-10' stroke={1} />
                                            <p className='text-muted'>
                                                {__("We couldn't find what you were looking for.")}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div
                                    className={
                                        'px-4 h-8 bg-slate-50 dark:bg-slate-900/30 items-center text-slate-500 dark:text-slate-400 flex gap-x-4 justify-between text-[12px] font-medium'
                                    }>
                                    <div
                                        className={
                                            '[&>div>svg]:w-3.5 [&>div>svg]:h-3.5 dark:[&>div>svg]:text-slate-300 [&>div>svg]:text-slate-600 flex items-center gap-x-4'
                                        }>
                                        <div className={clsx(styles.inlineFlexCenter, 'gap-x-1')}>
                                            <IconArrowsUpDown />
                                            <span>navigate</span>
                                        </div>
                                        <div className={clsx(styles.inlineFlexCenter, 'gap-x-1')}>
                                            <IconArrowBack />
                                            <span>enter</span>
                                        </div>
                                        <div className={clsx(styles.inlineFlexCenter, 'gap-x-1')}>
                                            <span
                                                className={'text-xs font-semibold dark:text-slate-300 text-slate-600'}>
                                                esc
                                            </span>
                                            <span>exit</span>
                                        </div>
                                    </div>

                                    {query && filteredResults.length === 0 && loading && (
                                        <div className={'inline-flex items-center gap-x-1'}>
                                            {/*<IconLoader2 className={clsx(styles.textMuted, 'animate-spin w-4 h-4')} />*/}
                                            <LoadingPulse />
                                        </div>
                                    )}
                                </div>
                            </Combobox>
                        </motion.div>
                    </Dialog.Panel>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

const LoadingPulse = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        className={'w-5 h-5'}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'>
        <rect x='17.5' y={30} width={15} height={40} className='fill-slate-300'>
            <animate
                attributeName='y'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='18;30;30'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
                begin='-0.2s'
            />
            <animate
                attributeName='height'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='64;40;40'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
                begin='-0.2s'
            />
        </rect>
        <rect x='42.5' y={30} width={15} height={40} className='fill-slate-400'>
            <animate
                attributeName='y'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='20.999999999999996;30;30'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
                begin='-0.1s'
            />
            <animate
                attributeName='height'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='58.00000000000001;40;40'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
                begin='-0.1s'
            />
        </rect>
        <rect x='67.5' y={30} width={15} height={40} className='fill-slate-500'>
            <animate
                attributeName='y'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='20.999999999999996;30;30'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            />
            <animate
                attributeName='height'
                repeatCount='indefinite'
                dur='1s'
                calcMode='spline'
                keyTimes='0;0.5;1'
                values='58.00000000000001;40;40'
                keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            />
        </rect>
    </svg>
);

export default CommandPalette;

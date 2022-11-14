import styles from '@/styles';
import { usePage } from '@inertiajs/inertia-react';
import { IconAlertCircle, IconCircleCheck, IconCircleX, IconX } from '@tabler/icons';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function ProgramifyToaster() {
    const [visible, setVisible] = useState(false);
    const [timeExit, setTimeExit] = useState(null);
    const { flash } = usePage().props;
    useEffect(() => {
        setVisible(true);
        if (timeExit) {
            clearTimeout(timeExit);
        }
        setTimeExit(setTimeout(() => setVisible(false), 4000));
    }, [flash]);
    return (
        <AnimatePresence>
            {flash?.type && visible ? (
                <motion.div
                    initial={{ opacity: 0, y: '-100' }}
                    animate={{
                        opacity: 1,
                        y: 1,
                        transition: { duration: 0.5 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    className='max-w-lg sm:right-4 top-0 sm:top-4 w-full sm:w-[384px] z-50 fixed p-4 sm:p-2'>
                    <div className='relative shadow-sm dark:shadow-xl dark:shadow-black/10 dark:bg-slate-700 dark:border-slate-600 text-slate-600 dark:text-white flex justify-between border items-center gap-x-2 px-3 sm:px-4 py-3 sm:py-4 bg-slate-50 rounded-lg'>
                        <div className='flex-1 flex'>
                            <span className='shrink-0 mt-0.5 mr-2 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[1.5]'>
                                {flash.type === 'success' && <IconCircleCheck className='text-emerald-500' />}
                                {flash.type === 'error' && <IconCircleX className='text-rose-500' />}
                                {flash.type === 'warning' && <IconAlertCircle className='text-orange-500' />}
                            </span>
                            <span>{flash.message}</span>
                        </div>
                        <button
                            onClick={() => setVisible(false)}
                            className={clsx(
                                styles.flexCenter,
                                'focus:outline-none text-right absolute -right-2 -top-2 bg-white dark:bg-slate-500 dark:text-white dark:border-slate-400 border w-5 h-5 p-0.5 rounded-full'
                            )}>
                            <IconX className='w-5 h-5 inline' />
                        </button>
                    </div>
                </motion.div>
            ) : null}
            ;
        </AnimatePresence>
    );
}

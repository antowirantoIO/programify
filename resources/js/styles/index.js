const styles = {
    flexCenter: 'flex items-center justify-center',
    inlineFlexCenter: 'inline-flex items-center justify-center',
    whiteInvertBackground: 'bg-white border dark:text-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800',
    whiteInvertBackgroundHover:
        'bg-slate-200 hover:bg-slate-300 dark:text-slate-100 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600',
    lightAndDarkBorderBackground:
        'border bg-slate-100 text-black dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:shadow',
    lightAndDarkBorderBackgroundHover:
        'border border-slate-300 bg-white text-black disabled:opacity-50 transition duration-300 hover:enabled:border-slate-300 hover:enabled:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:shadow dark:hover:enabled:border-slate-600 dark:hover:enabled:bg-slate-700',
    dayAndNightBorderBackground:
        'border bg-white text-black transition duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white',
    dayAndNightBorderBackgroundHover:
        'bg-white text-black transition duration-300 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-700 shadow dark:hover:bg-slate-600 dark:hover:border-slate-500 dark:text-white',
    'simple-card-button':
        'gap-x-2 inline-flex rounded-lg px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-white transition duration-300 shadow-sm dark:bg-slate-700 dark:text-white dark:border-slate-600',
    transitionDefault: 'transition duration-200 ease-in',
    inputColor:
        'border bg-white dark:text-slate-300 placeholder-slate-500 shadow-sm border-slate-300 focus:outline-none focus:ring focus:ring-blue-500/20 focus:border-blue-400 dark:focus:border-blue-600 dark:border-slate-600/50 dark:bg-slate-700/50',
    textMuted: 'text-slate-500 dark:text-slate-400',
    textInvert: 'text-slate-800 dark:text-slate-100',
    inputWithin:
        'shadow-sm border border-slate-300 focus-within:outline-none focus-within:ring focus-within:ring-blue-500/20 focus-within:border-blue-400 dark:focus-within:border-blue-600 dark:border-slate-600/50 dark:bg-slate-700/50',
};

export default styles;

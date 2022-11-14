import useTheme from '@/Hooks/useTheme';
import styles from '@/styles';
import { IconDeviceDesktop, IconMoonStars, IconSun } from '@tabler/icons';
import clsx from 'clsx';

export function ThemeSwitcher() {
    let [setting, setSetting] = useTheme('system');

    function onChange() {
        if (setting === 'light') {
            setSetting('dark');
        }
        if (setting === 'dark') {
            setSetting('light');
        }

        if (setting === 'dark') {
            setSetting('system');
        }

        if (setting === 'system') {
            setSetting('light');
        }
    }
    return (
        <button
            onClick={onChange}
            type='button'
            className={clsx(
                styles.lightAndDarkBorderBackgroundHover,
                'py-[9px] inline-block focus:outline-none px-3 border rounded-lg font-medium transition'
            )}>
            <span>
                {setting === 'dark' ? (
                    <IconMoonStars stroke={1} className='w-5 h-5' />
                ) : setting === 'light' ? (
                    <IconSun stroke={1} className='w-5 h-5' />
                ) : (
                    <IconDeviceDesktop stroke={1} className='w-5 h-5' />
                )}
            </span>
        </button>
    );
}

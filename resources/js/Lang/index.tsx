import { usePage } from '@inertiajs/inertia-react';

function index(key: string, replace: any = {}) {
    const { language }: any = usePage().props;
    let translation = language[key] ? language[key] : key;

    return (
        Object.keys(replace).forEach(key => {
            translation = translation.replace(`:${key}`, replace[key]);
        }),
        translation
    );
}

export { index as __ };

const isServer = typeof window === 'undefined';
export function __(key, replace = {}) {
    let translation = (!isServer && window._translations[key]) || key;
    Object.keys(replace).forEach((r) => {
        translation = translation.replace(`:${r}`, replace[r]);
    });

    return translation;
}

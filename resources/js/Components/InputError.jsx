export default function InputError({ message, children, className = '' }) {
    return message ? (
        <p className={'text-sm text-red-600 mt-2 [&:first-letter]:uppercase' + className}>{message || children}</p>
    ) : null;
}

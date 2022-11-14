import clsx from 'clsx';

function Grid({ className = '', children }) {
    return (
        <ul
            className={clsx(
                className,
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 sm:gap-x-12 lg:gap-y-24 lg:gap-x-24'
            )}>
            {children}
        </ul>
    );
}

function Item({ children }) {
    return <li className='relative'>{children}</li>;
}

Grid.Item = Item;
export default Grid;

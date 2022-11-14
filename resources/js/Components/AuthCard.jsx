import React from "react";

export default function AuthCard({ header, subheader, children }) {
    return (
        <div className='relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl'>
            <div className='relative'>
                {header && (
                    <div className='mb-3 lg:mb-6'>
                        <h1 className='text-lg font-semibold tracking-tight text-slate-900 dark:text-white lg:text-xl'>
                            {header}
                        </h1>
                        <p className='mt-0.5 text-muted'>{subheader}</p>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}

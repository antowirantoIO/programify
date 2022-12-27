import React from 'react';

const ArrowRight = ({ ...props }) => {
    return (
        <div>
            <svg viewBox="0.75 0.75 32.5 32.5" {...props}>
                <g fill="none" fillRule="evenodd">
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path
                                        stroke="#000"
                                        strokeOpacity=".012"
                                        strokeWidth=".5"
                                        d="M0 0L32 0 32 32 0 32z"
                                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                    />
                                    <path
                                        className="fill-current"
                                        d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default ArrowRight;

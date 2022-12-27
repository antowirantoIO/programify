import React from 'react';

type Props = {
    text: string;
};

const MascotText = ({ text }: Props) => {
    return (
        <div>
            <div className="container" style={{ maxWidth: '1166px' }}>
                <div className="text-center">
                    <img
                        loading="lazy"
                        className="lazy relative mx-auto mb-4 lazyloaded"
                        src="https://laracasts.com/images/series/series-in-progress-robot.png"
                        width={210}
                        alt="Lary the robot behind a computer, holding a microphone"
                        style={{ left: '12px' }}
                    />
                    <p className="mt-5 text-center text-2xs text-grey-600">
                        {' '}
                        *{text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MascotText;

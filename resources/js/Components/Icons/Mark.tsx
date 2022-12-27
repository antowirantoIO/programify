import React from 'react';

type Props = React.DetailedHTMLProps<
    React.SVGProps<SVGSVGElement>,
    SVGSVGElement
>;

const Mark = ({ ...props }) => {
    return (
        <svg viewBox="0 0 8 10" {...props}>
            <path
                fillRule="nonzero"
                d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
            />
        </svg>
    );
};

export default Mark;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTurn = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M8.973 3.254a4.281 4.281 0 0 1 6.054 0l5.72 5.719a4.281 4.281 0 0 1 0 6.054l-5.72 5.72a4.281 4.281 0 0 1-6.054 0l-5.72-5.72a4.281 4.281 0 0 1 0-6.054l5.72-5.72Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m10 7.586 1.293-1.293a1 1 0 0 1 1.414 0L14 7.586M12 16V6.586M12 16v1m0-1a4 4 0 0 1 4-4h1.414M12 16a4 4 0 0 0-4-4H6.586m9.828-2 1.293 1.293a1 1 0 0 1 0 1.414L16.414 14m-8.828-4-1.293 1.293a1 1 0 0 0 0 1.414L7.586 14'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurn);
export default ForwardRef;

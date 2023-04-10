import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTripodBoard = (
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
            fill='currentColor'
            fillRule='evenodd'
            d='m8.335 17.006-2.664 5.33a.75.75 0 0 1-1.342-.671l2.33-4.66 1.676.001Zm9.007 0 2.329 4.659a.75.75 0 1 1-1.342.67l-2.665-5.329h1.678Zm-4.592 0V20a.75.75 0 0 1-1.5 0v-2.994h1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M22 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.25 7A.75.75 0 0 1 7 6.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7Zm0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTripodBoard);
export default ForwardRef;

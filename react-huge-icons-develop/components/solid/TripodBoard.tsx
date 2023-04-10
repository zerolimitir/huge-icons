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
            d='M19 17a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h1.525l-2.168 3.614a.75.75 0 0 0 1.286.772L8.275 17h2.975v2a.75.75 0 0 0 1.5 0v-2h2.975l2.632 4.386a.75.75 0 1 0 1.286-.772L17.475 17H19ZM6.25 7A.75.75 0 0 1 7 6.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7ZM7 11.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTripodBoard);
export default ForwardRef;

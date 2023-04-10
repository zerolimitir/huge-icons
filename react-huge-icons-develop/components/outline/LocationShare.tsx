import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationShare = (
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
        <circle cx={12} cy={11} r={3} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M20.953 6C21.623 7.312 22 8.862 22 10.625c0 1.131-.223 2.27-.609 3.375M2.61 14C2.223 12.895 2 11.756 2 10.625 2 8.862 2.377 7.312 3.047 6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationShare);
export default ForwardRef;

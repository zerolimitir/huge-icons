import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeSixty = (
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
            d='M21.25 12a.75.75 0 0 0 1.5 0h-1.5ZM8.889 22.75a.75.75 0 0 0 0-1.5v1.5ZM6 2.75h12v-1.5H6v1.5ZM2.75 18V6h-1.5v12h1.5Zm18.5-12v6h1.5V6h-1.5ZM8.889 21.25H6v1.5h2.889v-1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
        <rect
            width={4}
            height={6}
            x={18}
            y={16}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={2}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 7v5l-3 1m7 3h-2a2 2 0 0 0-2 2v1m0 0v1a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5v0a1.5 1.5 0 0 0-1.5-1.5H12Zm10-7-2-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeSixty);
export default ForwardRef;

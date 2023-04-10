import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaximizeRectangleDoted = (
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
            d='M8 11.25H6v1.5h2v-1.5ZM1.25 16v2h1.5v-2h-1.5ZM6 22.75h2v-1.5H6v1.5ZM12.75 18v-2h-1.5v2h1.5ZM8 22.75A4.75 4.75 0 0 0 12.75 18h-1.5A3.25 3.25 0 0 1 8 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 11.25A4.75 4.75 0 0 0 1.25 16h1.5A3.25 3.25 0 0 1 6 12.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 11.25 16h1.5A4.75 4.75 0 0 0 8 11.25v1.5Zm10-11.5h-8v1.5h8v-1.5ZM22.75 14V6h-1.5v8h1.5ZM18 18.75A4.75 4.75 0 0 0 22.75 14h-1.5A3.25 3.25 0 0 1 18 17.25v1.5Zm-8-17.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm8 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5Zm0 14.5h-6v1.5h6v-1.5ZM5.25 6v6h1.5V6h-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 7h5m0 0v5m0-5-6 6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangleDoted);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinimizeRectangleDoted = (
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
            d='M6 6v-.75V6Zm12-4.75h-2v1.5h2v-1.5ZM11.25 6v2h1.5V6h-1.5ZM16 12.75h2v-1.5h-2v1.5ZM22.75 8V6h-1.5v2h1.5ZM18 12.75A4.75 4.75 0 0 0 22.75 8h-1.5A3.25 3.25 0 0 1 18 11.25v1.5ZM11.25 8A4.75 4.75 0 0 0 16 12.75v-1.5A3.25 3.25 0 0 1 12.75 8h-1.5ZM16 1.25A4.75 4.75 0 0 0 11.25 6h1.5A3.25 3.25 0 0 1 16 2.75v-1.5Zm2 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM1.25 10v8h1.5v-8h-1.5ZM6 22.75h8v-1.5H6v1.5Zm8 0A4.75 4.75 0 0 0 18.75 18h-1.5A3.25 3.25 0 0 1 14 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm0 1.5h6v-1.5H6v1.5ZM18.75 18v-6h-1.5v6h1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 17H7m0 0v-5m0 5 6-6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangleDoted);
export default ForwardRef;

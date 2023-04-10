import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartBar = (
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
            d='M2.75 2a.75.75 0 0 0-1.5 0h1.5ZM22 22.75a.75.75 0 0 0 0-1.5v1.5ZM7.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm6.5-10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5Zm6.5-8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm-15-15v16h1.5V2h-1.5ZM6 22.75h16v-1.5H6v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5Zm5-7v6h1.5v-6h-1.5Zm5-4v10h1.5V7h-1.5Zm5 2v8h1.5V9h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartBar);
export default ForwardRef;

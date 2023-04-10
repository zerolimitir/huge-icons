import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowDown = (
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
            d='M4 8a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V10a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <rect
            width={6}
            height={4}
            fill='currentColor'
            opacity={0.4}
            rx={2}
            transform='matrix(0 1 1 0 18 16)'
        />
        <path
            fill='currentColor'
            d='M12 12a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.256 1.905a.75.75 0 0 1 .839-.649c3.518.45 6.364 1.117 9.346 2.5 2.915 1.352 5.926 3.372 9.809 6.483V9a.75.75 0 1 1 1.5 0v2A1.75 1.75 0 0 1 21 12.75h-2a.75.75 0 1 1 0-1.5h1.113c-3.745-2.986-6.594-4.877-9.303-6.134C8.012 3.82 5.329 3.182 1.905 2.744a.75.75 0 0 1-.649-.839Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowDown);
export default ForwardRef;

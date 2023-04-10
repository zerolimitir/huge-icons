import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatShapes = (
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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M2 6V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm15 0V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1Zm0 15v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1ZM2 21v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z'
        />
        <path
            fill='currentColor'
            d='M10 12.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5h-4v1.5Z'
        />
        <path
            fill='currentColor'
            d='m12 8 .69-.295a.75.75 0 0 0-1.38 0L12 8Zm-3.69 6.705a.75.75 0 1 0 1.38.59l-1.38-.59Zm6 .59a.75.75 0 0 0 1.38-.59l-1.38.59Zm-3-7.59-3 7 1.38.59 3-7-1.38-.59Zm4.38 7-3-7-1.38.59 3 7 1.38-.59Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7 4.5h10M19.5 7v10M17 19.5H7M4.5 17V7'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatShapes);
export default ForwardRef;

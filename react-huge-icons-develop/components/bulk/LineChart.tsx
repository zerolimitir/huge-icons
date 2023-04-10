import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLineChart = (
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
            d='M19.307 7.04a.75.75 0 0 1 .208 1.04l-5.781 8.672a.75.75 0 1 1-1.248-.832l5.78-8.672a.75.75 0 0 1 1.04-.208ZM5 12.75a.75.75 0 0 1 1.05-.15l4.8 3.6a.75.75 0 0 1-.9 1.2l-4.8-3.6A.75.75 0 0 1 5 12.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M6 12a1.997 1.997 0 0 1-2 2 2 2 0 1 1 2-2Zm8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChart);
export default ForwardRef;

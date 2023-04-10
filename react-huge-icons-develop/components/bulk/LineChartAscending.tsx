import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLineChartAscending = (
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
            d='M19 6.75a.75.75 0 0 1-.15 1.05l-4.8 3.6a.75.75 0 0 1-.9-1.2l4.8-3.6a.75.75 0 0 1 1.05.15Zm-8 6a.75.75 0 0 1-.15 1.05l-4.8 3.6a.75.75 0 1 1-.9-1.2l4.8-3.6a.75.75 0 0 1 1.05.15Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M22 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartAscending);
export default ForwardRef;

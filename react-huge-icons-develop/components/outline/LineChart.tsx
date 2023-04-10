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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18.89 7.664a2 2 0 1 0 2.219-3.329 2 2 0 0 0-2.218 3.33Zm0 0-5.78 8.672m0 0a1.997 1.997 0 0 0-2.71.464m2.71-.464a2 2 0 1 1-2.71.464m0 0-4.8-3.6m0 0a2 2 0 1 0-3.2-2.4 2 2 0 0 0 3.2 2.4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChart);
export default ForwardRef;

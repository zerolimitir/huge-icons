import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLineChartDescending = (
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
            d='M18.89 16.336a2 2 0 1 1 2.22 3.329 2 2 0 0 1-2.22-3.33Zm0 0-5.78-8.672m0 0A1.997 1.997 0 0 1 10.4 7.2m2.71.464A2 2 0 1 0 10.4 7.2m0 0-4.8 3.6m0 0a2 2 0 1 1-3.2 2.4 2 2 0 0 1 3.2-2.4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartDescending);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPieCircle = (
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
            d='M12 2a10 10 0 1 1-7.071 17.071l3.56-3.56A4.964 4.964 0 1 0 12 7.035V2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M4.929 19.071A10 10 0 0 1 12 2v5.036a4.964 4.964 0 0 0-3.51 8.474l-3.561 3.561ZM22 12a10 10 0 0 1-2.929 7.071l-3.56-3.56A4.963 4.963 0 0 0 16.963 12H22Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPieCircle);
export default ForwardRef;

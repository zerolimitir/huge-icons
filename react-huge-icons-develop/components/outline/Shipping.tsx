import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShipping = (
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
        <circle cx={19} cy={5} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M22 5c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0C17.47 8.376 16 6.546 16 5c0-2.21 1.343-3 3-3s3 .79 3 3ZM7 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M11 14h2m-8.154 3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShipping);
export default ForwardRef;

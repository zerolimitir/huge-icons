import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterSmallCircle = (
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
            d='M3 6h7m-7 6h9m7 0h2m-7-6h7m-8 12h7M3 18h3'
        />
        <circle cx={8} cy={18} r={2} stroke='currentColor' strokeWidth={1.5} />
        <circle cx={17} cy={12} r={2} stroke='currentColor' strokeWidth={1.5} />
        <circle cx={12} cy={6} r={2} stroke='currentColor' strokeWidth={1.5} />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterSmallCircle);
export default ForwardRef;

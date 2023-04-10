import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterBigCircle = (
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
            d='M3 8h3m-3 8h6m9 0h3m-6-8h6'
        />
        <circle cx={15} cy={16} r={3} stroke='currentColor' strokeWidth={1.5} />
        <circle cx={9} cy={8} r={3} stroke='currentColor' strokeWidth={1.5} />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterBigCircle);
export default ForwardRef;

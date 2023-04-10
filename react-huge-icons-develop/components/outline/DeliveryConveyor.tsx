import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryConveyor = (
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
        <rect width={12} height={12} x={6} y={3} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={20} height={6} x={2} y={15} stroke='currentColor' strokeWidth={1.5} rx={3} />
        <circle cx={17} cy={18} r={1} fill='currentColor' />
        <circle cx={12} cy={18} r={1} fill='currentColor' />
        <circle cx={7} cy={18} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M13 6h-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryConveyor);
export default ForwardRef;

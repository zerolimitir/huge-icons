import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryChargingFull = (
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
            d='m9 13 1.753 1.402a1 1 0 0 0 1.377-.122L15 11'
        />
        <rect width={12} height={18} x={6} y={4} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M10 2h4' />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryChargingFull);
export default ForwardRef;

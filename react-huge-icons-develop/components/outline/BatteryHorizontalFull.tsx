import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryHorizontalFull = (
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
            d='m8 12 1.753 1.402a1 1 0 0 0 1.377-.122L14 10'
        />
        <rect
            width={12}
            height={18}
            x={20}
            y={6}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={2}
            transform='rotate(90 20 6)'
        />
        <rect
            width={12}
            height={18}
            x={20}
            y={6}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={2}
            transform='rotate(90 20 6)'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M22 10v4' />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalFull);
export default ForwardRef;

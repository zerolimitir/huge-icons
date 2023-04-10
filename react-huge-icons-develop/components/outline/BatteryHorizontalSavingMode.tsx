import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryHorizontalSavingMode = (
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
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M22 10v4M11 9v6m3-3H8'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalSavingMode);
export default ForwardRef;

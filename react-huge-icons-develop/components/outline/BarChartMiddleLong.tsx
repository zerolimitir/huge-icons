import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartMiddleLong = (
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
        <rect width={4} height={18} x={10} y={3} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={4} height={13} x={2} y={8} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={4} height={13} x={18} y={8} stroke='currentColor' strokeWidth={1.5} rx={2} />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleLong);
export default ForwardRef;

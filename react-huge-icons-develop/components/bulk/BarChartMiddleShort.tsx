import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartMiddleShort = (
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
        <path fill='currentColor' d='M2 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Z' opacity={0.4} />
        <rect width={4} height={13} x={10} y={8} fill='currentColor' rx={2} />
        <path fill='currentColor' d='M18 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0V5Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleShort);
export default ForwardRef;

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
        <rect width={4} height={18} x={10} y={3} fill='currentColor' rx={2} />
        <path
            fill='currentColor'
            d='M2 10a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Zm16 0a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0v-9Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleLong);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTablet = (
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
            width={20}
            height={16}
            x={20}
            y={2}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={4}
            transform='rotate(90 20 2)'
        />
        <circle cx={12} cy={19} r={1} fill='currentColor' transform='rotate(90 12 19)' />
    </svg>
);
const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;

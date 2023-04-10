import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadHorizontal = (
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
            height={14}
            x={2}
            y={5}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={4}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12.5 12h-1m6.5 0h-1M7 12H6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadHorizontal);
export default ForwardRef;

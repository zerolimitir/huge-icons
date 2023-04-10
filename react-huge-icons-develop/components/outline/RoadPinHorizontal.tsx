import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadPinHorizontal = (
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
        <circle cx={12} cy={4} r={2} stroke='currentColor' strokeWidth={1.5} />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M12 12V6' />
        <rect
            width={20}
            height={14}
            x={2}
            y={8}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={4}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12.5 15h-1m5.5 0h-1m-8 0H7'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPinHorizontal);
export default ForwardRef;

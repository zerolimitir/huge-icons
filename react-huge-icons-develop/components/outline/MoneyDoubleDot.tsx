import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyDoubleDot = (
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
        <rect width={20} height={16} x={2} y={4} stroke='currentColor' strokeWidth={1.5} rx={4} />
        <circle
            cx={2}
            cy={2}
            r={2}
            stroke='currentColor'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 10 14)'
        />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 17 13)' />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 5 13)' />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDoubleDot);
export default ForwardRef;

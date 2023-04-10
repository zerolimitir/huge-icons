import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyProfitBelow = (
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
        <rect width={18} height={14} x={3} y={2} stroke='currentColor' strokeWidth={1.5} rx={3} />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 17 14)' />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 5 6)' />
        <circle
            cx={2}
            cy={2}
            r={2}
            stroke='currentColor'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 10 11)'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m14 20.086-1.293-1.293a1 1 0 0 0-1.414 0L10 20.086M12 22v-2.914'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyProfitBelow);
export default ForwardRef;

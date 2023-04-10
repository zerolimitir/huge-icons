import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCommunity = (
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
        <circle cx={6} cy={4} r={2} stroke='currentColor' strokeWidth={1.5} />
        <ellipse cx={6} cy={8} stroke='currentColor' strokeWidth={1.5} rx={3} ry={2} />
        <circle cx={18} cy={16} r={2} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M22 12c0-5.523-4.477-10-10-10m0 20C6.477 22 2 17.523 2 12'
        />
        <ellipse cx={18} cy={20} stroke='currentColor' strokeWidth={1.5} rx={3} ry={2} />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCommunity);
export default ForwardRef;

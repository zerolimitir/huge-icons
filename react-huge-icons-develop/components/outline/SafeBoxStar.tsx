import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSafeBoxStar = (
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
        <rect width={20} height={20} x={2} y={2} stroke='currentColor' strokeWidth={1.5} rx={4} />
        <circle
            cx={4}
            cy={4}
            r={4}
            stroke='currentColor'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 8 16)'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 8V6m0 12v-2m3.598-6.5 1.732-1m-10.66 7 1.732-1m7.196 0 1.732 1m-10.66-7 1.732 1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBoxStar);
export default ForwardRef;

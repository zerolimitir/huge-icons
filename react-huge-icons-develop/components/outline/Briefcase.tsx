import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcase = (
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
        <rect width={20} height={16} x={2} y={6} stroke='currentColor' strokeWidth={1.5} rx={4} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M2 13h20'
        />
        <path fill='currentColor' d='M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;

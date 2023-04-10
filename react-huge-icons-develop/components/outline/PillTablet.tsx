import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPillTablet = (
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
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z'
        />
        <circle cx={8} cy={6} r={1} fill='currentColor' />
        <circle cx={8} cy={12} r={1} fill='currentColor' />
        <circle cx={8} cy={18} r={1} fill='currentColor' />
        <circle cx={16} cy={6} r={1} fill='currentColor' />
        <circle cx={16} cy={12} r={1} fill='currentColor' />
        <circle cx={16} cy={18} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 7v10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPillTablet);
export default ForwardRef;

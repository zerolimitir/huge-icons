import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserMinus = (
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
        <ellipse
            cx={10}
            cy={17.5}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={7}
            ry={3.5}
        />
        <circle
            cx={10}
            cy={7}
            r={4}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M21 11h-4' />
    </svg>
);
const ForwardRef = forwardRef(SvgUserMinus);
export default ForwardRef;

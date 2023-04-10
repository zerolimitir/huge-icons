import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAboutPhone = (
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
            width={14}
            height={20}
            x={5}
            y={2}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={3}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M11 19h2M12 7v4'
        />
        <circle cx={12} cy={14} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgAboutPhone);
export default ForwardRef;

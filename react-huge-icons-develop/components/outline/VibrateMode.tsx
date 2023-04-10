import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVibrateMode = (
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
            width={8}
            height={14}
            x={8}
            y={5}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            rx={2}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M19 10v4m3-5v6M5 14v-4m-3 5V9'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVibrateMode);
export default ForwardRef;

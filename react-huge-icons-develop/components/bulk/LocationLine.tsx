import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationLine = (
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
            fill='currentColor'
            d='M19.5 9.5c0 3.927-4.875 9.5-7.5 9.5s-7.5-5.961-7.5-9.889C4.5 5 8.134 2 12 2s7.5 3 7.5 7.5Z'
            opacity={0.4}
        />
        <circle cx={12} cy={9} r={3} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationLine);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoomText = (
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
            fillRule='evenodd'
            d='M18.97 16.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <circle cx={16} cy={14} r={6} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-5A.75.75 0 0 1 2 8.25h5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9Zm0-5A.75.75 0 0 1 2 3.25h13a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomText);
export default ForwardRef;

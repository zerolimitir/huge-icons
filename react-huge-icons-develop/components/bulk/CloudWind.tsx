import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWind = (
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
            d='M2 9a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 9Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.25 13a.75.75 0 0 1 .75-.75h.5a2.25 2.25 0 0 1 0 4.5H4a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 0 0-1.5H11a.75.75 0 0 1-.75-.75Zm7 9c0 .414.336.75.75.75h.5a2.25 2.25 0 0 0 0-4.5H12a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 1 0 1.5H18a.75.75 0 0 0-.75.75Zm-11-3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWind);
export default ForwardRef;

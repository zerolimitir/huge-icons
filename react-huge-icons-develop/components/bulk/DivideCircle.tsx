import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDivideCircle = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            d='M13.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDivideCircle);
export default ForwardRef;

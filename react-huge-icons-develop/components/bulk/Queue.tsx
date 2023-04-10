import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgQueue = (
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
            d='M13.25 6a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm-11 10a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <g fill='currentColor' opacity={0.4}>
            <path d='m9.422 9.789-3.528 1.764A2 2 0 0 1 3 9.764V6.236a2 2 0 0 1 2.894-1.789l3.528 1.764c1.474.737 1.474 2.84 0 3.578Z' />
            <path
                fillRule='evenodd'
                d='M13.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm-11 10a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
            />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgQueue);
export default ForwardRef;

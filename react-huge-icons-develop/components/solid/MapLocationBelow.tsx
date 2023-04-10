import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationBelow = (
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
            d='M17 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 .49.095 1.027.261 1.578C13.034 19.133 15.355 22 17 22Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M3.468 4.101C4.695 3.251 6.481 2.195 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v6.652a6.5 6.5 0 0 0-11.489 4.504c-.735-.413-1.539-.674-2.511-.565-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872V7.059c0-1.17.507-2.29 1.468-2.958Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationBelow);
export default ForwardRef;

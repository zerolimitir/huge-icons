import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpost = (
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
            d='M10.5 10H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 4H10.5v6Zm3 0h5.086a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H13.5v-6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpost);
export default ForwardRef;

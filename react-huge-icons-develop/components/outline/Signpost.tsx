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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9.5 12H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 6H9.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm5 0h4.086a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H14.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M10.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpost);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignpostBig = (
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
            d='M17 11.5H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 .707-.293H17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-10 3h11.586a1 1 0 0 1 .707.293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 5.5V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.5m3 6v3m-3-3v3m3 6V22a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostBig);
export default ForwardRef;

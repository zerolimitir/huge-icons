import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEarnings = (
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
            d='M18 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-8-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.25 4a.75.75 0 0 1 .75-.75h4A2.75 2.75 0 0 1 20.75 6v4a.75.75 0 0 1-1.5 0V6c0-.06-.004-.12-.012-.177L4.53 20.53a.75.75 0 0 1-1.06-1.06L18.177 4.762A1.261 1.261 0 0 0 18 4.75h-4a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEarnings);
export default ForwardRef;

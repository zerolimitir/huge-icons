import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryTime = (
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
            d='M10 3H6a4 4 0 0 0-4 4v8a4.002 4.002 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2h-6Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
        />
        <path
            fill='currentColor'
            d='M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8 6.75a.75.75 0 0 1 .75.75v2.75h1.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75V7.5A.75.75 0 0 1 8 6.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryTime);
export default ForwardRef;

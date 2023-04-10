import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFastDelivery = (
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
            d='M9.5 3.062H6a4 4 0 0 0-4 4v8c0 1.306.626 2.465 1.593 3.195a3.5 3.5 0 0 1 6.907.805h3v-12a4 4 0 0 0-4-4ZM8 7.312a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H8Zm-2.75 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm16.196 6.382A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFastDelivery);
export default ForwardRef;

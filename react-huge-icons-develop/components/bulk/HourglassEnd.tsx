import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHourglassEnd = (
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
            d='M5.6 6.8C4.117 4.822 5.528 2 8 2h8c2.472 0 3.883 2.822 2.4 4.8l-2.55 3.4a3 3 0 0 0 0 3.6l2.55 3.4c1.483 1.978.072 4.8-2.4 4.8H8c-2.472 0-3.883-2.822-2.4-4.8l2.55-3.4a3 3 0 0 0 0-3.6L5.6 6.8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11.22 14.976a1 1 0 0 1 1.56 0l1.92 2.4A1 1 0 0 1 13.92 19h-3.84a1 1 0 0 1-.78-1.625l1.92-2.4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglassEnd);
export default ForwardRef;

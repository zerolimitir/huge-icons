import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckMarkCircle = (
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
        <circle
            cx={12}
            cy={12}
            r={10}
            fill='currentColor'
            opacity={0.4}
            transform='rotate(-180 12 12)'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.502 2.443a.75.75 0 0 1 .056 1.059l-8.738 9.597a2.75 2.75 0 0 1-3.762.308l-3.526-2.821a.75.75 0 0 1 .937-1.172l3.526 2.822a1.25 1.25 0 0 0 1.71-.14l8.738-9.598a.75.75 0 0 1 1.059-.055Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkCircle);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHitTarget = (
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
            d='m18.146 4.793-2.308 2.308a6.75 6.75 0 1 0 1.84 2.282l2.382-2.382a9.953 9.953 0 0 1 1.565 5.374c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a9.96 9.96 0 0 1 6.52 2.418Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M14.77 8.17a5.25 5.25 0 1 0 1.77 2.352l-2.185 2.183a2.75 2.75 0 1 1-1.39-2.732L14.77 8.17Z'
        />
        <path
            fill='currentColor'
            d='m22.155 2.905-9.293 9.293a1.25 1.25 0 1 1-1.06-1.06l9.293-9.293a.75.75 0 0 1 1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHitTarget);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageCircle = (
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
            d='M22 12c0 .64-.06 1.267-.175 1.874C20.948 18.5 16.882 22 12 22c-4.778 0-8.773-3.35-9.764-7.83A10.036 10.036 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m9.952 15.843 4.096-3.686a4 4 0 0 1 5.013-.273l2.764 1.99C20.948 18.5 16.882 22 12 22c-4.778 0-8.773-3.35-9.764-7.83l2.703 1.946a4 4 0 0 0 5.013-.273Z'
        />
        <circle cx={9} cy={9} r={2} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgImageCircle);
export default ForwardRef;

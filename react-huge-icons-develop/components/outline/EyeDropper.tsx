import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeDropper = (
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
            strokeWidth={1.5}
            d='m14.486 5.536 2.12-2.122a2 2 0 0 1 2.83 0v0a2 2 0 0 1 0 2.829l-2.122 2.121'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m14.485 5.536-5.9 5.9a4 4 0 0 0-1.17 2.828v1.171h1.17a4 4 0 0 0 2.83-1.171l5.899-5.9'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m13.071 4.121 5.657 5.657'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7 20.5c0 1.105-.672 1.5-1.5 1.5S4 21.605 4 20.5 5.5 18 5.5 18 7 19.395 7 20.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDropper);
export default ForwardRef;

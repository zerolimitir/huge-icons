import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRedoCircle = (
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
            d='m15.465 10 .185.727a.75.75 0 0 0 .565-.727h-.75Zm.75-2.5a.75.75 0 0 0-1.5 0h1.5Zm-2.9 2.273a.75.75 0 1 0 .37 1.454l-.37-1.454Zm3.285 3.414a.75.75 0 1 0-1.452-.374l1.452.374ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75c1.202 0 2.253.652 2.816 1.626l1.298-.752A4.749 4.749 0 0 0 12 7.25v1.5ZM16.215 10V7.5h-1.5V10h1.5Zm-.935-.727-1.965.5.37 1.454 1.965-.5-.37-1.454Zm-.132 3.54A3.252 3.252 0 0 1 12 15.25v1.5a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedoCircle);
export default ForwardRef;

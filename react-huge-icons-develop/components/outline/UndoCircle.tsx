import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUndoCircle = (
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
            d='m8.41 10-.186.727A.75.75 0 0 1 7.66 10h.75Zm-.75-2.5a.75.75 0 0 1 1.5 0h-1.5Zm2.899 2.273a.75.75 0 0 1-.37 1.454l.37-1.454Zm-3.285 3.414a.75.75 0 1 1 1.452-.374l-1.452.374Zm4.6 2.063a3.25 3.25 0 0 0 3.25-3.25h1.5a4.75 4.75 0 0 1-4.75 4.75v-1.5Zm3.25-3.25a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 0 1 4.75 4.75h-1.5Zm-3.25-3.25a3.248 3.248 0 0 0-2.816 1.626L7.76 9.623a4.748 4.748 0 0 1 4.114-2.374v1.5ZM7.659 10V7.5h1.5V10h-1.5Zm.935-.727 1.965.5-.37 1.454-1.965-.5.37-1.454Zm.132 3.54a3.252 3.252 0 0 0 3.148 2.437v1.5a4.752 4.752 0 0 1-4.6-3.563l1.452-.374Z'
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
const ForwardRef = forwardRef(SvgUndoCircle);
export default ForwardRef;

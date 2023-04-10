import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapGpsBelow = (
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
            strokeWidth={1.5}
            d='M8 2.025c-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894m0-12.76c3.318-.372 4.682 3.561 8 3.19m-8-3.19v12.76m8-9.57c1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-.625.472-1.593 1.152-2.647 1.704M16 5.215v7.672m-8 1.898a3.855 3.855 0 0 1 2.06.337'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m13.527 17.684-2.894-.965c-.84-.28-.963-1.333-.371-1.841a1.1 1.1 0 0 1 .37-.208l7.839-2.613a1.08 1.08 0 0 1 1.366 1.367l-1.377 4.131-1.236 3.707c-.328.984-1.72.984-2.049 0l-.965-2.895a1.08 1.08 0 0 0-.683-.683Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGpsBelow);
export default ForwardRef;

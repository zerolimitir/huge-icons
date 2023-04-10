import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClouds = (
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
            d='M14 13.143c-.436 0-.856.068-1.25.195C11.897 11.375 9.912 10 7.6 10c-.555 0-1.09.08-1.597.227A3.935 3.935 0 0 1 6 10.07c0-2.17 1.79-3.928 4-3.928.436 0 .856.068 1.25.195C12.103 4.375 14.088 3 16.4 3 19.493 3 22 5.462 22 8.5c0 3.007-2.457 5.45-5.507 5.5A4.029 4.029 0 0 0 14 13.142Z'
        />
        <path
            fill='currentColor'
            d='M2 15.5C2 18.538 4.507 21 7.6 21H14c2.21 0 4-1.759 4-3.929A3.896 3.896 0 0 0 16.493 14 4.029 4.029 0 0 0 14 13.143c-.436 0-.856.068-1.25.195C11.897 11.375 9.912 10 7.6 10c-.555 0-1.09.08-1.597.227C3.688 10.902 2 13.007 2 15.5Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClouds);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxTwoSide = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m20 7-8 4-8-4'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m18.625 4.668-5-2.31a3.863 3.863 0 0 0-3.25 0l-5 2.31C3.931 5.335 3 6.823 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31a3.863 3.863 0 0 0 3.25 0l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-1.643-.93-3.131-2.375-3.798Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m8 4 9 5v10.5M12 11v11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxTwoSide);
export default ForwardRef;

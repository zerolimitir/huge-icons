import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapSmall = (
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
        <path stroke='currentColor' strokeWidth={1.5} d='M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M18 9c0 3.314-4 8-6 8s-6-4.686-6-8a6 6 0 1 1 12 0Z'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M15 15h1.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 16.44A4 4 0 0 1 7.873 15H9'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapSmall);
export default ForwardRef;

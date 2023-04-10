import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapBig = (
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
            d='M19 8.857c0 2.285-1.698 5.14-3.558 7.046C14.22 17.157 12.926 18 12 18c-.926 0-2.22-.843-3.442-2.097C6.698 13.997 5 11.142 5 8.857 5 5.07 8.134 2 12 2s7 3.07 7 6.857Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M15.154 16.19C18.57 16.614 21 17.712 21 19c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.287 2.431-2.385 5.846-2.81'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapBig);
export default ForwardRef;

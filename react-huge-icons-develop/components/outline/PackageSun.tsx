import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageSun = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M11 12h2' />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 16V9.495a2 2 0 0 0-.586-1.414L15.92 6.586A2 2 0 0 0 14.505 6h-5.01a2 2 0 0 0-1.414.586L6.586 8.08A2 2 0 0 0 6 9.495V16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='square'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7 9h10'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 2v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1M3 12H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageSun);
export default ForwardRef;

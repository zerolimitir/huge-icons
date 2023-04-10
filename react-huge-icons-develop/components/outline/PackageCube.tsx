import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageCube = (
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
            d='M17.5 9.5 12 12 6.5 9.5'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6 10.023v4.954a2 2 0 0 0 1.17 1.82l4 1.824a2 2 0 0 0 1.66 0l4-1.824a2 2 0 0 0 1.17-1.82v-4.954a2 2 0 0 0-1.17-1.82ZM12 12v6m0-16v1m0 18v1m8.071-18.071-.707.707M4.636 19.364l-.707.707M22 12h-1M3 12H2m18.071 8.071-.707-.707M4.636 4.636l-.707-.707'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageCube);
export default ForwardRef;

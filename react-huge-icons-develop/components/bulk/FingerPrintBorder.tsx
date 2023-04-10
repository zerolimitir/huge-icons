import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFingerPrintBorder = (
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
            fillRule='evenodd'
            d='M6 2.75A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0V6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6ZM15.25 2a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75ZM2 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13 9.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13 7.75A2.25 2.25 0 0 0 10.75 10v2.657c0 1.7-.675 3.329-1.877 4.53l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a4.907 4.907 0 0 0 1.437-3.47V10a3.75 3.75 0 1 1 7.5 0v2.657c0 1.7-.675 3.329-1.877 4.53l-.343.343a.75.75 0 1 1-1.06-1.06l.343-.343a4.907 4.907 0 0 0 1.437-3.47V10A2.25 2.25 0 0 0 13 7.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFingerPrintBorder);
export default ForwardRef;

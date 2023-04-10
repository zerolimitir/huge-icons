import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFingerPrint = (
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
            d='M12 10v4m-5.5 7 .243-.243A6 6 0 0 0 8.5 16.515V10A3.5 3.5 0 0 1 12 6.5v0a3.5 3.5 0 0 1 3.5 3.5v6.515a6 6 0 0 1-1.757 4.242L13.5 21'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M5 17v-7a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v7'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFingerPrint);
export default ForwardRef;

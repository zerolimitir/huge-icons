import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgQrScan = (
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
            strokeWidth={1.5}
            d='M5 8V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m0 8v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-3-4h20'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQrScan);
export default ForwardRef;

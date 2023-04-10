import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBluetoothOff = (
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
        <circle cx={16} cy={12} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m4 8 10.886 7.257a1 1 0 0 1 .085 1.6l-3.33 2.776A1 1 0 0 1 10 18.865V5.135a1 1 0 0 1 1.64-.768l3.331 2.776a1 1 0 0 1-.085 1.6L4 16m14.775-7.28A4.98 4.98 0 0 1 20 12c0 1.28-.481 2.448-1.273 3.333'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetoothOff);
export default ForwardRef;

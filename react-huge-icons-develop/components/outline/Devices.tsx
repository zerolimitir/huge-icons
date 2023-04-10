import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDevices = (
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
        <rect width={8} height={13} x={14} y={7} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M20 4H6a2 2 0 0 0-2 2v11h7m0 0H3.5A1.5 1.5 0 0 0 2 18.5v0A1.5 1.5 0 0 0 3.5 20H11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDevices);
export default ForwardRef;

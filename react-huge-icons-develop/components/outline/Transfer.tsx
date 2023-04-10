import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTransfer = (
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
        <rect width={10} height={8} x={2} y={2} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={10} height={8} x={12} y={14} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m20.414 4 1.293 1.293a1 1 0 0 1 0 1.414L20.414 8M16 6h5.414M3.586 16l-1.293 1.293a1 1 0 0 0 0 1.414L3.586 20M8 18H2.586'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransfer);
export default ForwardRef;

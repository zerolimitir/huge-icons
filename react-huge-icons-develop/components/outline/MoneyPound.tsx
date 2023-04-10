import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyPound = (
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
        <rect width={20} height={16} x={2} y={4} stroke='currentColor' strokeWidth={1.5} rx={4} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9 12h4m1-2.118v-.497C14 8.62 13.38 8 12.615 8v0c-.764 0-1.384.62-1.384 1.385v.57a6.16 6.16 0 0 1-1.485 4.01v0c-.686.8-.118 2.035.934 2.035H14'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyPound);
export default ForwardRef;

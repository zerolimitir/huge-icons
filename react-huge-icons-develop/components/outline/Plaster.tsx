import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlaster = (
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
        <rect
            width={4}
            height={5.523}
            x={12.538}
            y={8.633}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={1}
            transform='rotate(45 12.538 8.633)'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 1 1-5.628-5.628l10.04-10.04Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m16.243 6.343 1.414 1.414M6.343 16.243l1.414 1.414'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaster);
export default ForwardRef;

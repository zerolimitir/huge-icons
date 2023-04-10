import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCoin = (
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
            d='M18 4a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4h8Zm0 8a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4h8Z'
            opacity={0.4}
        />
        <rect
            width={4}
            height={12}
            x={16}
            y={8}
            fill='currentColor'
            rx={2}
            transform='rotate(90 16 8)'
        />
        <rect
            width={4}
            height={12}
            x={17}
            y={16}
            fill='currentColor'
            rx={2}
            transform='rotate(90 17 16)'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCoin);
export default ForwardRef;

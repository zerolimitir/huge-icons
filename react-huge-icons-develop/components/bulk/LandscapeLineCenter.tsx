import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLandscapeLineCenter = (
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
            width={10}
            height={18}
            x={21}
            y={7}
            fill='currentColor'
            opacity={0.4}
            rx={3}
            transform='rotate(90 21 7)'
        />
        <path
            fill='currentColor'
            d='M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2h10ZM7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H7Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeLineCenter);
export default ForwardRef;

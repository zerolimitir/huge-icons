import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMasterCard = (
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
            width={18}
            height={20}
            x={22}
            y={3}
            stroke='currentColor'
            strokeWidth={1.5}
            rx={4}
            transform='rotate(90 22 3)'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M12 9.764c-.614.55-1 1.348-1 2.236a2.99 2.99 0 0 0 1 2.236m0-4.472a3 3 0 1 1 0 4.472m0-4.472a3 3 0 1 0 0 4.472'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMasterCard);
export default ForwardRef;

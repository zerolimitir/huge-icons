import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickRight = (
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
            d='M5.519 9h8V7.204a1 1 0 0 1 1.658-.753l4.621 4.044a2 2 0 0 1 0 3.01l-4.62 4.044c-.648.565-1.66.106-1.66-.753V15h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickRight);
export default ForwardRef;

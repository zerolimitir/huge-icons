import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAddTo = (
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
            fillRule='evenodd'
            d='M4 13.5V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5.5h-4.5a2.5 2.5 0 0 1-2-1l-1.5-2-1.5 2a2.5 2.5 0 0 1-2 1H4Zm7.25-9.31-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0L14.53 4.53a.75.75 0 0 0-1.06-1.06l-.72.72V2a.75.75 0 0 0-1.5 0v2.19Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M4.55 8.04h14.913a1 1 0 0 1 .797.396l1.456 1.924a1 1 0 0 1-.797 1.603h-5.39a1 1 0 0 1-.79-.388L12.005 8.04l-2.728 3.534a1 1 0 0 1-.791.39H3.043a1 1 0 0 1-.787-1.617l1.506-1.924a1 1 0 0 1 .788-.383Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAddTo);
export default ForwardRef;

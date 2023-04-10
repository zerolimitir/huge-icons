import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTag = (
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
            d='M5 8.66c0-1.183.51-2.307 1.397-3.078l3-2.606a3.96 3.96 0 0 1 5.206 0l3 2.606A4.078 4.078 0 0 1 19 8.661v9.285C19 20.185 17.21 22 15 22H9c-2.21 0-4-1.815-4-4.054V8.66Z'
            opacity={0.4}
        />
        <circle cx={12} cy={8} r={2} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;

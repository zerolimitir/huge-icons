import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHotspot = (
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
        <circle
            cx={12}
            cy={14}
            r={2}
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M19.071 21.071A9.97 9.97 0 0 0 22 14c0-5.523-4.477-10-10-10S2 8.477 2 14a9.969 9.969 0 0 0 2.929 7.071m11.314-2.828a6 6 0 1 0-8.485 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHotspot);
export default ForwardRef;

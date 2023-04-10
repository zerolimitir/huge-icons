import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifi = (
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
        <circle cx={12} cy={19} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M21.445 7.666A13.95 13.95 0 0 0 12 4a13.95 13.95 0 0 0-9.445 3.666m15.684 3.847A8.97 8.97 0 0 0 12 9a8.97 8.97 0 0 0-6.239 2.513m9.259 3.864A3.991 3.991 0 0 0 12 14a3.99 3.99 0 0 0-3.02 1.377'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingLocationBox = (
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
        <circle cx={10} cy={8} r={2} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.002 14c.603-1.32.998-2.687.998-4 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.899 4.476 9.295 1.341 1.602 3.707 1.602 5.048 0 .156-.187.315-.38.476-.582M16.002 14H15a2 2 0 0 0-2 2v2.713M16.002 14H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.287'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 16h-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingLocationBox);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationMinus = (
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
        <circle cx={12} cy={11} r={5} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M14 11h-4' />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMinus);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFormatClear = (
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
            d='m12.65 5.75-.48 3.36-1.325-1.326.29-2.034H8.811l-1.5-1.5h10.688a.75.75 0 0 1 0 1.5H12.65Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.53 4.47a.75.75 0 0 0-1.06 1.06l5.86 5.86-1.072 7.504a.75.75 0 1 0 1.484.212l.913-6.39 6.815 6.814a.75.75 0 1 0 1.06-1.06l-14-14Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatClear);
export default ForwardRef;

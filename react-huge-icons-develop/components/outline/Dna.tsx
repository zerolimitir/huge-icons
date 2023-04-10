import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDna = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M6.341 2C7.165 4.33 9.387 6 12 6a6 6 0 0 1 0 12 6.002 6.002 0 0 0-5.659 4'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M18 2a6.003 6.003 0 0 1-5.659 4 6 6 0 1 0 0 12A6.003 6.003 0 0 1 18 22M7 10h10M7 14h10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDna);
export default ForwardRef;

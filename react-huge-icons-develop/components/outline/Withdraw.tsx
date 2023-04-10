import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWithdraw = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M6 11a4 4 0 1 1 0-8h12a4 4 0 0 1 0 8m0-4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m14 15-1.293 1.293a1 1 0 0 1-1.414 0L10 15m2-4v5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWithdraw);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinterestCircle = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M6 20a9.985 9.985 0 0 1-4-8C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.99 9.99 0 0 1-3.131-.5l2.631-10'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M10.172 16.655A5 5 0 1 0 7.668 14.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinterestCircle);
export default ForwardRef;

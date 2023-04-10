import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPyramid = (
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
            strokeWidth={1.5}
            d='M21.594 16.5 14.648 4.516c-1.17-2.021-4.125-2.021-5.296 0L2.406 16.5c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='square'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7.5 9h9M4 15h16'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPyramid);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartArrowUp = (
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
            d='M2.5 1.75a.75.75 0 0 0-1.5 0v16a4.75 4.75 0 0 0 4.75 4.75h16a.75.75 0 0 0 0-1.5h-16a3.25 3.25 0 0 1-3.25-3.25v-16Zm14 7a.75.75 0 0 1 .75-.75h1.5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 1-1.5 0v-.69l-2.305 2.306a2.75 2.75 0 0 1-3.89 0l-1.171-1.171a1.25 1.25 0 0 0-1.768 0L7.28 14.28a.75.75 0 0 1-1.06-1.06l2.585-2.586a2.75 2.75 0 0 1 3.89 0l1.171 1.171a1.25 1.25 0 0 0 1.768 0L17.939 9.5h-.689a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowUp);
export default ForwardRef;

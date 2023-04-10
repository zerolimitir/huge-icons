import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartArrowDown = (
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
            d='M2 1.25a.75.75 0 0 1 .75.75v16A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V2A.75.75 0 0 1 2 1.25Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.47 9.47a.75.75 0 0 1 1.06 0l2.586 2.585a1.25 1.25 0 0 0 1.768 0l1.171-1.171a2.75 2.75 0 0 1 3.89 0l2.305 2.305V12.5a.75.75 0 0 1 1.5 0V14A1.75 1.75 0 0 1 19 15.75h-1.5a.75.75 0 0 1 0-1.5h.69l-2.306-2.306a1.25 1.25 0 0 0-1.768 0l-1.171 1.172a2.75 2.75 0 0 1-3.89 0L6.47 10.53a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowDown);
export default ForwardRef;

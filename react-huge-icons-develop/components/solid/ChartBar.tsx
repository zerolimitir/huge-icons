import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartBar = (
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
            d='M2.75 2a.75.75 0 0 0-1.5 0v16A4.75 4.75 0 0 0 6 22.75h16a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V2Zm5 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6ZM12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM17.75 9a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartBar);
export default ForwardRef;

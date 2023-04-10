import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowUp = (
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
            d='M19 1.25a.75.75 0 1 0 0 1.5h1.113c-3.745 2.986-6.594 4.877-9.303 6.134-2.798 1.297-5.481 1.935-8.905 2.372a.75.75 0 0 0 .19 1.488c3.518-.45 6.364-1.117 9.346-2.5 2.915-1.352 5.926-3.372 9.809-6.483V5a.75.75 0 1 0 1.5 0V3A1.75 1.75 0 0 0 21 1.25h-2ZM22 10a2 2 0 1 0-4 0v10a2 2 0 1 0 4 0V10ZM6 18a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Zm6-6a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowUp);
export default ForwardRef;

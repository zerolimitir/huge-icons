import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatch = (
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
            d='M20.5 13.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z'
        />
        <path
            fill='currentColor'
            d='M14.796 3.136a.75.75 0 1 0 .408-1.444l-.408 1.444Zm-6-1.444a.75.75 0 1 0 .408 1.444l-.408-1.444ZM12 2.75c.97 0 1.908.135 2.796.386l.408-1.444A11.758 11.758 0 0 0 12 1.25v1.5Zm-2.796.386A10.258 10.258 0 0 1 12 2.75v-1.5c-1.11 0-2.185.154-3.204.442l.408 1.444Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 12V9'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatch);
export default ForwardRef;

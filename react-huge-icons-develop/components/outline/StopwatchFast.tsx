import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchFast = (
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
            d='M19.75 13.5a.75.75 0 0 0 1.5 0h-1.5Zm.75 9.25a.75.75 0 0 0 0-1.5v1.5Zm-8.5-1.5a7.75 7.75 0 0 1-7.75-7.75h-1.5A9.25 9.25 0 0 0 12 22.75v-1.5ZM4.25 13.5A7.75 7.75 0 0 1 12 5.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5ZM12 5.75a7.75 7.75 0 0 1 7.75 7.75h1.5A9.25 9.25 0 0 0 12 4.25v1.5Zm0 17h8.5v-1.5H12v1.5Zm2.796-19.614a.75.75 0 1 0 .408-1.444l-.408 1.444Zm-6-1.444a.75.75 0 1 0 .408 1.444l-.408-1.444ZM12 2.75c.97 0 1.908.135 2.796.386l.408-1.444A11.758 11.758 0 0 0 12 1.25v1.5Zm-2.796.386A10.258 10.258 0 0 1 12 2.75v-1.5c-1.11 0-2.185.154-3.204.442l.408 1.444Z'
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
            d='M12 12V9m4 10h4.5M18 16h2.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatchFast);
export default ForwardRef;

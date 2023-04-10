import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchCheck = (
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
            d='M12 22.75a.75.75 0 0 0 0-1.5v1.5Zm7.63-7.882a.75.75 0 0 0 1.477.264l-1.477-.264ZM12 21.25a7.75 7.75 0 0 1-7.75-7.75h-1.5A9.25 9.25 0 0 0 12 22.75v-1.5ZM4.25 13.5A7.75 7.75 0 0 1 12 5.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5ZM12 5.75a7.75 7.75 0 0 1 7.75 7.75h1.5A9.25 9.25 0 0 0 12 4.25v1.5Zm7.75 7.75c0 .467-.041.925-.12 1.368l1.477.264a9.31 9.31 0 0 0 .143-1.632h-1.5ZM14.796 3.136a.75.75 0 1 0 .408-1.444l-.408 1.444Zm-6-1.444a.75.75 0 1 0 .408 1.444l-.408-1.444ZM12 2.75c.97 0 1.908.135 2.796.386l.408-1.444A11.758 11.758 0 0 0 12 1.25v1.5Zm-2.796.386A10.258 10.258 0 0 1 12 2.75v-1.5c-1.11 0-2.185.154-3.204.442l.408 1.444Zm5.265 16.278a.75.75 0 0 0-.938 1.172l.938-1.172Zm6.095-.92a.75.75 0 1 0-1.128-.988l1.128.988Zm-4.811 2.908-.469.586.469-.586Zm-2.222-.816 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.164 1.188 2.87-3.28-1.13-.988-2.87 3.28 1.13.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.13-.988a.25.25 0 0 1-.344.03l-.937 1.172Z'
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
const ForwardRef = forwardRef(SvgStopwatchCheck);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchDelete = (
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
            d='M19.63 14.868a.75.75 0 0 0 1.477.264l-1.477-.264Zm-6.543 7.819a.75.75 0 1 0-.174-1.49l.174 1.49ZM12 21.25a7.75 7.75 0 0 1-7.75-7.75h-1.5A9.25 9.25 0 0 0 12 22.75v-1.5ZM4.25 13.5A7.75 7.75 0 0 1 12 5.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5ZM12 5.75a7.75 7.75 0 0 1 7.75 7.75h1.5A9.25 9.25 0 0 0 12 4.25v1.5Zm7.75 7.75c0 .467-.041.925-.12 1.368l1.477.264a9.31 9.31 0 0 0 .143-1.632h-1.5Zm-6.837 7.697a7.85 7.85 0 0 1-.913.053v1.5c.367 0 .73-.021 1.087-.063l-.174-1.49Zm1.883-18.061a.75.75 0 1 0 .408-1.444l-.408 1.444Zm-6-1.444a.75.75 0 1 0 .408 1.444l-.408-1.444ZM12 2.75c.97 0 1.908.135 2.796.386l.408-1.444A11.758 11.758 0 0 0 12 1.25v1.5Zm-2.796.386A10.258 10.258 0 0 1 12 2.75v-1.5c-1.11 0-2.185.154-3.204.442l.408 1.444ZM20.53 18.288a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm-5.303 3.182a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 0 0-1.061 1.06l1.06-1.06Zm3.182 0-4.243 4.243 1.06 1.06 4.243-4.242-1.06-1.061Zm1.06 4.243-4.242-4.243-1.061 1.06 4.243 4.243 1.06-1.06Z'
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
const ForwardRef = forwardRef(SvgStopwatchDelete);
export default ForwardRef;

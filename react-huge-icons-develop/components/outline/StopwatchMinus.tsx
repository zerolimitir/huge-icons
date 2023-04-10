import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStopwatchMinus = (
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
            d='M19.41 15.78a.75.75 0 1 0 1.433.44l-1.433-.44Zm-5.234 6.713a.75.75 0 0 0-.352-1.459l.352 1.459ZM12 21.25a7.75 7.75 0 0 1-7.75-7.75h-1.5A9.25 9.25 0 0 0 12 22.75v-1.5ZM4.25 13.5A7.75 7.75 0 0 1 12 5.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5ZM12 5.75a7.75 7.75 0 0 1 7.75 7.75h1.5A9.25 9.25 0 0 0 12 4.25v1.5Zm7.75 7.75c0 .795-.12 1.56-.34 2.28l1.433.44a9.247 9.247 0 0 0 .407-2.72h-1.5Zm-5.926 7.534A7.773 7.773 0 0 1 12 21.25v1.5c.749 0 1.477-.09 2.176-.258l-.352-1.458Zm.972-17.898a.75.75 0 1 0 .408-1.444l-.408 1.444Zm-6-1.444a.75.75 0 1 0 .408 1.444l-.408-1.444ZM12 2.75c.97 0 1.908.135 2.796.386l.408-1.444A11.758 11.758 0 0 0 12 1.25v1.5Zm-2.796.386A10.258 10.258 0 0 1 12 2.75v-1.5c-1.11 0-2.185.154-3.204.442l.408 1.444Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M20 19h-6'
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
const ForwardRef = forwardRef(SvgStopwatchMinus);
export default ForwardRef;

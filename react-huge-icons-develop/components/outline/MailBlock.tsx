import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailBlock = (
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
        <circle cx={18} cy={6} r={4} stroke='currentColor' strokeWidth={1.5} />
        <path stroke='currentColor' strokeWidth={1.5} d='m15 3 6 6' />
        <path
            fill='currentColor'
            d='M6.2 12.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm1.75 2.25-.45.6.45-.6Zm3.6 0 .45.6-.45-.6Zm2.65-1.05a.75.75 0 1 0-.9-1.2l.9 1.2Zm-8.9 0 2.2 1.65.9-1.2-2.2-1.65-.9 1.2Zm6.7 1.65 2.2-1.65-.9-1.2-2.2 1.65.9 1.2Zm-4.5 0c1.333 1 3.167 1 4.5 0l-.9-1.2c-.8.6-1.9.6-2.7 0l-.9 1.2Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.75 11.954V19A3.75 3.75 0 0 1 15 22.75H5A3.75 3.75 0 0 1 1.25 19v-8A3.75 3.75 0 0 1 5 7.25h7.13a5.93 5.93 0 0 0 .536 1.5H5A2.25 2.25 0 0 0 2.75 11v8A2.25 2.25 0 0 0 5 21.25h10A2.25 2.25 0 0 0 17.25 19v-7.046a6.067 6.067 0 0 0 1.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailBlock);
export default ForwardRef;

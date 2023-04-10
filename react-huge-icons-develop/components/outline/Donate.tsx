import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDonate = (
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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M2 8h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 13.5'
        />
        <path
            fill='currentColor'
            d='M2.335 16.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 19.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 15.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12.608 8.51 2.83 3.538a2 2 0 0 0 3.124 0l2.83-3.538A2.776 2.776 0 0 0 22 6.776v-.124A2.652 2.652 0 0 0 19.348 4h-.297c-.513 0-1.005.204-1.367.566a.967.967 0 0 1-1.368 0A1.934 1.934 0 0 0 14.95 4h-.297A2.652 2.652 0 0 0 12 6.652v.124c0 .63.214 1.242.608 1.734Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonate);
export default ForwardRef;

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
            fill='currentColor'
            d='M4 8H2v9l4.31 2.155A8 8 0 0 0 9.89 20H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156L4 8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m12.608 8.51 2.83 3.538a2 2 0 0 0 3.124 0l2.83-3.538A2.776 2.776 0 0 0 22 6.776v-.124A2.652 2.652 0 0 0 19.348 4h-.297c-.513 0-1.005.204-1.367.566a.967.967 0 0 1-1.368 0A1.934 1.934 0 0 0 14.95 4h-.297A2.652 2.652 0 0 0 12 6.652v.124c0 .63.214 1.242.608 1.734Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonate);
export default ForwardRef;

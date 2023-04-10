import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderFile = (
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
            d='M21 18v-4.375a4 4 0 0 0-4-4h-1.896a4 4 0 0 1-2.357-.768l-1.494-1.089A4 4 0 0 0 8.897 7H7a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17 9.625h-1.896a4 4 0 0 1-2.357-.768l-1.494-1.089A4 4 0 0 0 8.897 7H7c-.729 0-1.412.195-2 .535V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.16a3.982 3.982 0 0 0-2-.535Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFile);
export default ForwardRef;

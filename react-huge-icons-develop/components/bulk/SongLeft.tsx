import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSongLeft = (
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
            d='M9 4a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 4.6 9.2.75.75 0 0 1-1.2-.9 4.251 4.251 0 0 0-2.65-6.734V16A.75.75 0 0 1 9 16V4Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path fill='currentColor' d='M10.5 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.75 15.5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.75 11a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Zm0 9a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongLeft);
export default ForwardRef;

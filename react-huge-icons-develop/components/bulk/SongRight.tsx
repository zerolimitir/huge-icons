import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSongRight = (
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
            d='M16 3.75a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 4.6 9.2.75.75 0 0 1-1.2-.9 4.251 4.251 0 0 0-2.65-6.734V15.75a.75.75 0 0 1-1.5 0v-12ZM1.25 4A.75.75 0 0 1 2 3.25h11a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 8A.75.75 0 0 1 2 7.25h11a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M17.5 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongRight);
export default ForwardRef;

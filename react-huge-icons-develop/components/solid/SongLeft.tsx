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
            d='M9.25 4a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 4.6 9.2.75.75 0 0 1-1.2-.9 4.251 4.251 0 0 0-2.65-6.734V16a4.75 4.75 0 1 1-1.5-3.464V4ZM22 16.25a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5h8Zm.75-5.25a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75ZM22 20.75a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5h8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongLeft);
export default ForwardRef;

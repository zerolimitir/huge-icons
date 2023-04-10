import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlaylists = (
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
            d='M2 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm7.25-.75A.75.75 0 0 0 8.5 6v4.208A2.5 2.5 0 1 0 10 12.5V6.816A4.251 4.251 0 0 1 13.5 11a.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-5.75-5.75ZM10 22a4.001 4.001 0 0 1-3.71-2.5H14a5.5 5.5 0 0 0 5.5-5.5V6.29A4.001 4.001 0 0 1 22 10v8a4 4 0 0 1-4 4h-8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylists);
export default ForwardRef;

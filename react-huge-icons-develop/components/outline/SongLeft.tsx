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
            d='M10 4v-.75a.75.75 0 0 0-.75.75H10Zm3.4 7.55a.75.75 0 1 0 1.2.9l-1.2-.9Zm8.6 4.7a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm8-3a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 10.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM9.25 16A3.25 3.25 0 0 1 6 19.25v1.5A4.75 4.75 0 0 0 10.75 16h-1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM2.75 16A3.25 3.25 0 0 1 6 12.75v-1.5A4.75 4.75 0 0 0 1.25 16h1.5ZM6 12.75A3.25 3.25 0 0 1 9.25 16h1.5A4.75 4.75 0 0 0 6 11.25v1.5Zm4-8A4.25 4.25 0 0 1 14.25 9h1.5A5.75 5.75 0 0 0 10 3.25v1.5ZM14.25 9c0 .958-.316 1.84-.85 2.55l1.2.9A5.728 5.728 0 0 0 15.75 9h-1.5Zm-5-5v12h1.5V4h-1.5ZM22 14.75h-8v1.5h8v-1.5Zm0-4.5h-4v1.5h4v-1.5Zm0 9h-8v1.5h8v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongLeft);
export default ForwardRef;

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
            d='M10 5v-.75a.75.75 0 0 0-.75.75H10Zm4.25 5a.75.75 0 0 0 1.5 0h-1.5ZM6 2.75h8v-1.5H6v1.5ZM17.25 6v8h1.5V6h-1.5ZM14 17.25H6v1.5h8v-1.5ZM2.75 14V6h-1.5v8h1.5ZM6 17.25A3.25 3.25 0 0 1 2.75 14h-1.5A4.75 4.75 0 0 0 6 18.75v-1.5ZM17.25 14A3.25 3.25 0 0 1 14 17.25v1.5A4.75 4.75 0 0 0 18.75 14h-1.5ZM14 2.75A3.25 3.25 0 0 1 17.25 6h1.5A4.75 4.75 0 0 0 14 1.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25h-8v1.5h8v-1.5Zm-8 0A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5Zm-8-1A4.25 4.25 0 0 1 14.25 10h1.5A5.75 5.75 0 0 0 10 4.25v1.5Zm-.75 6.75a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5ZM7.5 14.25a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5ZM5.75 12.5c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25h1.5Zm1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5A3.25 3.25 0 0 0 7.5 9.25v1.5ZM9.25 5v7.5h1.5V5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylists);
export default ForwardRef;

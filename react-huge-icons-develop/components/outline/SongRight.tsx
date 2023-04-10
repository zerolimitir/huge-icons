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
            d='M2 3.25a.75.75 0 0 0 0 1.5v-1.5Zm11 1.5a.75.75 0 0 0 0-1.5v1.5ZM2 7.25a.75.75 0 0 0 0 1.5v-1.5Zm11 1.5a.75.75 0 0 0 0-1.5v1.5ZM17 4v-.75a.75.75 0 0 0-.75.75H17Zm3.4 7.55a.75.75 0 1 0 1.2.9l-1.2-.9ZM2 11.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4-8h11v-1.5H2v1.5Zm0 4h11v-1.5H2v1.5ZM16.25 16A3.25 3.25 0 0 1 13 19.25v1.5A4.75 4.75 0 0 0 17.75 16h-1.5ZM13 19.25A3.25 3.25 0 0 1 9.75 16h-1.5A4.75 4.75 0 0 0 13 20.75v-1.5ZM9.75 16A3.25 3.25 0 0 1 13 12.75v-1.5A4.75 4.75 0 0 0 8.25 16h1.5ZM13 12.75A3.25 3.25 0 0 1 16.25 16h1.5A4.75 4.75 0 0 0 13 11.25v1.5Zm4-8A4.25 4.25 0 0 1 21.25 9h1.5A5.75 5.75 0 0 0 17 3.25v1.5ZM21.25 9c0 .958-.316 1.84-.85 2.55l1.2.9A5.728 5.728 0 0 0 22.75 9h-1.5Zm-5-5v12h1.5V4h-1.5ZM2 12.75h4v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongRight);
export default ForwardRef;

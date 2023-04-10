import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickRight = (
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
            d='M13 9v.75a.75.75 0 0 0 .75-.75H13Zm0 6h.75a.75.75 0 0 0-.75-.75V15Zm1.659 2.549-.494-.565.494.565Zm0-11.098-.494.565.494-.565ZM13 8.25H5v1.5h8v-1.5ZM2.25 11v2h1.5v-2h-1.5ZM5 15.75h8v-1.5H5v1.5Zm7.25-.75v1.796h1.5V15h-1.5Zm2.902 3.113 4.622-4.043-.988-1.13-4.621 4.044.987 1.13Zm4.622-8.183-4.622-4.043-.987 1.129 4.62 4.043.989-1.129ZM12.25 7.204V9h1.5V7.204h-1.5Zm7.524 6.866a2.75 2.75 0 0 0 0-4.14l-.988 1.13a1.25 1.25 0 0 1 0 1.88l.988 1.13Zm-7.524 2.726c0 1.504 1.77 2.307 2.902 1.317l-.987-1.129a.25.25 0 0 1-.415-.188h-1.5ZM2.25 13A2.75 2.75 0 0 0 5 15.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm12.902-7.113c-1.131-.99-2.902-.187-2.902 1.317h1.5a.25.25 0 0 1 .415-.188l.987-1.13ZM5 8.25A2.75 2.75 0 0 0 2.25 11h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickRight);
export default ForwardRef;

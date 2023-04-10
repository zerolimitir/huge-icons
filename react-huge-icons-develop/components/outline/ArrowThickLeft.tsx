import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickLeft = (
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
            d='M11 9v.75a.75.75 0 0 1-.75-.75H11Zm0 6h-.75a.75.75 0 0 1 .75-.75V15Zm-1.659 2.549.494-.565-.494.565Zm0-11.098.494.565-.494-.565ZM11 8.25h8v1.5h-8v-1.5ZM21.75 11v2h-1.5v-2h1.5ZM19 15.75h-8v-1.5h8v1.5ZM11.75 15v1.796h-1.5V15h1.5Zm-2.902 3.113L4.226 14.07l.988-1.13 4.621 4.044-.987 1.13ZM4.226 9.93l4.622-4.043.987 1.129-4.621 4.043-.988-1.129Zm7.524-2.726V9h-1.5V7.204h1.5ZM4.226 14.07a2.75 2.75 0 0 1 0-4.14l.988 1.13a1.25 1.25 0 0 0 0 1.88l-.988 1.13Zm7.524 2.726c0 1.504-1.77 2.307-2.902 1.317l.987-1.129a.25.25 0 0 0 .415-.188h1.5Zm10-3.796A2.75 2.75 0 0 1 19 15.75v-1.5c.69 0 1.25-.56 1.25-1.25h1.5ZM8.848 5.887c1.131-.99 2.902-.187 2.902 1.317h-1.5a.25.25 0 0 0-.415-.188l-.987-1.13ZM19 8.25A2.75 2.75 0 0 1 21.75 11h-1.5c0-.69-.56-1.25-1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickLeft);
export default ForwardRef;

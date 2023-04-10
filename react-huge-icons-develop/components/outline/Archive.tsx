import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchive = (
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
            d='m7.6 13.8-.6.45.6-.45Zm1.2 1.6.6-.45-.6.45Zm6.4 0-.6-.45.6.45Zm1.2-1.6-.6-.45.6.45Zm4.85 2.2v3h1.5v-3h-1.5ZM19 21.25H5v1.5h14v-1.5ZM2.75 19v-3h-1.5v3h1.5ZM5 13.75h1v-1.5H5v1.5Zm2 .5 1.2 1.6 1.2-.9-1.2-1.6-1.2.9Zm11-.5h1v-1.5h-1v1.5Zm-2.2 2.1 1.2-1.6-1.2-.9-1.2 1.6 1.2.9Zm-3.8 1.9a4.75 4.75 0 0 0 3.8-1.9l-1.2-.9a3.25 3.25 0 0 1-2.6 1.3v1.5Zm6-5.5a2.75 2.75 0 0 0-2.2 1.1l1.2.9a1.25 1.25 0 0 1 1-.5v-1.5Zm-9.8 3.6a4.75 4.75 0 0 0 3.8 1.9v-1.5a3.25 3.25 0 0 1-2.6-1.3l-1.2.9ZM6 13.75c.393 0 .764.185 1 .5l1.2-.9a2.75 2.75 0 0 0-2.2-1.1v1.5Zm-1 7.5A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM21.25 19A2.25 2.25 0 0 1 19 21.25v1.5A3.75 3.75 0 0 0 22.75 19h-1.5Zm1.5-3A3.75 3.75 0 0 0 19 12.25v1.5A2.25 2.25 0 0 1 21.25 16h1.5Zm-20 0A2.25 2.25 0 0 1 5 13.75v-1.5A3.75 3.75 0 0 0 1.25 16h1.5Zm18-3V6h-1.5v7h1.5ZM16 1.25H8v1.5h8v-1.5ZM3.25 6v7h1.5V6h-1.5ZM8 1.25A4.75 4.75 0 0 0 3.25 6h1.5A3.25 3.25 0 0 1 8 2.75v-1.5ZM20.75 6A4.75 4.75 0 0 0 16 1.25v1.5A3.25 3.25 0 0 1 19.25 6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;

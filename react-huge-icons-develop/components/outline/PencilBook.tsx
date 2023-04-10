import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPencilBook = (
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
            d='M12 6.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 2.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM3.5 21l-.6.45a.75.75 0 0 0 1.2 0L3.5 21Zm-.7-.933-.6.45.6-.45Zm1.4 0 .6.45-.6-.45ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm6-4h8v-1.5h-8v1.5ZM21.25 6v9h1.5V6h-1.5ZM8.75 18V6h-1.5v12h1.5ZM19 3.75A2.25 2.25 0 0 1 21.25 6h1.5A3.75 3.75 0 0 0 19 2.25v1.5Zm-8-1.5A3.75 3.75 0 0 0 7.25 6h1.5A2.25 2.25 0 0 1 11 3.75v-1.5Zm1 5.5h6v-1.5h-6v1.5Zm0 4h3v-1.5h-3v1.5Zm-1 4h11v-1.5H11v1.5ZM21.25 15v3h1.5v-3h-1.5ZM19 20.25h-8v1.5h8v-1.5Zm-8 0A2.25 2.25 0 0 1 8.75 18h-1.5A3.75 3.75 0 0 0 11 21.75v-1.5ZM21.25 18A2.25 2.25 0 0 1 19 20.25v1.5A3.75 3.75 0 0 0 22.75 18h-1.5ZM11 14.25A3.75 3.75 0 0 0 7.25 18h1.5A2.25 2.25 0 0 1 11 15.75v-1.5ZM4.25 4.5v13.167h1.5V4.5h-1.5Zm-1.5 13.167V4.5h-1.5v13.167h1.5Zm.85 1.95-.7.933 1.2.9.7-.933-1.2-.9Zm.5.933-.7-.933-1.2.9.7.933 1.2-.9Zm-2.85-2.883a4.75 4.75 0 0 0 .95 2.85l1.2-.9a3.25 3.25 0 0 1-.65-1.95h-1.5Zm3 0a3.25 3.25 0 0 1-.65 1.95l1.2.9a4.75 4.75 0 0 0 .95-2.85h-1.5ZM3.5 3.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 3.5 2.25v1.5Zm0-1.5A2.25 2.25 0 0 0 1.25 4.5h1.5a.75.75 0 0 1 .75-.75v-1.5ZM2 7.75h3v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencilBook);
export default ForwardRef;

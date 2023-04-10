import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNoteBook = (
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
            d='M2 5.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 4.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 4.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm12-12a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 5.5a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-2-6.5h10v-1.5H8v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H8v1.5h10v-1.5ZM4.75 18V6h-1.5v12h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM8 1.25A4.75 4.75 0 0 0 3.25 6h1.5A3.25 3.25 0 0 1 8 2.75v-1.5Zm-6 5.5h4v-1.5H2v1.5Zm0 6h4v-1.5H2v1.5Zm0 6h4v-1.5H2v1.5Zm16-13.5h-8v1.5h8v-1.5Zm-4 4h-4v1.5h4v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNoteBook);
export default ForwardRef;

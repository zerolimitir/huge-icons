import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveDocument = (
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
            d='M3 11.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-11-6.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 8.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm3-16.5H7v1.5h10v-1.5ZM2.25 6v12h1.5V6h-1.5ZM7 22.75h10v-1.5H7v1.5ZM21.75 18V6h-1.5v12h1.5ZM17 22.75A4.75 4.75 0 0 0 21.75 18h-1.5A3.25 3.25 0 0 1 17 21.25v1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM7 1.25A4.75 4.75 0 0 0 2.25 6h1.5A3.25 3.25 0 0 1 7 2.75v-1.5Zm10 1.5A3.25 3.25 0 0 1 20.25 6h1.5A4.75 4.75 0 0 0 17 1.25v1.5Zm-14 10h18v-1.5H3v1.5Zm7-5h4v-1.5h-4v1.5Zm0 10h4v-1.5h-4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveDocument);
export default ForwardRef;

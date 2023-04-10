import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBooks = (
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
            d='M2 14.25a.75.75 0 0 0 0 1.5v-1.5Zm0 6a.75.75 0 0 0 0 1.5v-1.5Zm0-18a.75.75 0 0 0 0 1.5v-1.5Zm0 6a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5Zm0 6a.75.75 0 0 0 0-1.5v1.5Zm-18 0h11v-1.5H4v1.5Zm11 4.5H4v1.5h11v-1.5ZM4.75 21v-6h-1.5v6h1.5ZM4 14.25H2v1.5h2v-1.5Zm0 6H2v1.5h2v-1.5ZM17.25 18A2.25 2.25 0 0 1 15 20.25v1.5A3.75 3.75 0 0 0 18.75 18h-1.5ZM15 15.75A2.25 2.25 0 0 1 17.25 18h1.5A3.75 3.75 0 0 0 15 14.25v1.5Zm-11-12h11v-1.5H4v1.5Zm11 4.5H4v1.5h11v-1.5ZM4.75 9V3h-1.5v6h1.5ZM4 2.25H2v1.5h2v-1.5Zm0 6H2v1.5h2v-1.5ZM17.25 6A2.25 2.25 0 0 1 15 8.25v1.5A3.75 3.75 0 0 0 18.75 6h-1.5ZM15 3.75A2.25 2.25 0 0 1 17.25 6h1.5A3.75 3.75 0 0 0 15 2.25v1.5Zm5 4.5H9v1.5h11v-1.5Zm-11 7.5h11v-1.5H9v1.5ZM20.75 15V9h-1.5v6h1.5ZM20 9.75h2v-1.5h-2v1.5Zm0 6h2v-1.5h-2v1.5ZM5.25 12A3.75 3.75 0 0 0 9 15.75v-1.5A2.25 2.25 0 0 1 6.75 12h-1.5ZM9 8.25A3.75 3.75 0 0 0 5.25 12h1.5A2.25 2.25 0 0 1 9 9.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBooks);
export default ForwardRef;

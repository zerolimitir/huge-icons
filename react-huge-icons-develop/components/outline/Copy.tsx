import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCopy = (
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
            d='M12 2v-.75V2Zm6 0v.75V2Zm-6 19.25H6v1.5h6v-1.5ZM2.75 18v-6h-1.5v6h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM15.25 18A3.25 3.25 0 0 1 12 21.25v1.5A4.75 4.75 0 0 0 16.75 18h-1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 1.25 12h1.5A3.25 3.25 0 0 1 6 8.75v-1.5Zm6-4.5h6v-1.5h-6v1.5ZM21.25 6v6h1.5V6h-1.5Zm0 6A3.25 3.25 0 0 1 18 15.25v1.5A4.75 4.75 0 0 0 22.75 12h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5ZM8.75 8V6h-1.5v2h1.5ZM6 8.75h2v-1.5H6v1.5Zm2 0h4v-1.5H8v1.5Zm10 6.5h-2v1.5h2v-1.5ZM15.25 12v4h1.5v-4h-1.5Zm0 4v2h1.5v-2h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicrophone = (
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
            d='M19.75 11a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM15.25 6v6h1.5V6h-1.5Zm-6.5 6V6h-1.5v6h1.5ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75v-1.5ZM18.25 11v1h1.5v-1h-1.5Zm-12.5 1v-1h-1.5v1h1.5ZM12 18.25A6.25 6.25 0 0 1 5.75 12h-1.5A7.75 7.75 0 0 0 12 19.75v-1.5ZM18.25 12A6.25 6.25 0 0 1 12 18.25v1.5A7.75 7.75 0 0 0 19.75 12h-1.5Zm-7 7v3h1.5v-3h-1.5Zm.75 3.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;

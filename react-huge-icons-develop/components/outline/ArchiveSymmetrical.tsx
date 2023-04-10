import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveSymmetrical = (
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
            d='M15.5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-13-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm7 2.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-13-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM21.25 6v12h1.5V6h-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 2.75h6v-1.5H6v1.5Zm6 0h6v-1.5h-6v1.5Zm6 18.5h-6v1.5h6v-1.5Zm-6 0H6v1.5h6v-1.5ZM11.25 2v20h1.5V2h-1.5Zm-10 16A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5Zm20 0A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5-12A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5Zm-20 0A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm12.75.75h3v-1.5h-3v1.5Zm-10 0h3v-1.5h-3v1.5Zm10 4h3v-1.5h-3v1.5Zm-10 0h3v-1.5h-3v1.5ZM18 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveSymmetrical);
export default ForwardRef;

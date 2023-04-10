import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTransform = (
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
            d='M8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5ZM2.75 16a.75.75 0 0 0-1.5 0h1.5Zm-1.5-8a.75.75 0 0 0 1.5 0h-1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 10v2h1.5v-2h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-2h-1.5v2h1.5Zm0-10V6h-1.5v2h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM16.25 12A4.25 4.25 0 0 1 12 16.25v1.5A5.75 5.75 0 0 0 17.75 12h-1.5ZM12 16.25A4.25 4.25 0 0 1 7.75 12h-1.5A5.75 5.75 0 0 0 12 17.75v-1.5ZM7.75 12A4.25 4.25 0 0 1 12 7.75v-1.5A5.75 5.75 0 0 0 6.25 12h1.5ZM12 7.75A4.25 4.25 0 0 1 16.25 12h1.5A5.75 5.75 0 0 0 12 6.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransform);
export default ForwardRef;

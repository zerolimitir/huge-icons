import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFocus = (
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
            d='M16.444 1.25a.75.75 0 0 0 0 1.5v-1.5Zm-8.888 1.5a.75.75 0 0 0 0-1.5v1.5ZM21.25 7.556a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8.888a.75.75 0 0 0-1.5 0h1.5Zm-6.306 4.806a.75.75 0 0 0 0 1.5v-1.5Zm-8.888 1.5a.75.75 0 0 0 0-1.5v1.5ZM1.25 7.556a.75.75 0 0 0 1.5 0h-1.5Zm1.5 8.888a.75.75 0 0 0-1.5 0h1.5ZM16.444 2.75H18v-1.5h-1.556v1.5ZM6 2.75h1.556v-1.5H6v1.5ZM21.25 6v1.556h1.5V6h-1.5Zm0 10.444V18h1.5v-1.556h-1.5ZM18 21.25h-1.556v1.5H18v-1.5Zm-10.444 0H6v1.5h1.556v-1.5ZM2.75 7.556V6h-1.5v1.556h1.5ZM2.75 18v-1.556h-1.5V18h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM16.25 12A4.25 4.25 0 0 1 12 16.25v1.5A5.75 5.75 0 0 0 17.75 12h-1.5ZM12 16.25A4.25 4.25 0 0 1 7.75 12h-1.5A5.75 5.75 0 0 0 12 17.75v-1.5ZM7.75 12A4.25 4.25 0 0 1 12 7.75v-1.5A5.75 5.75 0 0 0 6.25 12h1.5ZM12 7.75A4.25 4.25 0 0 1 16.25 12h1.5A5.75 5.75 0 0 0 12 6.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;

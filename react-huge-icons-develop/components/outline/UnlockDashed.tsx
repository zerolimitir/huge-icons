import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUnlockDashed = (
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
            d='M11.25 16a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5ZM16 6h.75H16ZM7.886 3.624a.75.75 0 1 0 1.298.752l-1.298-.752ZM12.75 16v-2h-1.5v2h1.5ZM8 8.75h8v-1.5H8v1.5ZM19.25 12v6h1.5v-6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18v-6h-1.5v6h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5ZM16 8.75A3.25 3.25 0 0 1 19.25 12h1.5A4.75 4.75 0 0 0 16 7.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 3.25 12h1.5A3.25 3.25 0 0 1 8 8.75v-1.5ZM15.25 6v2h1.5V6h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5ZM9.184 4.376A3.248 3.248 0 0 1 12 2.75v-1.5c-1.76 0-3.294.957-4.114 2.374l1.298.752Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnlockDashed);
export default ForwardRef;

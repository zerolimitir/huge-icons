import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartLock = (
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
            d='M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 12.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 11.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 15.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 12.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 15.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 14.25v1.5Zm-4-7h8v-1.5H8v1.5ZM19.25 12v6h1.5v-6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18v-6h-1.5v6h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5ZM16 8.75A3.25 3.25 0 0 1 19.25 12h1.5A4.75 4.75 0 0 0 16 7.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 3.25 12h1.5A3.25 3.25 0 0 1 8 8.75v-1.5Zm.75.75V6h-1.5v2h1.5Zm6.5-2v2h1.5V6h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5ZM8.75 6A3.25 3.25 0 0 1 12 2.75v-1.5A4.75 4.75 0 0 0 7.25 6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLock);
export default ForwardRef;

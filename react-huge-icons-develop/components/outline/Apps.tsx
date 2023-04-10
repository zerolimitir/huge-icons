import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgApps = (
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
            d='M4 2.75h4v-1.5H4v1.5ZM9.25 4v4h1.5V4h-1.5ZM8 9.25H4v1.5h4v-1.5ZM2.75 8V4h-1.5v4h1.5ZM4 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 10.75v-1.5ZM9.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 8h-1.5ZM8 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM21.25 6A3.25 3.25 0 0 1 18 9.25v1.5A4.75 4.75 0 0 0 22.75 6h-1.5ZM18 9.25A3.25 3.25 0 0 1 14.75 6h-1.5A4.75 4.75 0 0 0 18 10.75v-1.5ZM14.75 6A3.25 3.25 0 0 1 18 2.75v-1.5A4.75 4.75 0 0 0 13.25 6h1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM9.25 18A3.25 3.25 0 0 1 6 21.25v1.5A4.75 4.75 0 0 0 10.75 18h-1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM2.75 18A3.25 3.25 0 0 1 6 14.75v-1.5A4.75 4.75 0 0 0 1.25 18h1.5ZM6 14.75A3.25 3.25 0 0 1 9.25 18h1.5A4.75 4.75 0 0 0 6 13.25v1.5Zm10 0h4v-1.5h-4v1.5ZM21.25 16v4h1.5v-4h-1.5ZM20 21.25h-4v1.5h4v-1.5ZM14.75 20v-4h-1.5v4h1.5ZM16 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 13.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 13.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgApps);
export default ForwardRef;

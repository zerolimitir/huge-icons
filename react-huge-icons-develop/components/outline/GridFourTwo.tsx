import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGridFourTwo = (
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
            d='M4 2.75h4v-1.5H4v1.5ZM9.25 4v2h1.5V4h-1.5ZM8 7.25H4v1.5h4v-1.5ZM2.75 6V4h-1.5v2h1.5ZM4 7.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 8.75v-1.5ZM9.25 6c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 6h-1.5ZM8 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 11.5h4v-1.5H4v1.5ZM9.25 14v6h1.5v-6h-1.5ZM8 21.25H4v1.5h4v-1.5ZM2.75 20v-6h-1.5v6h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM9.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 20h-1.5ZM8 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 11.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 1.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm12-8.5h4v-1.5h-4v1.5ZM21.25 4v6h1.5V4h-1.5ZM20 11.25h-4v1.5h4v-1.5ZM14.75 10V4h-1.5v6h1.5ZM16 11.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 12.75v-1.5ZM21.25 10c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 10h-1.5ZM20 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 13.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 15.5h4v-1.5h-4v1.5ZM21.25 18v2h1.5v-2h-1.5ZM20 21.25h-4v1.5h4v-1.5ZM14.75 20v-2h-1.5v2h1.5ZM16 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 15.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 13.25 18h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGridFourTwo);
export default ForwardRef;

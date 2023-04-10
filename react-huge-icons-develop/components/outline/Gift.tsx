import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGift = (
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
            d='M4 20h-.75H4Zm7.25 2a.75.75 0 0 0 1.5 0h-1.5ZM4 6.75h16v-1.5H4v1.5ZM21.25 8v1h1.5V8h-1.5ZM20 10.25H4v1.5h16v-1.5ZM2.75 9V8h-1.5v1h1.5ZM4 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 11.75v-1.5ZM21.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 9h-1.5ZM20 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 5.25v1.5ZM4 5.25A2.75 2.75 0 0 0 1.25 8h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm12 0h-4v1.5h4v-1.5ZM17.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 4h-1.5ZM16 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 1.25v1.5Zm0-1.5A4.75 4.75 0 0 0 11.25 6h1.5A3.25 3.25 0 0 1 16 2.75v-1.5Zm-8 5.5h4v-1.5H8v1.5ZM5.25 4A2.75 2.75 0 0 0 8 6.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM8 1.25A2.75 2.75 0 0 0 5.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 1.5A3.25 3.25 0 0 1 11.25 6h1.5A4.75 4.75 0 0 0 8 1.25v1.5ZM19.25 11v9h1.5v-9h-1.5ZM18 21.25H6v1.5h12v-1.5ZM4.75 20v-9h-1.5v9h1.5ZM6 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 22.75v-1.5ZM19.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 20h-1.5Zm-8-14v16h1.5V6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;

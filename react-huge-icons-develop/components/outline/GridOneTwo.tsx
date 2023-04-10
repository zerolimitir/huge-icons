import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGridOneTwo = (
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
            d='M4 2.75h4v-1.5H4v1.5ZM9.25 4v16h1.5V4h-1.5ZM8 21.25H4v1.5h4v-1.5ZM2.75 20V4h-1.5v16h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM9.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 20h-1.5ZM8 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm12 1.5h4v-1.5h-4v1.5ZM21.25 4v4h1.5V4h-1.5ZM20 9.25h-4v1.5h4v-1.5ZM14.75 8V4h-1.5v4h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM21.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 8h-1.5ZM20 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 13.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 13.5h4v-1.5h-4v1.5ZM21.25 16v4h1.5v-4h-1.5ZM20 21.25h-4v1.5h4v-1.5ZM14.75 20v-4h-1.5v4h1.5ZM16 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 13.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 13.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGridOneTwo);
export default ForwardRef;

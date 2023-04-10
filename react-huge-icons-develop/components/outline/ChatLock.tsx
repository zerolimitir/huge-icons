import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatLock = (
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
            d='M11 3.75h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5ZM10.75 11v-1h-1.5v1h1.5Zm2.5-1v1h1.5v-1h-1.5ZM12 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 7.25v1.5ZM10.75 10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10h1.5ZM10 11.75h4v-1.5h-4v1.5ZM15.25 13v1h1.5v-1h-1.5ZM14 15.25h-4v1.5h4v-1.5ZM8.75 14v-1h-1.5v1h1.5ZM10 15.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 16.75v-1.5ZM15.25 14c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 14h-1.5ZM14 11.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 10.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 13h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatLock);
export default ForwardRef;

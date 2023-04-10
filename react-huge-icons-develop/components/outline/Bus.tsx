import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBus = (
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
            d='M1.25 8a.75.75 0 0 0 1.5 0h-1.5Zm20 0a.75.75 0 0 0 1.5 0h-1.5Zm-8.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 7a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75h8v-1.5H8v1.5ZM18.25 5v7h1.5V5h-1.5Zm.75 6.25H5v1.5h14v-1.5ZM5.75 12V5h-1.5v7h1.5ZM16 2.75A2.25 2.25 0 0 1 18.25 5h1.5A3.75 3.75 0 0 0 16 1.25v1.5Zm-8-1.5A3.75 3.75 0 0 0 4.25 5h1.5A2.25 2.25 0 0 1 8 2.75v-1.5ZM20.25 14v2h1.5v-2h-1.5ZM19 17.25H5v1.5h14v-1.5ZM3.75 16v-2h-1.5v2h1.5ZM5 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 18.75v-1.5ZM20.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 16h-1.5ZM19 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 11.25v1.5Zm-14-1.5A2.75 2.75 0 0 0 2.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2 7.5h2v-1.5H7v1.5Zm2.25.25v2h1.5v-2h-1.5ZM9 21.25H7v1.5h2v-1.5ZM6.75 21v-2h-1.5v2h1.5Zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5ZM9.25 21a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 10.75 21h-1.5ZM9 18.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 9 17.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 5.25 19h1.5a.25.25 0 0 1 .25-.25v-1.5Zm8 1.5h2v-1.5h-2v1.5Zm2.25.25v2h1.5v-2h-1.5ZM17 21.25h-2v1.5h2v-1.5ZM14.75 21v-2h-1.5v2h1.5Zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5Zm2.25-.25a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 18.75 21h-1.5ZM17 18.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 17 17.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 13.25 19h1.5a.25.25 0 0 1 .25-.25v-1.5ZM2.75 8V7h-1.5v1h1.5ZM4 5.75h1v-1.5H4v1.5ZM2.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 7h1.5Zm20 1V7h-1.5v1h1.5ZM20 4.25h-1v1.5h1v-1.5ZM22.75 7A2.75 2.75 0 0 0 20 4.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-11.5-2v7h1.5V5h-1.5ZM19 4.25H5v1.5h14v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;

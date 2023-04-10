import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCpu = (
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
            d='M9.25 4a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm2.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm0 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM20 9.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18-4a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2 5.5a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6-8.5h8v-1.5H8v1.5ZM19.25 8v8h1.5V8h-1.5ZM16 19.25H8v1.5h8v-1.5ZM4.75 16V8h-1.5v8h1.5ZM8 19.25A3.25 3.25 0 0 1 4.75 16h-1.5A4.75 4.75 0 0 0 8 20.75v-1.5ZM19.25 16A3.25 3.25 0 0 1 16 19.25v1.5A4.75 4.75 0 0 0 20.75 16h-1.5ZM16 4.75A3.25 3.25 0 0 1 19.25 8h1.5A4.75 4.75 0 0 0 16 3.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 3.25 8h1.5A3.25 3.25 0 0 1 8 4.75v-1.5Zm3 6.5h2v-1.5h-2v1.5ZM14.25 11v2h1.5v-2h-1.5ZM13 14.25h-2v1.5h2v-1.5ZM9.75 13v-2h-1.5v2h1.5ZM11 14.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 11 15.75v-1.5ZM14.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 15.75 13h-1.5ZM13 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 13 8.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 8.25 11h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM10.75 4V2h-1.5v2h1.5Zm4 0V2h-1.5v2h1.5Zm-1.5 16v2h1.5v-2h-1.5Zm-4 0v2h1.5v-2h-1.5ZM20 10.75h2v-1.5h-2v1.5Zm0 4h2v-1.5h-2v1.5ZM4 9.25H2v1.5h2v-1.5Zm0 4H2v1.5h2v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCpu);
export default ForwardRef;

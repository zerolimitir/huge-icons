import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartSmile = (
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
            d='M2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-7.13-8.402a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.255-2.63-.902l-.74 1.304Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartSmile);
export default ForwardRef;

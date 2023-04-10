import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrolley = (
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
            d='M10 5.75h8v-1.5h-8v1.5ZM19.25 7v8h1.5V7h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM8.75 15V7h-1.5v8h1.5ZM10 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 17.75v-1.5ZM19.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 15h-1.5ZM18 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 4.25v1.5Zm-8-1.5A2.75 2.75 0 0 0 7.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 7.75 20h-1.5ZM5 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 22.75v-1.5ZM3.75 20c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 20h1.5ZM5 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 5 17.25v1.5Z'
        />
        <path
            fill='currentColor'
            d='M4.25 18a.75.75 0 0 0 1.5 0h-1.5ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5ZM5.75 18V4h-1.5v14h1.5ZM3 1.25H2v1.5h1v-1.5ZM5.75 4A2.75 2.75 0 0 0 3 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM7 19.25a.75.75 0 0 0 0 1.5v-1.5Zm15 1.5a.75.75 0 0 0 0-1.5v1.5Zm-15 0h15v-1.5H7v1.5Zm6-13.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolley);
export default ForwardRef;

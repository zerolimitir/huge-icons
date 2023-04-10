import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailPlus = (
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
            d='M20.75 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM22 5.75a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6.45 11.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm2.35 2.7-.45.6.45-.6Zm2.4 0 .45.6-.45-.6Zm3.25-1.5a.75.75 0 1 0-.9-1.2l.9 1.2Zm4.8-9.6v4h1.5V3h-1.5ZM22 4.25h-4v1.5h4v-1.5ZM5 7.75h10v-1.5H5v1.5ZM17.25 10v8h1.5v-8h-1.5ZM15 20.25H5v1.5h10v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM5 20.25A2.25 2.25 0 0 1 2.75 18h-1.5A3.75 3.75 0 0 0 5 21.75v-1.5ZM17.25 18A2.25 2.25 0 0 1 15 20.25v1.5A3.75 3.75 0 0 0 18.75 18h-1.5ZM15 7.75A2.25 2.25 0 0 1 17.25 10h1.5A3.75 3.75 0 0 0 15 6.25v1.5ZM5 6.25A3.75 3.75 0 0 0 1.25 10h1.5A2.25 2.25 0 0 1 5 7.75v-1.5Zm.55 6.35 2.8 2.1.9-1.2-2.8-2.1-.9 1.2Zm6.1 2.1 2.8-2.1-.9-1.2-2.8 2.1.9 1.2Zm-3.3 0a2.75 2.75 0 0 0 3.3 0l-.9-1.2a1.25 1.25 0 0 1-1.5 0l-.9 1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailPlus);
export default ForwardRef;

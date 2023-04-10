import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAbacus = (
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
            d='M6 7.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 6.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5ZM15.75 6.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-4.5 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm4.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm1.5-11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6-5.5v16h1.5V4h-1.5Zm-2.5 16V4h-1.5v16h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM5.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 20h-1.5ZM4 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 1.25v1.5Zm0-1.5A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM21.25 4v16h1.5V4h-1.5Zm-2.5 16V4h-1.5v16h1.5ZM20 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 20 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 1.25v1.5Zm0-1.5A2.75 2.75 0 0 0 17.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 8.75h12v-1.5H6v1.5Zm0 8h12v-1.5H6v1.5ZM14.25 6.5v3h1.5v-3h-1.5Zm-6 8v3h1.5v-3h-1.5Zm3 0v3h1.5v-3h-1.5Zm0-8v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAbacus);
export default ForwardRef;

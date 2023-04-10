import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLine = (
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
            d='M4.25 21a.75.75 0 0 0 1.5 0h-1.5Zm7 0a.75.75 0 0 0 1.5 0h-1.5Zm1.5-9a.75.75 0 0 0-1.5 0h1.5Zm0-9a.75.75 0 0 0-1.5 0h1.5Zm-7 0a.75.75 0 0 0-1.5 0h1.5Zm12.5 9a.75.75 0 0 0 1.5 0h-1.5Zm1.5-9a.75.75 0 0 0-1.5 0h1.5Zm-1.5 18a.75.75 0 0 0 1.5 0h-1.5Zm-12.5 0v-7h-1.5v7h1.5Zm7 0v-9h-1.5v9h1.5Zm0-16V3h-1.5v2h1.5Zm-7 5V3h-1.5v7h1.5Zm14 2V3h-1.5v9h1.5Zm0 9v-2h-1.5v2h1.5ZM19 15.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 14.25v1.5ZM20.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 17h-1.5ZM19 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 19 19.75v-1.5ZM17.75 17c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 16.25 17h1.5ZM12 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 4.25v1.5ZM13.25 7c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 7h-1.5ZM12 8.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 9.75v-1.5ZM10.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 7h1.5ZM5 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 5 9.25v1.5ZM6.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 7.75 12h-1.5ZM5 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 14.75v-1.5ZM3.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 12h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLine);
export default ForwardRef;

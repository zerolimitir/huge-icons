import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlag = (
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
            d='M2.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-20a.75.75 0 0 0-1.5 0h1.5Zm0 20v-8h-1.5v8h1.5Zm0-8V3h-1.5v11h1.5Zm0-11V2h-1.5v1h1.5ZM15 2.25H3v1.5h12v-1.5Zm0 12.5A2.75 2.75 0 0 0 17.75 12h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm0-11c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 2.25v1.5Zm4 14.5H9v1.5h10v-1.5ZM20.25 9v8h1.5V9h-1.5ZM9 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 19.75v-1.5Zm10 1.5A2.75 2.75 0 0 0 21.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm0-12c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 6.25v1.5Zm0-1.5h-2v1.5h2v-1.5ZM16.25 5v2h1.5V5h-1.5Zm0 2v5h1.5V7h-1.5Zm-8.5 10v-3h-1.5v3h1.5ZM15 13.25H7v1.5h8v-1.5Zm-8 0H3v1.5h4v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;

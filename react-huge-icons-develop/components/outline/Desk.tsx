import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDesk = (
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
            d='M3 8v-.75a.75.75 0 0 0-.75.75H3Zm18 0h.75a.75.75 0 0 0-.75-.75V8Zm-4 0v.75a.75.75 0 0 0 .75-.75H17ZM7 8h-.75c0 .414.336.75.75.75V8ZM4.75 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm4.5-4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm11.5-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm4.5-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM22 8.75a.75.75 0 0 0 0-1.5v1.5ZM2 7.25a.75.75 0 0 0 0 1.5v-1.5Zm1 1.5h18v-1.5H3v1.5ZM20.25 8v8h1.5V8h-1.5ZM19 17.25H5v1.5h14v-1.5ZM3.75 16V8h-1.5v8h1.5ZM5 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 18.75v-1.5ZM20.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 16h-1.5ZM9 2.75h6v-1.5H9v1.5ZM16.25 4v4h1.5V4h-1.5ZM17 7.25H7v1.5h10v-1.5ZM7.75 8V4h-1.5v4h1.5ZM15 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 1.25v1.5Zm-6-1.5A2.75 2.75 0 0 0 6.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM3.25 18v4h1.5v-4h-1.5Zm3 0v2h1.5v-2h-1.5Zm10 0v2h1.5v-2h-1.5Zm3 0v4h1.5v-4h-1.5ZM22 7.25H2v1.5h20v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDesk);
export default ForwardRef;

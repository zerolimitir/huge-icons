import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClipboardSearch = (
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
            d='M15.03 14.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM14.25 13A2.25 2.25 0 0 1 12 15.25v1.5A3.75 3.75 0 0 0 15.75 13h-1.5ZM12 15.25A2.25 2.25 0 0 1 9.75 13h-1.5A3.75 3.75 0 0 0 12 16.75v-1.5ZM9.75 13A2.25 2.25 0 0 1 12 10.75v-1.5A3.75 3.75 0 0 0 8.25 13h1.5ZM12 10.75A2.25 2.25 0 0 1 14.25 13h1.5A3.75 3.75 0 0 0 12 9.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM10 2.75h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardSearch);
export default ForwardRef;

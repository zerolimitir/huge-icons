import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookmark = (
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
            d='m7.2 20.6.45.6-.45-.6Zm3.6-2.7-.45-.6.45.6Zm2.4 0 .45-.6-.45.6Zm3.6 2.7-.45.6.45-.6ZM3.25 5v14h1.5V5h-1.5Zm4.4 16.2 3.6-2.7-.9-1.2-3.6 2.7.9 1.2Zm5.1-2.7 3.6 2.7.9-1.2-3.6-2.7-.9 1.2Zm8 .5V5h-1.5v14h1.5ZM18 2.25H6v1.5h12v-1.5ZM20.75 5A2.75 2.75 0 0 0 18 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-4.4 16.2c1.813 1.36 4.4.066 4.4-2.2h-1.5c0 1.03-1.176 1.618-2 1l-.9 1.2Zm-5.1-2.7a1.25 1.25 0 0 1 1.5 0l.9-1.2a2.75 2.75 0 0 0-3.3 0l.9 1.2Zm-8 .5c0 2.266 2.587 3.56 4.4 2.2l-.9-1.2c-.824.618-2 .03-2-1h-1.5Zm1.5-14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 5h1.5Z'
        />
        <path
            fill='currentColor'
            d='M4 7.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-16 0h16v-1.5H4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;

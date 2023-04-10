import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiCrooked = (
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
            d='M3 10.25a.75.75 0 0 0 0 1.5v-1.5ZM12.25 21a.75.75 0 0 0 1.5 0h-1.5ZM3 6.25a.75.75 0 0 0 0 1.5v-1.5ZM16.25 21a.75.75 0 0 0 1.5 0h-1.5ZM3 2.25a.75.75 0 0 0 0 1.5v-1.5ZM20.25 21a.75.75 0 0 0 1.5 0h-1.5Zm-13-2.5a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5ZM5.5 20.25a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5ZM3.75 18.5c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25h1.5Zm1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25v1.5Zm-2.5-5h1v-1.5H3v1.5ZM12.25 20v1h1.5v-1h-1.5ZM4 11.75A8.25 8.25 0 0 1 12.25 20h1.5A9.75 9.75 0 0 0 4 10.25v1.5Zm-1-4h1v-1.5H3v1.5ZM16.25 20v1h1.5v-1h-1.5ZM4 7.75c6.765 0 12.25 5.485 12.25 12.25h1.5c0-7.594-6.156-13.75-13.75-13.75v1.5Zm-1-4h1v-1.5H3v1.5ZM20.25 20v1h1.5v-1h-1.5ZM4 3.75c8.975 0 16.25 7.275 16.25 16.25h1.5c0-9.803-7.947-17.75-17.75-17.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiCrooked);
export default ForwardRef;

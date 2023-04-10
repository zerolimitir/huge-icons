import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderShare = (
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
            d='m7.533 2.4-.45.6.45-.6Zm.934.7.45-.6-.45.6Zm7.066 11.3-.45.6.45-.6ZM16 5.25a.75.75 0 0 0 0 1.5v-1.5ZM5.75 13a.75.75 0 0 0-1.5 0h1.5ZM8 18.75a.75.75 0 0 0 0-1.5v1.5Zm10.25-6.25a.75.75 0 0 0 1.5 0h-1.5Zm-6-7V8h1.5V5.5h-1.5ZM11 9.25H5v1.5h6v-1.5ZM3.75 8V4h-1.5v4h1.5Zm5.917-3.75H11v-1.5H9.667v1.5ZM5 2.75h1.333v-1.5H5v1.5ZM7.083 3l.934.7.9-1.2-.934-.7-.9 1.2Zm-.75-.25c.27 0 .534.088.75.25l.9-1.2a2.75 2.75 0 0 0-1.65-.55v1.5Zm3.334 0a1.25 1.25 0 0 1-.75-.25l-.9 1.2a2.75 2.75 0 0 0 1.65.55v-1.5ZM5 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 10.75v-1.5ZM12.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 13.75 8h-1.5Zm1.5-2.5A2.75 2.75 0 0 0 11 2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM3.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 4h1.5Zm16.5 13.5V20h1.5v-2.5h-1.5ZM19 21.25h-6v1.5h6v-1.5ZM11.75 20v-4h-1.5v4h1.5Zm5.917-3.75H19v-1.5h-1.333v1.5ZM13 14.75h1.333v-1.5H13v1.5Zm2.083.25.934.7.9-1.2-.934-.7-.9 1.2Zm-.75-.25c.27 0 .534.088.75.25l.9-1.2a2.75 2.75 0 0 0-1.65-.55v1.5Zm3.334 0a1.25 1.25 0 0 1-.75-.25l-.9 1.2a2.75 2.75 0 0 0 1.65.55v-1.5ZM13 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 13 22.75v-1.5ZM20.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 20h-1.5Zm1.5-2.5A2.75 2.75 0 0 0 19 14.75v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-10-1.5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 10.25 16h1.5ZM16 6.75h1v-1.5h-1v1.5ZM5.75 16v-3h-1.5v3h1.5ZM8 17.25H7v1.5h1v-1.5ZM18.25 8v4.5h1.5V8h-1.5Zm-14 8A2.75 2.75 0 0 0 7 18.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM17 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 5.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderShare);
export default ForwardRef;

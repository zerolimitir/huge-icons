import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignCenter = (
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
            d='M18 13.5v-.75.75Zm2 2h-.75.75Zm-16 0h.75H4Zm2-2v.75-.75ZM6 19v-.75.75Zm-2-2h-.75H4Zm14 2v.75V19Zm2-2h.75H20ZM15 5v-.75V5Zm2 2h-.75.75ZM7 7h.75H7Zm2-2v.75V5Zm0 5.5v-.75.75Zm-2-2h-.75H7Zm8 2v.75-.75Zm2-2h.75H17ZM12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm1.5 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM18 18.25H6v1.5h12v-1.5ZM4.75 17v-1.5h-1.5V17h1.5ZM6 14.25h12v-1.5H6v1.5Zm13.25 1.25V17h1.5v-1.5h-1.5ZM18 14.25c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 12.75v1.5ZM4.75 15.5c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 0 0-2.75 2.75h1.5ZM6 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 19.75v-1.5Zm12 1.5A2.75 2.75 0 0 0 20.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-3-10H9v1.5h6v-1.5ZM7.75 8.5V7h-1.5v1.5h1.5ZM9 5.75h6v-1.5H9v1.5ZM16.25 7v1.5h1.5V7h-1.5ZM15 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 4.25v1.5ZM7.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 7h1.5ZM9 9.75c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 11.25v-1.5Zm6 1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM11.25 2v3h1.5V2h-1.5Zm0 9v2h1.5v-2h-1.5Zm0 8v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignCenter);
export default ForwardRef;

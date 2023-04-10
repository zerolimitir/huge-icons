import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalEqualizer = (
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
            d='M11 5h-.75.75Zm2-2v-.75V3Zm0 8v.75V11Zm-2-2h.75H11Zm8 0h.75H19Zm-2 2v-.75.75Zm2-6h-.75.75Zm-2-2v.75V3ZM5 17h.75H5Zm2-2v.75V15Zm0 8v.75V23Zm-2-2h-.75H5Zm8 0h.75H13Zm-2 2v-.75.75Zm2-6h-.75.75Zm-2-2v-.75.75ZM8 7.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 13.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-11 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5ZM18.25 5v4h1.5V5h-1.5ZM17 10.25h-4v1.5h4v-1.5ZM11.75 9V5h-1.5v4h1.5ZM13 3.75h4v-1.5h-4v1.5ZM11.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 10.25 5h1.5ZM13 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 13 11.75v-1.5ZM18.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 9h-1.5Zm1.5-4A2.75 2.75 0 0 0 17 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-7.5 12v4h1.5v-4h-1.5ZM11 22.25H7v1.5h4v-1.5ZM5.75 21v-4h-1.5v4h1.5ZM7 15.75h4v-1.5H7v1.5ZM5.75 17c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 17h1.5ZM7 22.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 23.75v-1.5ZM12.25 21c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 13.75 21h-1.5Zm1.5-4A2.75 2.75 0 0 0 11 14.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM8 6.25H2v1.5h6v-1.5Zm14 0h-3v1.5h3v-1.5Zm0 12h-6v1.5h6v-1.5Zm-17 0H2v1.5h3v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalEqualizer);
export default ForwardRef;

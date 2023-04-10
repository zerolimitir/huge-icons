import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPixelGridRectangle = (
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
            d='M19.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5ZM5.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5ZM16 19.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm8-12.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-4-1.5h2v-1.5H4v1.5ZM7.25 4v2h1.5V4h-1.5ZM6 7.25H4v1.5h2v-1.5ZM2.75 6V4h-1.5v2h1.5ZM4 7.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 8.75v-1.5ZM7.25 6c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 8.75 6h-1.5ZM6 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 6 1.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm14 1.5h2v-1.5h-2v1.5ZM21.25 4v2h1.5V4h-1.5ZM20 7.25h-2v1.5h2v-1.5ZM16.75 6V4h-1.5v2h1.5ZM18 7.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 18 8.75v-1.5ZM21.25 6c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 6h-1.5ZM20 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 1.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 15.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM4 16.75h2v-1.5H4v1.5ZM7.25 18v2h1.5v-2h-1.5ZM6 21.25H4v1.5h2v-1.5ZM2.75 20v-2h-1.5v2h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM7.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 8.75 20h-1.5ZM6 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 6 15.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 1.25 18h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm14 1.5h2v-1.5h-2v1.5ZM21.25 18v2h1.5v-2h-1.5ZM20 21.25h-2v1.5h2v-1.5ZM16.75 20v-2h-1.5v2h1.5ZM18 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 18 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 15.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 15.25 18h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM18.25 8v8h1.5V8h-1.5Zm-14 0v8h1.5V8h-1.5ZM16 18.25H8v1.5h8v-1.5Zm0-14H8v1.5h8v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPixelGridRectangle);
export default ForwardRef;

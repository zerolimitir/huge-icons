import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignRight = (
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
            d='M20 4h.75v-.75H20V4Zm0 6v.75h.75V10H20ZM4 8h.75H4Zm2 2v.75V10Zm0-6v.75V4ZM4 6h-.75H4Zm16 8h.75v-.75H20V14Zm0 6v.75h.75V20H20Zm-10-2h.75H10Zm2 2v.75V20Zm0-6v.75V14Zm-2 2h-.75.75ZM20.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM20 3.25H6v1.5h14v-1.5ZM3.25 6v2h1.5V6h-1.5ZM6 10.75h14v-1.5H6v1.5ZM20.75 10V4h-1.5v6h1.5ZM3.25 8A2.75 2.75 0 0 0 6 10.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM6 3.25A2.75 2.75 0 0 0 3.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm14 10h-8v1.5h8v-1.5ZM9.25 16v2h1.5v-2h-1.5ZM12 20.75h8v-1.5h-8v1.5Zm8.75-.75v-6h-1.5v6h1.5Zm-11.5-2A2.75 2.75 0 0 0 12 20.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM12 13.25A2.75 2.75 0 0 0 9.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM19.25 2v20h1.5V2h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignRight);
export default ForwardRef;

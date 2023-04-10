import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalAlignBottom = (
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
            d='M4 20h-.75v.75H4V20Zm6 0v.75h.75V20H10ZM8 4v-.75V4Zm2 2h-.75.75ZM4 6h.75H4Zm2-2v.75V4Zm8 16h-.75v.75H14V20Zm6 0v.75h.75V20H20Zm-2-10v-.75.75Zm2 2h-.75.75Zm-6 0h-.75.75Zm2-2v.75V10ZM2 19.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM4.75 20V6h-1.5v14h1.5ZM6 4.75h2v-1.5H6v1.5ZM9.25 6v14h1.5V6h-1.5ZM10 19.25H4v1.5h6v-1.5ZM8 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 3.25v1.5ZM4.75 6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 6h1.5Zm10 14v-8h-1.5v8h1.5ZM16 10.75h2v-1.5h-2v1.5ZM19.25 12v8h1.5v-8h-1.5Zm.75 7.25h-6v1.5h6v-1.5Zm-2-8.5c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 9.25v1.5ZM14.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 12h1.5ZM2 20.75h20v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignBottom);
export default ForwardRef;

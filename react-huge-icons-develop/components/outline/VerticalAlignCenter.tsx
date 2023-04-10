import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalAlignCenter = (
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
            d='M14 6h.75H14Zm2-2v-.75V4Zm0 16v.75V20Zm-2-2h-.75.75Zm6 0h.75H20Zm-2 2v-.75.75Zm2-14h-.75.75Zm-2-2v.75V4ZM4 9h-.75H4Zm2-2v.75V7Zm0 10v.75V17Zm-2-2h.75H4Zm6 0h.75H10Zm-2 2v-.75.75Zm2-8h-.75.75ZM8 7v-.75V7Zm-6 4.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5ZM19.25 6v12h1.5V6h-1.5ZM18 19.25h-2v1.5h2v-1.5ZM14.75 18V6h-1.5v12h1.5ZM16 4.75h2v-1.5h-2v1.5ZM14.75 6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 6h1.5ZM16 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 20.75v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5Zm1.5-12A2.75 2.75 0 0 0 18 3.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM9.25 9v6h1.5V9h-1.5ZM8 16.25H6v1.5h2v-1.5ZM4.75 15V9h-1.5v6h1.5ZM6 7.75h2v-1.5H6v1.5ZM4.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 9h1.5ZM6 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 17.75v-1.5ZM9.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 15h-1.5Zm1.5-6A2.75 2.75 0 0 0 8 6.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM2 12.75h2v-1.5H2v1.5Zm8 0h4v-1.5h-4v1.5Zm10 0h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignCenter);
export default ForwardRef;

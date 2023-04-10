import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalAlignTop = (
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
            d='M4 4v-.75h-.75V4H4Zm6 0h.75v-.75H10V4ZM8 20v.75V20Zm2-2h-.75.75Zm-6 0h.75H4Zm2 2v-.75.75Zm8-16v-.75h-.75V4H14Zm6 0h.75v-.75H20V4Zm-2 10v.75V14Zm2-2h-.75.75Zm-6 0h-.75.75Zm2 2v-.75.75ZM2 3.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM3.25 4v14h1.5V4h-1.5ZM6 20.75h2v-1.5H6v1.5ZM10.75 18V4h-1.5v14h1.5ZM10 3.25H4v1.5h6v-1.5Zm-2 17.5A2.75 2.75 0 0 0 10.75 18h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM3.25 18A2.75 2.75 0 0 0 6 20.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm10-14v8h1.5V4h-1.5ZM16 14.75h2v-1.5h-2v1.5ZM20.75 12V4h-1.5v8h1.5ZM20 3.25h-6v1.5h6v-1.5Zm-2 11.5A2.75 2.75 0 0 0 20.75 12h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM13.25 12A2.75 2.75 0 0 0 16 14.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM2 4.75h20v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignTop);
export default ForwardRef;

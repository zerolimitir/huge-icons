import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignLeft = (
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
            d='M4 4v-.75h-.75V4H4Zm0 6h-.75v.75H4V10Zm16-2h-.75.75Zm-2 2v.75V10Zm0-6v.75V4Zm2 2h.75H20ZM4 14v-.75h-.75V14H4Zm0 6h-.75v.75H4V20Zm10-2h-.75.75Zm-2 2v.75V20Zm0-6v.75V14Zm2 2h.75H14ZM4.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM4 4.75h14v-1.5H4v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25H4v1.5h14v-1.5ZM4.75 10V4h-1.5v6h1.5Zm14.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-14 10h8v-1.5H4v1.5ZM13.25 16v2h1.5v-2h-1.5ZM12 19.25H4v1.5h8v-1.5ZM4.75 20v-6h-1.5v6h1.5Zm8.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 18h-1.5ZM12 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 13.25v1.5ZM3.25 2v20h1.5V2h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;

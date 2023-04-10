import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlus = (
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
            d='M6 10v-.75.75Zm0 4v-.75.75Zm8-4h-.75c0 .414.336.75.75.75V10Zm0 4v-.75a.75.75 0 0 0-.75.75H14Zm-4 0h.75a.75.75 0 0 0-.75-.75V14Zm0-4v.75a.75.75 0 0 0 .75-.75H10Zm2 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 20.75v-1.5ZM13.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 18h-1.5ZM12 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 3.25v1.5Zm0-1.5A2.75 2.75 0 0 0 9.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM4.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 12h1.5ZM6 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 14.75v-1.5ZM19.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 12h-1.5Zm1.5 0A2.75 2.75 0 0 0 18 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM14 10.75h4v-1.5h-4v1.5ZM13.25 6v4h1.5V6h-1.5Zm0 8v4h1.5v-4h-1.5Zm4.75-.75h-4v1.5h4v-1.5Zm-8 0H6v1.5h4v-1.5Zm.75 4.75v-4h-1.5v4h1.5ZM6 10.75h4v-1.5H6v1.5ZM9.25 6v4h1.5V6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;

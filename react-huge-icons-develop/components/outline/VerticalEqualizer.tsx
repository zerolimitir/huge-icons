import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalEqualizer = (
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
            d='M20 11v-.75.75Zm2 2h.75H22Zm-8 0h-.75.75Zm2-2v.75V11Zm0 8v.75V19Zm-2-2h.75H14Zm6 2v-.75.75Zm2-2h-.75.75ZM8 5v-.75V5Zm2 2h-.75.75ZM2 7h-.75H2Zm2-2v.75V5Zm0 8v-.75.75Zm-2-2h.75H2Zm6 2v.75V13Zm2-2h.75H10Zm7.25 11a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5-11a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5ZM5.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5ZM5.25 5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5ZM20 18.25h-4v1.5h4v-1.5ZM14.75 17v-4h-1.5v4h1.5ZM16 11.75h4v-1.5h-4v1.5ZM21.25 13v4h1.5v-4h-1.5ZM20 11.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 10.25v1.5ZM14.75 13c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 13h1.5ZM16 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 19.75v-1.5Zm4 1.5A2.75 2.75 0 0 0 22.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-12-7.5H4v1.5h4v-1.5ZM2.75 11V7h-1.5v4h1.5ZM4 5.75h4v-1.5H4v1.5ZM9.25 7v4h1.5V7h-1.5ZM8 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 4.25v1.5ZM2.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 7h1.5ZM4 12.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 13.75v-1.5Zm4 1.5A2.75 2.75 0 0 0 10.75 11h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM18.75 22v-3h-1.5v3h1.5Zm0-14V2h-1.5v6h1.5Zm-12 14v-6h-1.5v6h1.5Zm0-17V2h-1.5v3h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalEqualizer);
export default ForwardRef;

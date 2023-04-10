import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartAsc = (
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
            d='M18 5h-.75.75Zm0 14h.75H18Zm4 0h.75H22Zm0-14h-.75.75ZM2 13h.75H2Zm0 6h-.75H2Zm4 0h-.75H6Zm0-6h.75H6Zm4-4h.75H10Zm0 10h-.75.75Zm4 0h.75H14Zm0-10h-.75.75Zm7.25-4v14h1.5V5h-1.5Zm-2.5 14V5h-1.5v14h1.5Zm0-14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 5h1.5ZM20 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 20 21.75v-1.5ZM21.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 19h-1.5Zm1.5-14A2.75 2.75 0 0 0 20 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-17.5 8v6h1.5v-6h-1.5Zm-2.5 6v-6h-1.5v6h1.5Zm0-6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 13h1.5ZM4 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 21.75v-1.5ZM5.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 19h-1.5Zm1.5-6A2.75 2.75 0 0 0 4 10.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm6.5-4v10h1.5V9h-1.5Zm-2.5 10V9h-1.5v10h1.5Zm0-10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9h1.5ZM12 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 21.75v-1.5ZM13.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 19h-1.5Zm1.5-10A2.75 2.75 0 0 0 12 6.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartAsc);
export default ForwardRef;

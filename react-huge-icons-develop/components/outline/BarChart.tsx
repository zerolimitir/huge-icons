import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChart = (
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
            d='M10 5h.75H10Zm0 14h-.75.75Zm4 0h-.75.75Zm0-14h.75H14ZM2 14h.75H2Zm0 5h-.75H2Zm4 0h-.75H6Zm0-5h.75H6Zm12-4h-.75.75Zm0 9h.75H18Zm4 0h.75H22Zm0-9h-.75.75Zm-8.75-5v14h1.5V5h-1.5Zm-2.5 14V5h-1.5v14h1.5Zm0-14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 21.75v-1.5ZM13.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 19h-1.5Zm1.5-14A2.75 2.75 0 0 0 12 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-9.5 9v5h1.5v-5h-1.5Zm-2.5 5v-5h-1.5v5h1.5Zm0-5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 14h1.5ZM4 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 21.75v-1.5ZM5.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 19h-1.5Zm1.5-5A2.75 2.75 0 0 0 4 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm14.5-4v9h1.5v-9h-1.5Zm-2.5 9v-9h-1.5v9h1.5Zm0-9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 10h1.5ZM20 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 20 21.75v-1.5ZM21.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 19h-1.5Zm1.5-9A2.75 2.75 0 0 0 20 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChart);
export default ForwardRef;

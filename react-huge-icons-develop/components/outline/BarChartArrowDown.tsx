import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowDown = (
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
            d='M6 10h-.75H6Zm0 10h.75H6Zm-4 0h-.75H2Zm0-10h.75H2Zm20 8h.75H22Zm0 2h-.75.75Zm-4 0h-.75.75Zm0-2h.75H18Zm-4-4h.75H14Zm0 6h-.75.75Zm-4 0h-.75.75Zm0-6h.75H10Zm9-2.75a.75.75 0 0 0 0 1.5v-1.5ZM22.75 9a.75.75 0 0 0-1.5 0h1.5Zm-2.22 2.584a.75.75 0 1 0 .94-1.168l-.94 1.168ZM2.095 1.256a.75.75 0 0 0-.19 1.488l.19-1.488ZM1.25 10v10h1.5V10h-1.5Zm5.5 10V10h-1.5v10h1.5Zm0-10A2.75 2.75 0 0 0 4 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM4 22.75A2.75 2.75 0 0 0 6.75 20h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM1.25 20A2.75 2.75 0 0 0 4 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm1.5-10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 10h1.5Zm14.5 8v2h1.5v-2h-1.5Zm5.5 2v-2h-1.5v2h1.5Zm0-2A2.75 2.75 0 0 0 20 15.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM20 22.75A2.75 2.75 0 0 0 22.75 20h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM17.25 20A2.75 2.75 0 0 0 20 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm1.5-2c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 18h1.5Zm-9.5-4v6h1.5v-6h-1.5Zm5.5 6v-6h-1.5v6h1.5Zm0-6A2.75 2.75 0 0 0 12 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM12 22.75A2.75 2.75 0 0 0 14.75 20h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM9.25 20A2.75 2.75 0 0 0 12 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm1.5-6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 14h1.5ZM19 12.75h2v-1.5h-2v1.5ZM22.75 11V9h-1.5v2h1.5ZM21 12.75A1.75 1.75 0 0 0 22.75 11h-1.5a.25.25 0 0 1-.25.25v1.5Zm.47-2.334c-3.99-3.211-7.059-5.283-10.03-6.66-2.98-1.383-5.827-2.05-9.345-2.5l-.19 1.488c3.424.437 6.107 1.075 8.905 2.372 2.808 1.303 5.768 3.288 9.72 6.468l.94-1.168Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowDown);
export default ForwardRef;

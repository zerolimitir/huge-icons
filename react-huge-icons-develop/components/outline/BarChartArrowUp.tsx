import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowUp = (
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
            d='M18 10h-.75.75Zm0 10h.75H18Zm4 0h.75H22Zm0-10h-.75.75ZM2 18h.75H2Zm0 2h-.75H2Zm4 0h-.75H6Zm0-2h.75H6Zm4-4h-.75.75Zm0 6h.75H10Zm4 0h.75H14Zm0-6h-.75.75Zm5-12.75a.75.75 0 0 0 0 1.5v-1.5ZM21.25 5a.75.75 0 0 0 1.5 0h-1.5Zm.22-1.416a.75.75 0 1 0-.94-1.168l.94 1.168ZM1.905 11.256a.75.75 0 0 0 .19 1.488l-.19-1.488ZM21.25 10v10h1.5V10h-1.5Zm-2.5 10V10h-1.5v10h1.5Zm0-10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 10h1.5ZM20 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 20 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5Zm1.5-10A2.75 2.75 0 0 0 20 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-17.5 8v2h1.5v-2h-1.5Zm-2.5 2v-2h-1.5v2h1.5Zm0-2c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 18h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM5.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 20h-1.5Zm1.5-2A2.75 2.75 0 0 0 4 15.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm6.5-4v6h1.5v-6h-1.5Zm-2.5 6v-6h-1.5v6h1.5Zm0-6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 14h1.5ZM12 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 22.75v-1.5ZM13.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 20h-1.5Zm1.5-6A2.75 2.75 0 0 0 12 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM19 2.75h2v-1.5h-2v1.5Zm2.25.25v2h1.5V3h-1.5ZM21 2.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 21 1.25v1.5Zm-.47-.334c-3.952 3.18-6.912 5.165-9.72 6.468-2.798 1.297-5.481 1.935-8.905 2.372l.19 1.488c3.518-.45 6.364-1.117 9.346-2.5 2.97-1.377 6.04-3.449 10.03-6.66l-.941-1.168Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowUp);
export default ForwardRef;

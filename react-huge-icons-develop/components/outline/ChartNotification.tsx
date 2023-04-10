import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartNotification = (
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
            d='M22.75 10a.75.75 0 0 0-1.5 0h1.5ZM14 2.75a.75.75 0 0 0 0-1.5v1.5Zm-9 8.5a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1 8.5H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5Zm20 0v-8h-1.5v8h1.5ZM6 2.75h8v-1.5H6v1.5Zm0 18.5A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5Zm12 1.5A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM5 12.75h1v-1.5H5v1.5ZM8.75 10V9h-1.5v1h1.5Zm2.5-1v6h1.5V9h-1.5Zm5.5 6v-1h-1.5v1h1.5ZM18 12.75h1v-1.5h-1v1.5ZM16.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 15.25 14h1.5ZM14 17.75A2.75 2.75 0 0 0 16.75 15h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM11.25 15A2.75 2.75 0 0 0 14 17.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM10 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 6.25v1.5ZM8.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 9h1.5ZM6 12.75A2.75 2.75 0 0 0 8.75 10h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM21.25 4.5a1.75 1.75 0 0 1-1.75 1.75v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5ZM19.5 6.25a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5ZM17.75 4.5c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25h1.5Zm1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5a3.25 3.25 0 0 0-3.25-3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartNotification);
export default ForwardRef;

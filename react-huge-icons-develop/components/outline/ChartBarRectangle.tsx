import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartBarRectangle = (
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
            d='M18 13h.75H18Zm0 2h-.75.75Zm-4 0h-.75.75Zm0-2h.75H14Zm-4-4h.75H10Zm-2 8v-.75.75Zm2-2h-.75.75Zm-4 0h.75H6Zm0-6h-.75H6Zm7.25 4v2h1.5v-2h-1.5Zm5.5 2v-2h-1.5v2h1.5Zm0-2A2.75 2.75 0 0 0 16 10.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM16 17.75A2.75 2.75 0 0 0 18.75 15h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM13.25 15A2.75 2.75 0 0 0 16 17.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm1.5-2c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 13h1.5Zm-9.5-4v6h1.5V9h-1.5Zm5.5 6V9h-1.5v6h1.5Zm0-6A2.75 2.75 0 0 0 8 6.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM8 17.75A2.75 2.75 0 0 0 10.75 15h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM5.25 15A2.75 2.75 0 0 0 8 17.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm1.5-6c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 9h1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartBarRectangle);
export default ForwardRef;

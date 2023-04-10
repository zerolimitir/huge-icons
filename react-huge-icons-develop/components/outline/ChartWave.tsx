import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartWave = (
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
            d='M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5ZM2.75 2a.75.75 0 0 0-1.5 0h1.5ZM22 21.75a.75.75 0 0 0 0-1.5v1.5Zm-16-9h1v-1.5H6v1.5ZM9.75 10V9h-1.5v1h1.5Zm2.5-1v6h1.5V9h-1.5Zm5.5 6v-1h-1.5v1h1.5ZM19 12.75h1v-1.5h-1v1.5ZM17.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 16.25 14h1.5ZM15 17.75A2.75 2.75 0 0 0 17.75 15h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM12.25 15A2.75 2.75 0 0 0 15 17.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM11 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 11 6.25v1.5ZM9.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 8.25 9h1.5ZM7 12.75A2.75 2.75 0 0 0 9.75 10h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM1.25 2v15h1.5V2h-1.5ZM6 21.75h16v-1.5H6v1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWave);
export default ForwardRef;

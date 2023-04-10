import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPresentation = (
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
            d='M6 9.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5ZM12.75 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v8h1.5V6h-1.5ZM18 17.25H6v1.5h12v-1.5ZM2.75 14V6h-1.5v8h1.5ZM6 17.25A3.25 3.25 0 0 1 2.75 14h-1.5A4.75 4.75 0 0 0 6 18.75v-1.5ZM21.25 14A3.25 3.25 0 0 1 18 17.25v1.5A4.75 4.75 0 0 0 22.75 14h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm0 9.5h1v-1.5H6v1.5ZM9.75 8v-.5h-1.5V8h1.5Zm1.5-.5v5h1.5v-5h-1.5Zm4.5 5V12h-1.5v.5h1.5ZM17 10.75h1v-1.5h-1v1.5ZM15.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 14.25 12h1.5Zm-2.25 2.75a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-2.25-2.25a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75h-1.5Zm-.75-5.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-.75.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 8.25 7.5h1.5ZM7 10.75A2.75 2.75 0 0 0 9.75 8h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM11.25 18v4h1.5v-4h-1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M14 22h-4' />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPresentation);
export default ForwardRef;

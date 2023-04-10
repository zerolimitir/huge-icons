import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWaves = (
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
            d='M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm12 2.5a.75.75 0 0 0 0-1.5v1.5Zm-12-11h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm0 11.5h1v-1.5H6v1.5ZM9.75 10v-.5h-1.5v.5h1.5Zm1.5-.5v5h1.5v-5h-1.5Zm5.25 4.25H18v-1.5h-1.5v1.5Zm-.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-2.25-2.25a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75h-1.5Zm-.75-5.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-.75.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 8.25 9.5h1.5ZM7 12.75A2.75 2.75 0 0 0 9.75 10h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWaves);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgIpod = (
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
            d='M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM16.25 12A4.25 4.25 0 0 1 12 16.25v1.5A5.75 5.75 0 0 0 17.75 12h-1.5ZM12 16.25A4.25 4.25 0 0 1 7.75 12h-1.5A5.75 5.75 0 0 0 12 17.75v-1.5ZM7.75 12A4.25 4.25 0 0 1 12 7.75v-1.5A5.75 5.75 0 0 0 6.25 12h1.5ZM12 7.75A4.25 4.25 0 0 1 16.25 12h1.5A5.75 5.75 0 0 0 12 6.25v1.5ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIpod);
export default ForwardRef;

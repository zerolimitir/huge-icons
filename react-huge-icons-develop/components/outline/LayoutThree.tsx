import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThree = (
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
            d='M22 6h.75H22Zm-4-4v-.75V2Zm0 20v.75V22Zm4-4h-.75.75ZM2 18h.75H2Zm4 4v-.75.75ZM2 6h-.75H2Zm4-4v.75V2ZM2 7.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5Zm-10-16v12h1.5V6h-1.5ZM6 22.75h12v-1.5H6v1.5ZM22.75 18V6h-1.5v12h1.5ZM18 1.25H6v1.5h12v-1.5ZM22.75 6A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5ZM18 22.75A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5Zm1.5-12A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM2 8.75h20v-1.5H2v1.5ZM11.25 8v14h1.5V8h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThree);
export default ForwardRef;

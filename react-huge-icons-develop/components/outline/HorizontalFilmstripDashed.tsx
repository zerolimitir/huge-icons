import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalFilmstripDashed = (
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
            d='M2 6h-.75H2Zm4-4v-.75V2Zm0 20v.75V22Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v-.75.75Zm4-16h-.75.75Zm-4-4v.75V2Zm-1.75 5v.75h1.5V7h-1.5Zm1.5-4v-.75h-1.5V3h1.5Zm-5 0v-.75h-1.5V3h1.5Zm-1.5 18v.75h1.5V21h-1.5Zm5 0v.75h1.5V21h-1.5Zm1.5-4v-.75h-1.5V17h1.5ZM6.25 7v.75h1.5V7h-1.5Zm1.5-4v-.75h-1.5V3h1.5Zm-1.5 18v.75h1.5V21h-1.5Zm1.5-4v-.75h-1.5V17h1.5ZM22 7.75a.75.75 0 0 0 0-1.5v1.5ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5Zm20 11.5a.75.75 0 0 0 0-1.5v1.5Zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 2.75h12v-1.5H6v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5-12A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5Zm-5 1V3h-1.5v4h1.5Zm0 14v-4h-1.5v4h1.5Zm-10-14V3h-1.5v4h1.5Zm0 14v-4h-1.5v4h1.5ZM22 6.25H2v1.5h20v-1.5Zm0 10H2v1.5h20v-1.5ZM12.75 21V3h-1.5v18h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalFilmstripDashed);
export default ForwardRef;

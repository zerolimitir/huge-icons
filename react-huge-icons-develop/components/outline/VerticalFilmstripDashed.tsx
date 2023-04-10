import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalFilmstripDashed = (
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
            d='M18 2v-.75V2Zm4 4h.75H22ZM2 6h-.75H2Zm4-4v.75V2Zm0 20v-.75.75Zm-4-4h.75H2Zm16 4v.75V22Zm4-4h-.75.75ZM6.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-20a.75.75 0 0 0-1.5 0h1.5ZM17 16.25h-.75v1.5H17v-1.5Zm4 1.5h.75v-1.5H21v1.5Zm-18-1.5h-.75v1.5H3v-1.5Zm4 1.5h.75v-1.5H7v1.5Zm10-11.5h-.75v1.5H17v-1.5Zm4 1.5h.75v-1.5H21v1.5Zm0 5h.75v-1.5H21v1.5ZM3 6.25h-.75v1.5H3v-1.5Zm4 1.5h.75v-1.5H7v1.5Zm-4 3.5h-.75v1.5H3v-1.5ZM16.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-20a.75.75 0 0 0-1.5 0h1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5Zm12 1.5A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM7.75 22V2h-1.5v20h1.5ZM17 17.75h4v-1.5h-4v1.5Zm-14 0h4v-1.5H3v1.5Zm14-10h4v-1.5h-4v1.5Zm-14 0h4v-1.5H3v1.5ZM17.75 22V2h-1.5v20h1.5ZM3 12.75h18v-1.5H3v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstripDashed);
export default ForwardRef;

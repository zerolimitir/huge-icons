import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCdBurning = (
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
            d='M10 2v-.75V2Zm3 3h-.75.75ZM3 5h-.75H3Zm3-3v.75V2Zm0 20v.75V22Zm-3-3h.75H3Zm7 3v-.75.75Zm4-3v-.75.75Zm-4 2.25H6v1.5h4v-1.5ZM3.75 19V5h-1.5v14h1.5ZM6 2.75h4v-1.5H6v1.5ZM12.25 5v14h1.5V5h-1.5ZM10 2.75A2.25 2.25 0 0 1 12.25 5h1.5A3.75 3.75 0 0 0 10 1.25v1.5ZM3.75 5A2.25 2.25 0 0 1 6 2.75v-1.5A3.75 3.75 0 0 0 2.25 5h1.5ZM6 21.25A2.25 2.25 0 0 1 3.75 19h-1.5A3.75 3.75 0 0 0 6 22.75v-1.5Zm4 1.5A3.75 3.75 0 0 0 13.75 19h-1.5A2.25 2.25 0 0 1 10 21.25v1.5ZM16.25 12A2.25 2.25 0 0 1 14 14.25v1.5A3.75 3.75 0 0 0 17.75 12h-1.5ZM14 9.75A2.25 2.25 0 0 1 16.25 12h1.5A3.75 3.75 0 0 0 14 8.25v1.5Zm0-1.5h-1v1.5h1v-1.5Zm0 6h-1v1.5h1v-1.5ZM20.25 12A6.25 6.25 0 0 1 14 18.25v1.5A7.75 7.75 0 0 0 21.75 12h-1.5ZM14 5.75A6.25 6.25 0 0 1 20.25 12h1.5A7.75 7.75 0 0 0 14 4.25v1.5Zm0-1.5h-1v1.5h1v-1.5Zm0 14h-1v1.5h1v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCdBurning);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProjector = (
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
        <circle r={1} fill='currentColor' transform='matrix(1 0 0 -1 15 11)' />
        <path
            fill='currentColor'
            d='M2 8h-.75H2Zm4-4v.75V4Zm0 14v-.75.75Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v.75V18Zm4-10h-.75.75ZM5.75 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM6 8.25a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3 2.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.25 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm1.5-10v6h1.5V8h-1.5ZM18 17.25H6v1.5h12v-1.5ZM2.75 14V8h-1.5v6h1.5ZM6 4.75h12v-1.5H6v1.5ZM2.75 8A3.25 3.25 0 0 1 6 4.75v-1.5A4.75 4.75 0 0 0 1.25 8h1.5ZM6 17.25A3.25 3.25 0 0 1 2.75 14h-1.5A4.75 4.75 0 0 0 6 18.75v-1.5ZM21.25 14A3.25 3.25 0 0 1 18 17.25v1.5A4.75 4.75 0 0 0 22.75 14h-1.5Zm1.5-6A4.75 4.75 0 0 0 18 3.25v1.5A3.25 3.25 0 0 1 21.25 8h1.5Zm-5.5 3A2.25 2.25 0 0 1 15 13.25v1.5A3.75 3.75 0 0 0 18.75 11h-1.5ZM15 13.25A2.25 2.25 0 0 1 12.75 11h-1.5A3.75 3.75 0 0 0 15 14.75v-1.5ZM12.75 11A2.25 2.25 0 0 1 15 8.75v-1.5A3.75 3.75 0 0 0 11.25 11h1.5ZM15 8.75A2.25 2.25 0 0 1 17.25 11h1.5A3.75 3.75 0 0 0 15 7.25v1.5ZM4.25 18v2h1.5v-2h-1.5ZM6 9.75h3v-1.5H6v1.5Zm0 4h3v-1.5H6v1.5ZM19.75 20v-2h-1.5v2h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProjector);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePiece = (
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
            d='M7 6v.75a.75.75 0 0 0 .624-.334L7 6Zm1.406-2.11-.624-.415.624.416Zm7.188 0 .624-.415-.624.416ZM17 6l-.624.416A.75.75 0 0 0 17 6.75V6Zm-2.75 7.5A2.25 2.25 0 0 1 12 15.75v1.5a3.75 3.75 0 0 0 3.75-3.75h-1.5ZM12 15.75a2.25 2.25 0 0 1-2.25-2.25h-1.5A3.75 3.75 0 0 0 12 17.25v-1.5ZM9.75 13.5A2.25 2.25 0 0 1 12 11.25v-1.5a3.75 3.75 0 0 0-3.75 3.75h1.5ZM12 11.25a2.25 2.25 0 0 1 2.25 2.25h1.5A3.75 3.75 0 0 0 12 9.75v1.5ZM7.624 6.416l1.406-2.11-1.248-.831-1.406 2.109 1.248.832ZM10.07 3.75h3.86v-1.5h-3.86v1.5Zm4.9.557 1.406 2.109 1.248-.832-1.406-2.11-1.248.833Zm-1.04-.557c.418 0 .808.209 1.04.557l1.248-.832A2.75 2.75 0 0 0 13.93 2.25v1.5Zm-4.9.557a1.25 1.25 0 0 1 1.04-.557v-1.5c-.92 0-1.778.46-2.288 1.225l1.248.832ZM21.25 10v7h1.5v-7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17v-7h-1.5v7h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm0 1.5h1v-1.5H6v1.5Zm12-1.5h-1v1.5h1v-1.5Z'
        />
        <circle cx={12} cy={6} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePiece);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartAirConditioning = (
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
            d='M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM2 12h-.75H2Zm4-4v.75V8Zm0 10v-.75.75Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v.75V18Zm4-6h-.75.75Zm-4-4v-.75V8ZM3 14.25h-.75v1.5H3v-1.5Zm18 1.5h.75v-1.5H21v1.5ZM15.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5Zm-5.5 1.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5ZM7.25 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.5a.75.75 0 0 0-1.5 0h1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM21.25 12v2h1.5v-2h-1.5ZM18 17.25H6v1.5h12v-1.5ZM2.75 14v-2h-1.5v2h1.5ZM6 8.75h12v-1.5H6v1.5ZM2.75 12A3.25 3.25 0 0 1 6 8.75v-1.5A4.75 4.75 0 0 0 1.25 12h1.5ZM6 17.25A3.25 3.25 0 0 1 2.75 14h-1.5A4.75 4.75 0 0 0 6 18.75v-1.5ZM21.25 14A3.25 3.25 0 0 1 18 17.25v1.5A4.75 4.75 0 0 0 22.75 14h-1.5Zm1.5-2A4.75 4.75 0 0 0 18 7.25v1.5A3.25 3.25 0 0 1 21.25 12h1.5ZM3 15.75h18v-1.5H3v1.5ZM16.75 22v-1.5h-1.5V22h1.5Zm-4 0v-1.5h-1.5V22h1.5Zm-4 0v-1.5h-1.5V22h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartAirConditioning);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartDoor = (
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
            d='M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM6 12h-.75H6Zm4-4v-.75V8Zm0 14v.75V22Zm-4-4h.75H6Zm12 0h-.75.75Zm-4 4v-.75.75Zm4-10h.75H18Zm-4-4v.75V8Zm-4.25 5.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM17.25 12v6h1.5v-6h-1.5ZM14 21.25h-4v1.5h4v-1.5ZM6.75 18v-6h-1.5v6h1.5ZM10 8.75h4v-1.5h-4v1.5ZM6.75 12A3.25 3.25 0 0 1 10 8.75v-1.5A4.75 4.75 0 0 0 5.25 12h1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5ZM17.25 18A3.25 3.25 0 0 1 14 21.25v1.5A4.75 4.75 0 0 0 18.75 18h-1.5Zm1.5-6A4.75 4.75 0 0 0 14 7.25v1.5A3.25 3.25 0 0 1 17.25 12h1.5Zm-10.5 1.5v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartDoor);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartPlug = (
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
            d='M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5Zm-4 3h8v-1.5H8v1.5ZM18.25 11v8h1.5v-8h-1.5ZM16 21.25H8v1.5h8v-1.5ZM5.75 19v-8h-1.5v8h1.5ZM8 21.25A2.25 2.25 0 0 1 5.75 19h-1.5A3.75 3.75 0 0 0 8 22.75v-1.5ZM18.25 19A2.25 2.25 0 0 1 16 21.25v1.5A3.75 3.75 0 0 0 19.75 19h-1.5ZM16 8.75A2.25 2.25 0 0 1 18.25 11h1.5A3.75 3.75 0 0 0 16 7.25v1.5Zm-8-1.5A3.75 3.75 0 0 0 4.25 11h1.5A2.25 2.25 0 0 1 8 8.75v-1.5ZM15.25 15A3.25 3.25 0 0 1 12 18.25v1.5A4.75 4.75 0 0 0 16.75 15h-1.5ZM12 18.25A3.25 3.25 0 0 1 8.75 15h-1.5A4.75 4.75 0 0 0 12 19.75v-1.5ZM8.75 15A3.25 3.25 0 0 1 12 11.75v-1.5A4.75 4.75 0 0 0 7.25 15h1.5ZM12 11.75A3.25 3.25 0 0 1 15.25 15h1.5A4.75 4.75 0 0 0 12 10.25v1.5ZM11.25 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartPlug);
export default ForwardRef;

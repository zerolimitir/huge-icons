import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartPower = (
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
            d='M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm1.73 1.587a.75.75 0 1 0-.643 1.355l.644-1.355Zm-6 1.355a.75.75 0 0 0-.643-1.355l.644 1.355ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM12 2.75a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM18.25 15A6.25 6.25 0 0 1 12 21.25v1.5A7.75 7.75 0 0 0 19.75 15h-1.5ZM12 21.25A6.25 6.25 0 0 1 5.75 15h-1.5A7.75 7.75 0 0 0 12 22.75v-1.5Zm2.678-11.899A6.25 6.25 0 0 1 18.25 15h1.5a7.75 7.75 0 0 0-4.428-7.004l-.644 1.355ZM5.75 15a6.25 6.25 0 0 1 3.572-5.649l-.644-1.355A7.75 7.75 0 0 0 4.25 15h1.5Zm5.5-7v2h1.5V8h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartPower);
export default ForwardRef;

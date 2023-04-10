import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKeyDotted = (
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
            d='M18 22.75a.75.75 0 0 0 0-1.5v1.5ZM17.25 13a.75.75 0 0 0 1.5 0h-1.5ZM10 2.75h4v-1.5h-4v1.5Zm8 18.5h-8v1.5h8v-1.5ZM6.75 18V6h-1.5v12h1.5Zm10.5-12v7h1.5V6h-1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5Zm4-18.5A3.25 3.25 0 0 1 17.25 6h1.5A4.75 4.75 0 0 0 14 1.25v1.5Zm-4-1.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm3.5 18.5h7v-1.5h-7v1.5Zm7-4.5h-7v1.5h7v-1.5Zm-7 0a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Zm9.25 2.25a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-7-1.5a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKeyDotted);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWallet = (
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
            d='M6 3.75h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Z'
        />
        <path
            fill='currentColor'
            d='M22 9h.75a.75.75 0 0 0-.75-.75V9Zm0 6v.75a.75.75 0 0 0 .75-.75H22Zm-4-6v.75V9Zm0 6v.75V15Zm3.25-6v6h1.5V9h-1.5Zm.75 5.25h-4v1.5h4v-1.5Zm-4-4.5h4v-1.5h-4v1.5ZM15.75 12A2.25 2.25 0 0 1 18 9.75v-1.5A3.75 3.75 0 0 0 14.25 12h1.5ZM18 14.25A2.25 2.25 0 0 1 15.75 12h-1.5A3.75 3.75 0 0 0 18 15.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;

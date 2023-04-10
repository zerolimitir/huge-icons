import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeposit = (
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
            d='M18 7h.75a.75.75 0 0 0-.75-.75V7Zm0 4h-.75.75ZM6 7v-.75a.75.75 0 0 0-.75.75H6Zm11.25 0v4h1.5V7h-1.5Zm0 4v8h1.5v-8h-1.5ZM16 20.25H8v1.5h8v-1.5ZM6.75 19V7h-1.5v12h1.5ZM6 7.75h12v-1.5H6v1.5Zm0-4h12v-1.5H6v1.5ZM2.75 7A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5ZM6 10.25A3.25 3.25 0 0 1 2.75 7h-1.5A4.75 4.75 0 0 0 6 11.75v-1.5ZM21.25 7A3.25 3.25 0 0 1 18 10.25v1.5A4.75 4.75 0 0 0 22.75 7h-1.5Zm1.5 0A4.75 4.75 0 0 0 18 2.25v1.5A3.25 3.25 0 0 1 21.25 7h1.5Zm-5.5 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 19h-1.5ZM8 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 21.75v-1.5Zm5.47-7.134a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-1.823-.53.53.53-.53Zm-1.414 0 .53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.78 4.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm1.78.47-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06Zm-3.767-1.293L9.47 12.056l1.06 1.06 1.293-1.293-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06Zm-.487 5.823v-5h-1.5v5h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeposit);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletOpenLeft = (
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
            d='M2 6v-.75a.75.75 0 0 0-.75.75H2Zm0 .75h16v-1.5H2v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5Z'
        />
        <path
            fill='currentColor'
            d='M16 6v.75a.75.75 0 0 0 .75-.75H16ZM2 6h-.75c0 .414.336.75.75.75V6Zm4-3.25h6v-1.5H6v1.5Zm10 2.5H2v1.5h14v-1.5Zm-4-2.5A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM22 12h.75a.75.75 0 0 0-.75-.75V12Zm0 4v.75a.75.75 0 0 0 .75-.75H22Zm-4-4v.75V12Zm0 4v.75V16Zm3.25-4v4h1.5v-4h-1.5Zm.75 3.25h-4v1.5h4v-1.5Zm-4-2.5h4v-1.5h-4v1.5ZM16.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 15.25 14h1.5ZM18 15.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 18 16.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletOpenLeft);
export default ForwardRef;

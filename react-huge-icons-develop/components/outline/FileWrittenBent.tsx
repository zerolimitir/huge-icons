import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileWrittenBent = (
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
            d='m22.877 18.99.726.185-.726-.185Zm-12 0 .726.185-.726-.185ZM15 7.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 6.5a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm15.15 7.555A3.252 3.252 0 0 1 19 21.25v1.5a4.75 4.75 0 0 0 4.603-3.575l-1.453-.37Zm-12 0A3.252 3.252 0 0 1 7 21.25v1.5a4.75 4.75 0 0 0 4.603-3.575l-1.453-.37ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5ZM19 21.25H7v1.5h12v-1.5ZM3.75 18V5h-1.5v13h1.5ZM6 2.75h10v-1.5H6v1.5Zm6 16h7v-1.5h-7v1.5Zm7 0h3v-1.5h-3v1.5ZM18.25 5v13h1.5V5h-1.5ZM16 2.75A2.25 2.25 0 0 1 18.25 5h1.5A3.75 3.75 0 0 0 16 1.25v1.5Zm-4.397 16.425a.691.691 0 0 1 .19-.33.304.304 0 0 1 .207-.095v-1.5c-.999 0-1.658.8-1.85 1.555l1.453.37ZM3.75 5A2.25 2.25 0 0 1 6 2.75v-1.5A3.75 3.75 0 0 0 2.25 5h1.5Zm19.853 14.175c.29-1.14-.706-1.925-1.603-1.925v1.5c.074 0 .125.032.146.054.009.01.008.012.006.006-.002-.009 0-.013-.002-.005l1.453.37ZM15 6.25H7v1.5h8v-1.5Zm-4 5H7v1.5h4v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWrittenBent);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileDownloadBent = (
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
            d='m21.877 18.99.726.185-.726-.185Zm-12 0 .726.185-.726-.185ZM7.53 9.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.884 2.116-.53-.53.53.53Zm2.116-1.056a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM9.25 12a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm10.4 11.805A3.252 3.252 0 0 1 18 21.25v1.5a4.75 4.75 0 0 0 4.603-3.575l-1.453-.37Zm-12 0A3.252 3.252 0 0 1 6 21.25v1.5a4.75 4.75 0 0 0 4.603-3.575l-1.453-.37ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V5h-1.5v13h1.5ZM5 2.75h10v-1.5H5v1.5Zm6 16h7v-1.5h-7v1.5Zm7 0h3v-1.5h-3v1.5ZM17.25 5v13h1.5V5h-1.5ZM15 2.75A2.25 2.25 0 0 1 17.25 5h1.5A3.75 3.75 0 0 0 15 1.25v1.5Zm-4.397 16.425a.691.691 0 0 1 .19-.33.304.304 0 0 1 .207-.095v-1.5c-.999 0-1.658.8-1.85 1.555l1.453.37ZM2.75 5A2.25 2.25 0 0 1 5 2.75v-1.5A3.75 3.75 0 0 0 1.25 5h1.5Zm19.853 14.175c.29-1.14-.706-1.925-1.603-1.925v1.5c.074 0 .125.032.146.054.009.01.008.012.006.006-.002-.009 0-.013-.002-.005l1.453.37ZM6.47 10.53l1.585 1.586 1.061-1.06L7.53 9.47l-1.06 1.06Zm5.474 1.586 1.586-1.586-1.06-1.06-1.586 1.585 1.06 1.061ZM10.75 12V7h-1.5v5h1.5Zm-2.695.116a2.75 2.75 0 0 0 3.89 0l-1.061-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDownloadBent);
export default ForwardRef;

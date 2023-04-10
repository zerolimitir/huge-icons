import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxHandle = (
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
            d='M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
        <path
            fill='currentColor'
            d='M8 2v-.75a.75.75 0 0 0-.75.75H8Zm8 0h.75a.75.75 0 0 0-.75-.75V2Zm-3.293 6.707-.53.53.53-.53Zm-1.414 0-.53-.53.53.53Zm-1.586 1.586.53.53-.53-.53Zm4.586 0 .53-.53-.53.53ZM8 2.75h8v-1.5H8v1.5ZM15.25 2v7.586h1.5V2h-1.5Zm-6.5 7.586V2h-1.5v7.586h1.5Zm6.073.177-1.586-1.586-1.06 1.06 1.586 1.586 1.06-1.06Zm-4.06-1.586L9.177 9.763l1.06 1.06 1.586-1.586-1.06-1.06Zm2.474 0a1.75 1.75 0 0 0-2.474 0l1.06 1.06a.25.25 0 0 1 .354 0l1.06-1.06ZM7.25 9.586c0 1.559 1.885 2.34 2.987 1.237l-1.06-1.06a.25.25 0 0 1-.427-.177h-1.5Zm8 0a.25.25 0 0 1-.427.177l-1.06 1.06c1.102 1.103 2.987.322 2.987-1.237h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxHandle);
export default ForwardRef;

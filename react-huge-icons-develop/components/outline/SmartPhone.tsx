import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartPhone = (
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
            d='M12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06ZM7.227 9.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5 6h-.75H5Zm4-4v.75V2Zm0 20v.75V22Zm-4-4h.75H5Zm14 0h.75H19Zm-4 4v-.75.75Zm4-16h-.75.75Zm-4-4v-.75V2Zm-4 16.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1-11a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 7.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 11.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 8.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 11.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 10.25v1.5ZM18.25 6v12h1.5V6h-1.5ZM15 21.25H9v1.5h6v-1.5ZM5.75 18V6h-1.5v12h1.5ZM9 2.75h6v-1.5H9v1.5ZM5.75 6A3.25 3.25 0 0 1 9 2.75v-1.5A4.75 4.75 0 0 0 4.25 6h1.5ZM9 21.25A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM18.25 18A3.25 3.25 0 0 1 15 21.25v1.5A4.75 4.75 0 0 0 19.75 18h-1.5Zm1.5-12A4.75 4.75 0 0 0 15 1.25v1.5A3.25 3.25 0 0 1 18.25 6h1.5ZM11 19.75h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartPhone);
export default ForwardRef;

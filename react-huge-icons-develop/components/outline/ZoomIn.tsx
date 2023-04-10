import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoomIn = (
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
            d='M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.44-2.56a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM15.75 13a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM17 15.75a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-4.375 7.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8.625a.75.75 0 0 0 1.5 0h-1.5Zm1.28 11.845-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06ZM14.25 13v4h1.5v-4h-1.5ZM17 14.25h-4v1.5h4v-1.5Zm3.25.75c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 21.75 15h-1.5ZM15 20.25A5.25 5.25 0 0 1 9.75 15h-1.5A6.75 6.75 0 0 0 15 21.75v-1.5ZM9.75 15c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 8.25 15h1.5ZM15 9.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 8.25v1.5Zm-8-6h10v-1.5H7v1.5Zm1.625 16.5H7v1.5h1.625v-1.5ZM3.75 17V7h-1.5v10h1.5Zm16.5-10v1.625h1.5V7h-1.5ZM7 20.25A3.25 3.25 0 0 1 3.75 17h-1.5A4.75 4.75 0 0 0 7 21.75v-1.5Zm10-16.5A3.25 3.25 0 0 1 20.25 7h1.5A4.75 4.75 0 0 0 17 2.25v1.5ZM7 2.25A4.75 4.75 0 0 0 2.25 7h1.5A3.25 3.25 0 0 1 7 3.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomIn);
export default ForwardRef;

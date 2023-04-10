import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoom = (
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
            fillRule='evenodd'
            d='M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h1.625a.75.75 0 0 0 0-1.5H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h10A3.25 3.25 0 0 1 20.25 7v1.063a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 17 2.25H7Zm8 7.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM8.25 15a6.75 6.75 0 1 1 12.024 4.213l1.256 1.257a.75.75 0 1 1-1.06 1.06l-1.257-1.256A6.75 6.75 0 0 1 8.25 15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoom);
export default ForwardRef;

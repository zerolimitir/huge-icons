import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookInfo = (
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
            d='M17 2H7a3 3 0 0 0-3 3v10.646A4.484 4.484 0 0 1 7 14.5h13V5a3 3 0 0 0-3-3Zm-4.25 7a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V9ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 16a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookInfo);
export default ForwardRef;

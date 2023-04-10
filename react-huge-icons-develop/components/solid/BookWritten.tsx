import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookWritten = (
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
            d='M17 2H7a3 3 0 0 0-3 3v10.646A4.484 4.484 0 0 1 7 14.5h13V5a3 3 0 0 0-3-3ZM8 5.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM7.25 10A.75.75 0 0 1 8 9.25h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM7 16h13v3a3 3 0 0 1-3 3H7a3 3 0 1 1 0-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookWritten);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookMarkedWritten = (
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
            d='M17 2H7a3 3 0 0 0-3 3v7.646A4.484 4.484 0 0 1 7 11.5h13V5a3 3 0 0 0-3-3ZM8 4.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM7.25 8.5A.75.75 0 0 1 8 7.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM7 13h13v3a3 3 0 0 1-2.5 2.959V16a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5v3H7a3 3 0 1 1 0-6Zm5 3h4v6l-2-2-2 2v-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarkedWritten);
export default ForwardRef;

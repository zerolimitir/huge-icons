import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaximizeRectangleDoted = (
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
            d='M5.25 6A4.75 4.75 0 0 1 10 1.25h8A4.75 4.75 0 0 1 22.75 6v8A4.75 4.75 0 0 1 18 18.75h-5.309a4.751 4.751 0 0 1-4.691 4H6A4.75 4.75 0 0 1 1.25 18v-2a4.751 4.751 0 0 1 4-4.691V6Zm1.5 5.25H8a4.73 4.73 0 0 1 2.787.903l4.402-4.403H12a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8.81l-4.403 4.403A4.73 4.73 0 0 1 12.75 16v1.25H18A3.25 3.25 0 0 0 21.25 14V6A3.25 3.25 0 0 0 18 2.75h-8A3.25 3.25 0 0 0 6.75 6v5.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangleDoted);
export default ForwardRef;
